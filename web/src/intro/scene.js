// The intro's one WebGL scene. Every piece of 3D state is a function of a single number, `s`
// (scroll position in screens, 0..TOTAL), so scrubbing back and forth always lands on the same frame.
// The last frame (s >= 12.9) is the live app's first frame: same camera, Sun, planets, orbit rings,
// and the same default asteroid list drawn grey at the app's safe dot size (lib/replay.js).
import * as THREE from 'three';
import { addPlanets, addSunAndLights, BG_COLOR } from '../three/bodies.js';
import { BODIES, planetElementsAt } from '../three/planets.js';
import { positionAt, makeOrbitCloud, orbitPoints } from '../three/kepler.js';
import { jdFromDate } from '../three/time.js';
import { defaultCloud } from '../three/cloudFilter.js';
import { revealOf, REPLAY_GREY, SAFE_PX, appPixelRatio } from '../lib/replay.js';
import { makeEarth } from './earth.js';

export const TOTAL = 14.9;      // screens of scroll
export const SETTLE_S = 12.95;  // the launch button tweens s to at least this; the camera is on the app view
const APP_VIEW_S = 12.9;
const EARTH_R = 0.27;           // same as the app's Earth (planets.js)
const DEG = Math.PI / 180;
const BAND_AU = 0.05;           // NASA's MOID cutoff, drawn as a ring around Earth's orbit (1 AU = 10 units)
export const introPixelRatio = () => Math.min(window.devicePixelRatio || 1, 1.5);

// ---- tracks: piecewise smoothstep over [screen, value] keys ----------------------------------------
const smooth = (t) => t * t * (3 - 2 * t);
function track(keys) {
  return (s) => {
    if (s <= keys[0][0]) return keys[0][1];
    for (let k = 0; k < keys.length - 1; k++) {
      const [s0, v0] = keys[k], [s1, v1] = keys[k + 1];
      if (s <= s1) return v0 + (v1 - v0) * smooth((s - s0) / (s1 - s0));
    }
    return keys[keys.length - 1][1];
  };
}
export const TRACKS = {
  dust: track([[0, 1], [1.6, 0]]),
  count: track([[1.2, 0], [2.9, 1]]),          // share of the cloud revealed (the counter reads count × neos_used)
  rings: track([[1.3, 0], [2.4, 1]]),          // planet orbit rings (hidden while we're right next to Earth)
  band: track([[3.0, 0], [3.6, 1], [4.8, 1], [5.3, 0]]),
  haz: track([[4.9, 0], [5.6, 1], [8.6, 1], [9.2, 0]]),
  apoDraw: track([[6.9, 0], [7.9, 1]]),
  apoAlpha: track([[6.75, 0], [6.95, 1], [8.4, 1], [9.0, 0]]),
  hidden: track([[8.8, 0], [9.8, 1], [11.9, 1], [12.6, 0]]),
  measured: track([[10.3, 0], [10.8, 1], [11.9, 1], [12.4, 0]]),
  launch: track([[11.9, 0], [12.8, 1]]),
  thin: track([[12.0, 0], [12.8, 1]]),
  stars: track([[0, 1], [12.0, 1], [12.9, 0]]),
  shift: track([[3.4, 0], [4.0, 1], [11.9, 1], [12.7, 0]]),
};
const SHIFT = 0.18; // share of the viewport the scene slides over to leave room for the copy

// ---- camera: keys {target, log(dist), az, el}, monotone cubic per channel ------------------------
function monotone(xs, ys) {
  const n = xs.length, d = [], m = new Array(n);
  for (let i = 0; i < n - 1; i++) d[i] = (ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]);
  m[0] = d[0]; m[n - 1] = d[n - 2];
  for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  for (let i = 0; i < n - 1; i++) { // Fritsch–Carlson: keep each segment monotone (no overshoot)
    if (d[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
    const a = m[i] / d[i], b = m[i + 1] / d[i], h = a * a + b * b;
    if (h > 9) { const t = 3 / Math.sqrt(h); m[i] = t * a * d[i]; m[i + 1] = t * b * d[i]; }
  }
  return (x) => {
    if (x <= xs[0]) return ys[0];
    if (x >= xs[n - 1]) return ys[n - 1];
    let i = 0;
    while (x > xs[i + 1]) i++;
    const h = xs[i + 1] - xs[i], t = (x - xs[i]) / h, t2 = t * t, t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * ys[i] + (t3 - 2 * t2 + t) * h * m[i]
      + (-2 * t3 + 3 * t2) * ys[i + 1] + (t3 - t2) * h * m[i + 1];
  };
}

function cameraPath(E, focus) {
  const azE = Math.atan2(E.x, E.z);      // direction from the Sun to Earth: the night side
  const azF = Math.atan2(focus.x, focus.z);
  const O = new THREE.Vector3();
  const appDist = Math.hypot(25, 35), appEl = Math.atan2(25, 35);
  const hero = [E.clone().add(new THREE.Vector3(0, 0.11, 0)), 0.85, azE + 0.62, 12 * DEG];
  const keys = [
    [0, ...hero],
    [0.4, ...hero],
    [1.25, E.clone(), 3, azE + 1.5, 20 * DEG],
    [2.6, E.clone().multiplyScalar(0.3), 85, azE * 0.5 + 0.4, 55 * DEG],
    [3.8, E.clone().multiplyScalar(0.8), 30, azE + 0.35, 22 * DEG],
    [5.6, O, 48, azE * 0.5, 38 * DEG],
    [7.5, O, 36, azE * 0.3, 80 * DEG],
    [9.3, focus.clone(), 22, azF + 0.45, 32 * DEG],
    [11.0, focus.clone(), 9, azF + 0.25, 24 * DEG],
    [APP_VIEW_S, O, appDist, 0, appEl],
    [TOTAL, O, appDist, 0, appEl],
  ];
  // unwrap the azimuth so the camera always turns the short way; the final key must stay a multiple of 2π
  const az = keys.map((k) => k[3]);
  for (let i = 1; i < az.length; i++) {
    while (az[i] - az[i - 1] > Math.PI) az[i] -= 2 * Math.PI;
    while (az[i] - az[i - 1] < -Math.PI) az[i] += 2 * Math.PI;
  }
  const xs = keys.map((k) => k[0]);
  const ch = (f) => monotone(xs, keys.map(f));
  return {
    tx: ch((k) => k[1].x), ty: ch((k) => k[1].y), tz: ch((k) => k[1].z),
    ld: ch((k) => Math.log(k[2])), az: monotone(xs, az), el: ch((k) => k[4]),
  };
}

// ---- small sprites/shaders ------------------------------------------------------------------------
function glowTexture() {
  const s = 128, cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const g = cv.getContext('2d');
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, 'rgba(255,240,200,1)');
  grad.addColorStop(0.12, 'rgba(255,214,140,0.65)');
  grad.addColorStop(0.4, 'rgba(255,170,80,0.14)');
  grad.addColorStop(1, 'rgba(255,150,60,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(cv);
}

const softPointsFrag = /* glsl */ `
uniform vec3 uColor;
uniform float uAlpha;
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  gl_FragColor = vec4(uColor, uAlpha * vA * (1.0 - smoothstep(0.15, 0.5, d)));
  #include <colorspace_fragment>
}`;

// Asteroid cloud. Dots never depth-test (like the app): they stack by draw order, hazards last.
const cloudVert = /* glsl */ `
attribute float aReveal;
attribute float aInApp;
attribute float aPha;
attribute float aHidden;
uniform float uCount, uHaz, uHidden, uLaunch, uThin, uPR, uSafe, uTime;
uniform vec3 uBase, uRed, uGrey;
varying vec3 vColor;
varying float vAlpha;
void main() {
  float shown = step(aReveal, uCount);
  float hz = uHaz * aPha;
  float hd = uHidden * aHidden;
  float red = max(hz, hd);
  vec3 col = mix(uBase, uRed, red);
  float size = mix(1.8, 3.4, hz);
  size = mix(size, 4.4 + 0.9 * sin(uTime * 2.6 + aReveal * 40.0), hd);
  float focus = max(uHaz, uHidden);
  float a = 0.85 * mix(1.0, 0.22 + 0.78 * red, focus);
  // launch: become the app's first replay frame (opaque grey, the app's safe size on screen)
  col = mix(col, uGrey, uLaunch);
  float px = mix(size * uPR, uSafe, uLaunch);
  a = mix(a, 1.0, uLaunch) * shown * mix(1.0, aInApp, uThin);
  vColor = col;
  vAlpha = a;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = a < 0.004 ? 0.0 : px;
}`;
const cloudFrag = /* glsl */ `
uniform float uLaunch;
varying vec3 vColor;
varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.484) discard; // the app's dot sprite edge (alphaTest 0.5 on a radius 31/64 disc)
  float a = vAlpha * mix(1.0 - smoothstep(0.2, 0.484, d), 1.0, uLaunch);
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor, a);
  #include <colorspace_fragment>
}`;

// Thin rings around highlighted asteroids (the 34 measured hidden hazards, Apophis).
const ringVert = /* glsl */ `
uniform float uSize;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = uSize;
}`;
const ringFrag = /* glsl */ `
uniform vec3 uColor;
uniform float uAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float ring = smoothstep(0.34, 0.39, d) * (1.0 - smoothstep(0.43, 0.48, d));
  if (ring * uAlpha < 0.01) discard;
  gl_FragColor = vec4(uColor, ring * uAlpha);
  #include <colorspace_fragment>
}`;

// ---- the scene --------------------------------------------------------------------------------------
export function createIntroScene(canvas, labelLayer) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  let pr = introPixelRatio();
  renderer.setPixelRatio(pr);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG_COLOR);
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 5000); // the app's camera

  const jd = jdFromDate(new Date());
  addSunAndLights(scene);
  const planets = addPlanets(scene, jd, { labels: false });
  for (const { planet, body } of planets) positionAt(planetElementsAt(planet, jd), undefined, body.position);
  const rings = planets.map(({ ring }) => ({ mat: ring.material, base: ring.material.opacity }));
  const earthBody = planets.find((p) => p.planet.name === 'Earth').body;
  const E = earthBody.position.clone();
  const sunDir = E.clone().negate().normalize();

  // shader Earth (swapped for the app's plain Earth during the launch)
  const earth = makeEarth(EARTH_R);
  earth.group.position.copy(E);
  scene.add(earth.group);
  earthBody.visible = false;

  // sun glow
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), color: 0xffffff, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
  }));
  glow.scale.setScalar(4.2);
  scene.add(glow);

  // starfield
  const STARS = 2500;
  const starPos = new Float32Array(STARS * 3), starA = new Float32Array(STARS);
  const v = new THREE.Vector3();
  for (let k = 0; k < STARS; k++) {
    v.randomDirection().multiplyScalar(1800 + Math.random() * 600).toArray(starPos, k * 3);
    starA[k] = 0.25 + 0.75 * Math.pow(Math.random(), 2.2);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  starGeo.setAttribute('aA', new THREE.BufferAttribute(starA, 1));
  const starMat = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(0xdfe7ff) }, uAlpha: { value: 1 }, uPR: { value: pr } },
    vertexShader: /* glsl */ `
      attribute float aA; uniform float uPR; varying float vA;
      void main() { vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = (1.2 + 1.6 * aA) * uPR; }`,
    fragmentShader: softPointsFrag, transparent: true, depthWrite: false,
  });
  const stars = new THREE.Points(starGeo, starMat);
  stars.frustumCulled = false;
  scene.add(stars);

  // drifting dust around Earth (hero only)
  const DUST = 400;
  const dustPos = new Float32Array(DUST * 3), dustSeed = new Float32Array(DUST);
  for (let k = 0; k < DUST; k++) {
    v.randomDirection().multiplyScalar(0.45 + Math.random() * 1.6).add(E).toArray(dustPos, k * 3);
    dustSeed[k] = Math.random();
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  dustGeo.setAttribute('aA', new THREE.BufferAttribute(dustSeed, 1));
  const dustMat = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(0xa9c4ff) }, uAlpha: { value: 1 }, uPR: { value: pr }, uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      attribute float aA; uniform float uPR; uniform float uTime; varying float vA;
      void main() {
        vA = 0.25 + 0.6 * aA;
        float t = uTime * (0.05 + 0.08 * aA) + aA * 60.0;
        vec3 p = position + vec3(sin(t), sin(t * 0.7 + 1.3), cos(t * 0.9)) * 0.06;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (1.0 + 1.4 * aA) * uPR;
      }`,
    fragmentShader: softPointsFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  dust.frustumCulled = false;
  scene.add(dust);

  // the NASA band: 0.05 AU either side of Earth's actual orbit
  const earthEl = planetElementsAt(BODIES.find((b) => b.name === 'Earth'), jd);
  const band = (() => {
    const pts = orbitPoints(earthEl, 256), w = BAND_AU * 10;
    const pos = new Float32Array(pts.length * 6), idx = [];
    pts.forEach((p, k) => {
      const r = Math.hypot(p.x, p.z);
      p.clone().multiplyScalar((r - w) / r).toArray(pos, k * 6);
      p.clone().multiplyScalar((r + w) / r).toArray(pos, k * 6 + 3);
      if (k < pts.length - 1) { const a = 2 * k; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setIndex(idx);
    const fill = new THREE.Mesh(g, new THREE.MeshBasicMaterial({
      color: 0x5aa2ff, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x8cc0ff, transparent: true, opacity: 0, depthWrite: false });
    const edge = (sign) => new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts.map((p) => { const r = Math.hypot(p.x, p.z); return p.clone().multiplyScalar((r + sign * w) / r); })),
      edgeMat,
    );
    const grp = new THREE.Group();
    grp.add(fill, edge(-1), edge(1));
    scene.add(grp);
    return { grp, fill, edgeMat };
  })();

  const pickPx = () => SAFE_PX / appPixelRatio() * pr; // app dot size, in this renderer's buffer pixels
  const cloudU = {
    uCount: { value: 0 }, uHaz: { value: 0 }, uHidden: { value: 0 }, uLaunch: { value: 0 }, uThin: { value: 0 },
    uPR: { value: pr }, uSafe: { value: pickPx() }, uTime: { value: 0 },
    uBase: { value: new THREE.Color(0x86a6d8) }, uRed: { value: new THREE.Color(0xff3030) }, uGrey: { value: new THREE.Color(REPLAY_GREY) },
  };
  const ringMat = (color, sizeCss) => new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(color) }, uAlpha: { value: 0 }, uSize: { value: sizeCss * pr }, sizeCss: { value: sizeCss } },
    vertexShader: ringVert, fragmentShader: ringFrag, transparent: true, depthTest: false, depthWrite: false,
  });

  let data = null;         // built once the asteroid list arrives
  let path = cameraPath(E, E);
  const labels = [];       // { el, pos, alpha: () => number }

  function addLabel(pos, html, cls, alphaFn) {
    const el = document.createElement('div');
    el.className = 'intro-label ' + cls;
    el.innerHTML = html;
    labelLayer.appendChild(el);
    labels.push({ el, pos: pos.clone(), alpha: alphaFn });
  }

  function setData(asteroids, metrics) {
    if (data || !asteroids || !metrics) return;
    const list = asteroids.filter((a) => a.e < 1);
    // hazards and hidden hazards draw last so they sit on top
    const rank = (a) => (a.hidden ? 2 : a.pha === 1 ? 1 : 0);
    list.sort((x, y) => rank(x) - rank(y));
    const n = list.length;
    const pos = new Float32Array(n * 3);
    makeOrbitCloud(list)(jd, pos); // the app's orbit math, at today's date
    const inApp = new Set(defaultCloud(asteroids, metrics).map((a) => a.pdes));
    const aReveal = new Float32Array(n), aInApp = new Float32Array(n), aPha = new Float32Array(n), aHidden = new Float32Array(n);
    list.forEach((a, k) => {
      aReveal[k] = revealOf(a.pdes);
      aInApp[k] = inApp.has(a.pdes) ? 1 : 0;
      aPha[k] = a.pha === 1 ? 1 : 0;
      aHidden[k] = a.hidden ? 1 : 0;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aReveal', new THREE.BufferAttribute(aReveal, 1));
    g.setAttribute('aInApp', new THREE.BufferAttribute(aInApp, 1));
    g.setAttribute('aPha', new THREE.BufferAttribute(aPha, 1));
    g.setAttribute('aHidden', new THREE.BufferAttribute(aHidden, 1));
    const cloud = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: cloudU, vertexShader: cloudVert, fragmentShader: cloudFrag,
      transparent: true, depthTest: false, depthWrite: false,
    }));
    cloud.frustumCulled = false;
    scene.add(cloud);

    // the 34 hidden hazards NEOWISE has already measured at >= 140 m
    const at = (k) => new THREE.Vector3().fromArray(pos, k * 3);
    const measuredIdx = [];
    list.forEach((a, k) => { if (a.hidden && a.D_meas != null) measuredIdx.push(k); });
    const mGeo = new THREE.BufferGeometry().setFromPoints(measuredIdx.map(at));
    const measured = new THREE.Points(mGeo, ringMat(0xffd0c8, 16));
    measured.frustumCulled = false;
    scene.add(measured);
    const nearest = measuredIdx
      .map((k) => ({ k, d: at(k).distanceTo(E) }))
      .sort((x, y) => x.d - y.d)
      .slice(0, 3);
    for (const { k } of nearest) {
      const a = list[k];
      addLabel(at(k), `<b>${a.name}</b><span>measured ${Math.round(a.D_meas)} m across</span>`, 'hazard',
        () => TRACKS.measured(sNow));
    }
    const focus = nearest.reduce((acc, { k }) => acc.add(at(k)), E.clone()).multiplyScalar(1 / (nearest.length + 1));
    path = cameraPath(E, focus);

    // Apophis: its orbit draws itself during Act 2
    let apophis = null;
    const ai = list.findIndex((a) => String(a.pdes) === '99942');
    if (ai >= 0) {
      const el = list[ai];
      const pts = orbitPoints(el, 720);
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0xffc7a0, transparent: true, opacity: 0, depthWrite: false }));
      line.geometry.setDrawRange(0, 0);
      const marker = new THREE.Points(new THREE.BufferGeometry().setFromPoints([at(ai)]), ringMat(0xffc7a0, 18));
      marker.frustumCulled = false;
      scene.add(line, marker);
      apophis = { line, marker, n: pts.length };
      addLabel(at(ai), `<b>99942 Apophis</b><span>a known hazard: crosses Earth's orbit</span>`, 'apophis',
        () => TRACKS.apoAlpha(sNow) * TRACKS.apoDraw(sNow));
    }

    data = { cloud, measured, apophis };
  }

  let w = 1, h = 1;
  function resize() {
    w = canvas.clientWidth || window.innerWidth;
    h = canvas.clientHeight || window.innerHeight;
    pr = introPixelRatio();
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    cloudU.uPR.value = pr; cloudU.uSafe.value = pickPx();
    starMat.uniforms.uPR.value = pr; dustMat.uniforms.uPR.value = pr;
    for (const m of [data?.measured?.material, data?.apophis?.marker.material]) if (m) m.uniforms.uSize.value = m.uniforms.sizeCss.value * pr;
  }

  let sNow = 0;
  const tgt = new THREE.Vector3(), proj = new THREE.Vector3();
  function render(s, time) {
    sNow = s;
    const T = TRACKS;

    // camera
    if (s >= APP_VIEW_S) {
      camera.position.set(0, 25, 35);
      camera.lookAt(0, 0, 0);
    } else {
      tgt.set(path.tx(s), path.ty(s), path.tz(s));
      const d = Math.exp(path.ld(s)), az = path.az(s), el = path.el(s);
      camera.position.set(tgt.x + d * Math.cos(el) * Math.sin(az), tgt.y + d * Math.sin(el), tgt.z + d * Math.cos(el) * Math.cos(az));
      camera.lookAt(tgt);
    }
    const sh = T.shift(s) * SHIFT;
    if (sh > 1e-4) {
      if (w >= h) camera.setViewOffset(w, h, -sh * w, 0, w, h);
      else camera.setViewOffset(w, h, 0, -sh * h, w, h);
    } else if (camera.view) camera.clearViewOffset();

    // scenery
    const launch = T.launch(s), starK = T.stars(s);
    starMat.uniforms.uAlpha.value = starK;
    stars.visible = starK > 0.001;
    glow.material.opacity = starK;
    glow.visible = starK > 0.001;
    dustMat.uniforms.uAlpha.value = T.dust(s);
    dustMat.uniforms.uTime.value = time;
    dust.visible = T.dust(s) > 0.001;
    const ringK = T.rings(s);
    for (const r of rings) r.mat.opacity = r.base * ringK;
    const swap = launch > 0.6;
    earth.group.visible = !swap;
    earthBody.visible = swap;
    if (!swap) earth.update(time, sunDir);

    const b = T.band(s);
    band.grp.visible = b > 0.001;
    band.fill.material.opacity = 0.16 * b;
    band.edgeMat.opacity = 0.7 * b;

    cloudU.uCount.value = T.count(s);
    cloudU.uHaz.value = T.haz(s);
    cloudU.uHidden.value = T.hidden(s);
    cloudU.uLaunch.value = launch;
    cloudU.uThin.value = T.thin(s);
    cloudU.uTime.value = time;
    if (data) {
      const m = T.measured(s);
      data.measured.material.uniforms.uAlpha.value = 0.9 * m;
      data.measured.visible = m > 0.001;
      if (data.apophis) {
        const { line, marker, n } = data.apophis;
        const a = T.apoAlpha(s), dr = T.apoDraw(s);
        line.material.opacity = 0.9 * a;
        line.geometry.setDrawRange(0, Math.max(0, Math.round(dr * (n - 1)) + 1));
        line.visible = a > 0.001 && dr > 0.001;
        marker.material.uniforms.uAlpha.value = a * dr;
        marker.visible = a * dr > 0.001;
      }
    }

    renderer.render(scene, camera);

    // HTML labels follow their asteroid
    for (const l of labels) {
      const a = l.alpha();
      if (a < 0.01) { if (l.el.style.opacity !== '0') l.el.style.opacity = '0'; continue; }
      proj.copy(l.pos).project(camera);
      if (proj.z > 1) { l.el.style.opacity = '0'; continue; }
      let x = (proj.x + 1) / 2 * w;
      const y = (1 - proj.y) / 2 * h;
      // flip to the marker's left when the label would run off the right edge (width measured once)
      const wd = l.wd || (l.wd = l.el.offsetWidth);
      const flip = x + 16 + wd > w - 8;
      if (flip !== l.flip) { l.flip = flip; l.el.classList.toggle('flip', flip); }
      if (flip) x -= wd + 32;
      x = Math.min(Math.max(x, -8), w - wd - 24); // the 16px CSS margin puts the box 8px inside either edge
      l.el.style.opacity = a.toFixed(3);
      l.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    }
  }

  function dispose() {
    scene.traverse((o) => {
      o.geometry?.dispose();
      const m = o.material;
      if (m) { m.map?.dispose(); m.dispose(); }
    });
    earth.dispose();
    labels.forEach((l) => l.el.remove());
    renderer.dispose();
    renderer.forceContextLoss();
  }

  resize();
  return { render, resize, setData, dispose };
}
