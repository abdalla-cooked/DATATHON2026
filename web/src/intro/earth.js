// Hero Earth for the intro: a procedural shader sphere (no textures to download).
// Land from fbm simplex noise, a dark ocean with a sun glint, faint city lights on the night side,
// thin clouds, a Fresnel rim in the accent blue, and an additive atmosphere shell behind it.
// Lit from `uSunDir` (world space, from Earth toward the Sun).
import * as THREE from 'three';

// 3D simplex noise (Ashima Arts / Stefan Gustavson, MIT).
const NOISE = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
float fbm4(vec3 p) {
  float f = 0.0, a = 0.5;
  for (int k = 0; k < 4; k++) { f += a * snoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return f;
}
float fbm2(vec3 p) { return 0.6667 * snoise(p) + 0.3333 * snoise(p * 2.1 + 5.0); }
`;

const vertexShader = /* glsl */ `
varying vec3 vObj;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vObj = normalize(position);
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position, 1.0);
  vPosW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;

const fragmentShader = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uAccent;
uniform float uTime;
uniform float uOpacity;
varying vec3 vObj;
varying vec3 vNormalW;
varying vec3 vPosW;
${NOISE}
void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vPosW);
  vec3 p = vObj;

  float h = fbm4(p * 1.7);
  float land = smoothstep(0.04, 0.10, h);
  float ice = smoothstep(0.80, 0.90, abs(p.y) + 0.05 * h);
  float detail = 0.5 + 0.5 * snoise(p * 7.0);
  vec3 ocean = mix(vec3(0.010, 0.035, 0.085), vec3(0.020, 0.075, 0.150), smoothstep(-0.4, 0.04, h));
  vec3 ground = mix(vec3(0.075, 0.13, 0.06), vec3(0.30, 0.25, 0.16), detail * smoothstep(0.10, 0.35, h));
  vec3 surf = mix(ocean, ground, land);
  surf = mix(surf, vec3(0.80, 0.85, 0.90), ice);

  float ndl = dot(N, uSunDir);
  float day = smoothstep(-0.12, 0.22, ndl);
  vec3 col = surf * (0.02 + 1.25 * max(ndl, 0.0));

  // sun glint on the water
  vec3 H = normalize(uSunDir + V);
  col += vec3(0.9, 0.85, 0.7) * pow(max(dot(N, H), 0.0), 60.0) * (1.0 - land) * (1.0 - ice) * day * 0.6;

  // thin drifting clouds (lit side only, faintly visible at night)
  float cl = smoothstep(0.15, 0.55, fbm2(p * 3.2 + vec3(uTime * 0.004, 0.0, 0.0)) + 0.15);
  col = mix(col, vec3(0.92) * (0.03 + max(ndl, 0.0)), cl * 0.55);

  // city lights on the night side: clustered on land, away from the poles
  // regions (low frequency) times specks (high frequency), so lights read as scattered towns
  float region = smoothstep(0.50, 0.78, 0.5 + 0.5 * fbm2(p * 12.0));
  float speck = smoothstep(0.60, 0.88, 0.5 + 0.5 * fbm2(p * 70.0));
  float city = land * (1.0 - ice) * region * speck * smoothstep(0.08, 0.30, h);
  col += vec3(1.0, 0.72, 0.40) * city * (1.0 - day) * (1.0 - cl * 0.7) * 1.2;

  // Fresnel rim: strong on the lit limb (the crescent), a faint blue line around the night side
  float fr = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  col += uAccent * fr * (0.18 + 1.1 * smoothstep(-0.35, 0.45, ndl));

  gl_FragColor = vec4(col, uOpacity);
}`;

const atmoVertex = /* glsl */ `
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position, 1.0);
  vPosW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;

// Back faces of a slightly larger sphere: brightest just outside the limb, fading outward.
const atmoFragment = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uAccent;
uniform float uOpacity;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vPosW);
  // -dot(N, V) is 0 at the shell's outer edge and ~0.49 where the view ray grazes the planet's limb
  float rim = pow(clamp(-dot(N, V) / 0.49, 0.0, 1.0), 2.2);
  float lit = 0.12 + 0.88 * smoothstep(-0.45, 0.55, dot(N, uSunDir));
  gl_FragColor = vec4(uAccent * rim * lit * 0.9 * uOpacity, 1.0);
}`;

export function makeEarth(radius) {
  const uniforms = {
    uSunDir: { value: new THREE.Vector3(1, 0, 0) },
    uAccent: { value: new THREE.Color(0x5aa2ff) },
    uTime: { value: 0 },
    uOpacity: { value: 1 },
  };
  const group = new THREE.Group();
  const tilt = new THREE.Group();
  tilt.rotation.z = 23.44 * Math.PI / 180;
  group.add(tilt);

  const surface = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 128, 96),
    new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader }),
  );
  tilt.add(surface);

  const atmo = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.14, 96, 64),
    new THREE.ShaderMaterial({
      uniforms, vertexShader: atmoVertex, fragmentShader: atmoFragment,
      side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
    }),
  );
  group.add(atmo);

  return {
    group,
    uniforms,
    update(time, sunDir) {
      uniforms.uTime.value = time;
      uniforms.uSunDir.value.copy(sunDir);
      surface.rotation.y = time * 0.025; // slow turn
    },
    dispose() {
      surface.geometry.dispose(); surface.material.dispose();
      atmo.geometry.dispose(); atmo.material.dispose();
    },
  };
}
