// The impact event: a fictional, uncatalogued asteroid shows up on the radar, the viewer clicks it, it falls
// toward Earth while CAPCOM and the intern talk, and it ends the world. Pure fiction (the closing card says so).
//
//   detected  -> straight to the rock (chase cam), the intern spots it   (start())
//   tracking  -> once he's said it: "not in NASA's catalog", it falls     (identify(), automatic)
// MC-1 is always aimed at the USA: Earth is turned so the USA faces it, and the path ends there.
//   final     -> close: CAPCOM panics, alarm, countdown, atmospheric entry
//   impact    -> voices cut mid-word, flash, fireball, ejecta, the magma front sweeps the globe
//   aftermath -> molten, ash-choked planet + the extinction card
//
// With Model B selected the story branches after the click: Model B flags MC-1 hazardous from its orbit's shape
// alone (no MOID), so there's time to act:
//   tracking  -> CAPCOM arms the interceptor and talks the intern into taking the shot
//   defense   -> countdown ("On my mark")
//   intercept -> the intern fires: a missile climbs out of Earth's atmosphere and homes in on MC-1
//   destroyed -> direct hit: flash, fireball, the rock breaks apart and burns up
//   saved     -> the "Earth saved" card
//
// Units are the scene's: 1 unit = 0.1 AU, Earth's (exaggerated) radius is 0.27. Earth's spin and the clock are
// frozen while the event runs, so everything is placed relative to Earth's position when it started.
import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { getRate, playAct, signalLost, sfx, stop as stopNarration } from '../lib/narration.js';
import { music } from '../lib/music.js';

const R_EARTH = 0.27;
const R_ROCK = 0.008;     // small rock, as in the impact-sim branch (impactShot.js)
const START_DIST = 9;      // spawn distance from Earth's center (far enough back to be falling while the intern talks)
const CLOSE_S = 0.8;       // path fraction where "it's close" (about 1.6 units out) and the panic starts
const ZOOM_SEC = 2.5;      // camera glide from wherever it was to the chase angle
const CRUISE_MIN = 30;     // seconds from the click to "close", at least (the dialogue can stretch it)
const FINAL = 23.3;        // seconds from "close" to impact: lands mid-scream in event_panic (alarm 1.5 s + lines)
const KM_PER_UNIT = 14.96e6;
const G = 0.035;           // ejecta gravity (units^3/s^2): escape speed at the surface is about 0.5 units/s
const CARD_AT = 9;         // seconds after impact when the extinction card fades in
const MISSILE_T = 7;       // Model B: seconds from launch to intercept

const UP = new THREE.Vector3(0, 1, 0);
const smooth = (t) => t * t * (3 - 2 * t);
const rand = (a, b) => a + Math.random() * (b - a);

// ---------------------------------------------------------------- shared textures + geometry
function glowTexture(stops) {
  const s = 128, cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const g = cv.getContext('2d');
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  stops.forEach(([at, c]) => grad.addColorStop(at, c));
  g.fillStyle = grad; g.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(cv);
}
const FIRE_GLOW = () => glowTexture([[0, 'rgba(255,255,240,1)'], [0.15, 'rgba(255,220,140,0.9)'],
  [0.4, 'rgba(255,120,30,0.35)'], [0.7, 'rgba(200,40,10,0.08)'], [1, 'rgba(120,20,0,0)']]);

// Lumpy, elongated rock: a subdivided icosahedron pushed in and out by a few octaves of smooth bumps + craters.
function rockGeometry(radius, seed = 1) {
  let geo = new THREE.IcosahedronGeometry(1, 5);
  geo.deleteAttribute('normal'); geo.deleteAttribute('uv');
  geo = mergeVertices(geo);
  const p = geo.attributes.position, v = new THREE.Vector3();
  const craters = Array.from({ length: 7 }, () => ({
    c: new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize(), r: rand(0.2, 0.45), d: rand(0.05, 0.12),
  }));
  for (let k = 0; k < p.count; k++) {
    v.fromBufferAttribute(p, k);
    const { x, y, z } = v;
    let h = Math.sin(x * 2.3 + seed) * Math.sin(y * 2.9 + seed * 2) * Math.sin(z * 2.1 + seed * 3) * 0.22
      + Math.sin(x * 6.1 + y * 4.3 + seed) * Math.sin(z * 5.7 - x * 2.2) * 0.07
      + Math.sin(x * 13 + z * 11 + seed) * Math.sin(y * 12.5) * 0.025;
    for (const cr of craters) {
      const d = v.distanceTo(cr.c) / cr.r;
      if (d < 1) h -= cr.d * (1 - d * d) - (d > 0.8 ? cr.d * 0.6 * (d - 0.8) * 5 * (1 - d) * 5 : 0);
    }
    v.multiplyScalar(radius * (1 + h)).multiply(new THREE.Vector3(1.3, 0.85, 0.95));
    p.setXYZ(k, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

// ---------------------------------------------------------------- particles (fire, ash, ejecta)
// CPU-simulated point sprites with per-particle color, alpha and size. Fire uses additive blending,
// ash normal blending. Optional gravity toward Earth's center; particles that fall back into the planet die.
const P_VERT = `
attribute float aSize; attribute float aAlpha; attribute vec3 aColor;
uniform float uScale; varying vec3 vColor; varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
  vColor = aColor; vAlpha = aAlpha;
}`;
const P_FRAG = `
varying vec3 vColor; varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.0, d); a *= a;
  if (vAlpha * a < 0.003) discard;
  gl_FragColor = vec4(vColor, vAlpha * a);
}`;
// fire cools white -> yellow -> orange -> deep red -> nothing
const FIRE_RAMP = [[0, [1, 0.97, 0.85]], [0.12, [1, 0.8, 0.35]], [0.35, [1, 0.42, 0.08]], [0.7, [0.55, 0.1, 0.02]], [1, [0.12, 0.03, 0.01]]];
function ramp(f, out, i) {
  let k = 1;
  while (k < FIRE_RAMP.length - 1 && FIRE_RAMP[k][0] < f) k++;
  const [a0, c0] = FIRE_RAMP[k - 1], [a1, c1] = FIRE_RAMP[k];
  const t = Math.min(Math.max((f - a0) / (a1 - a0), 0), 1);
  for (let j = 0; j < 3; j++) out[i * 3 + j] = c0[j] + (c1[j] - c0[j]) * t;
}

class Particles {
  constructor(cap, { additive, smoke = false, vapor = false }) {
    this.cap = cap; this.smoke = smoke; this.vapor = vapor; this.next = 0;
    this.pos = new Float32Array(cap * 3); this.col = new Float32Array(cap * 3);
    this.alpha = new Float32Array(cap); this.size = new Float32Array(cap);
    this.vel = new Float32Array(cap * 3); this.age = new Float32Array(cap); this.life = new Float32Array(cap);
    this.size0 = new Float32Array(cap); this.grow = new Float32Array(cap); this.grav = new Uint8Array(cap);
    this.drag = new Float32Array(cap);
    const geo = new THREE.BufferGeometry();
    const attr = (arr, n) => new THREE.BufferAttribute(arr, n).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', attr(this.pos, 3));
    geo.setAttribute('aColor', attr(this.col, 3));
    geo.setAttribute('aAlpha', attr(this.alpha, 1));
    geo.setAttribute('aSize', attr(this.size, 1));
    this.material = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 500 } }, vertexShader: P_VERT, fragmentShader: P_FRAG,
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 3 : 2;
  }

  emit(p, v, life, size, { grow = 0, gravity = false, drag = 0 } = {}) {
    const i = this.next; this.next = (this.next + 1) % this.cap;
    this.pos.set([p.x, p.y, p.z], i * 3); this.vel.set([v.x, v.y, v.z], i * 3);
    this.age[i] = 0; this.life[i] = life; this.size0[i] = size; this.grow[i] = grow;
    this.grav[i] = gravity ? 1 : 0; this.drag[i] = drag;
  }

  update(dt, center) {
    const { pos, vel, age, life, alpha, size, col } = this;
    for (let i = 0; i < this.cap; i++) {
      if (age[i] >= life[i]) { alpha[i] = 0; continue; }
      age[i] += dt;
      const i3 = i * 3;
      if (this.grav[i]) {
        const rx = pos[i3] - center.x, ry = pos[i3 + 1] - center.y, rz = pos[i3 + 2] - center.z;
        const r2 = rx * rx + ry * ry + rz * rz, r = Math.sqrt(r2);
        if (r < R_EARTH * 0.98) { life[i] = 0; alpha[i] = 0; continue; } // fell back in
        const a = -G / (r2 * r) * dt;
        vel[i3] += rx * a; vel[i3 + 1] += ry * a; vel[i3 + 2] += rz * a;
      }
      const k = 1 - this.drag[i] * dt;
      vel[i3] *= k; vel[i3 + 1] *= k; vel[i3 + 2] *= k;
      pos[i3] += vel[i3] * dt; pos[i3 + 1] += vel[i3 + 1] * dt; pos[i3 + 2] += vel[i3 + 2] * dt;
      const f = Math.min(age[i] / life[i], 1);
      size[i] = this.size0[i] * (1 + this.grow[i] * f);
      if (this.vapor) {
        alpha[i] = 0.32 * Math.pow(1 - f, 1.6);
        col[i3] = 0.62; col[i3 + 1] = 0.72; col[i3 + 2] = 0.9;
      } else if (this.smoke) {
        alpha[i] = 0.3 * Math.sin(Math.PI * Math.min(f * 1.4, 1)) * (1 - f * 0.3);
        const c = 0.07 + 0.06 * (1 - f); col[i3] = c * 1.25; col[i3 + 1] = c; col[i3 + 2] = c * 0.85;
      } else {
        alpha[i] = 0.75 * Math.pow(1 - f, 1.3);
        ramp(f, col, i);
      }
    }
    const g = this.points.geometry.attributes;
    g.position.needsUpdate = g.aColor.needsUpdate = g.aAlpha.needsUpdate = g.aSize.needsUpdate = true;
  }

  dispose() { this.points.geometry.dispose(); this.material.dispose(); }
}

// ---------------------------------------------------------------- magma shell over Earth
// A sphere just above the surface, in the globe's own frame. Everything within `uFront` radians of the impact
// point is molten crust (glowing cracks through dark slag, flickering); the front itself is a white-hot,
// ragged wall of fire. uHeat cools the whole thing down afterwards.
const SHELL_VERT = `
varying vec3 vN;
void main() { vN = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const SHELL_FRAG = `
uniform vec3 uDir; uniform float uFront; uniform float uTime; uniform float uHeat;
varying vec3 vN;
float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; } return s; }
void main() {
  float ang = acos(clamp(dot(vN, uDir), -1.0, 1.0));
  float edge = uFront + (fbm(vN * 5.0 + uTime * 0.15) - 0.5) * 0.35;
  float behind = smoothstep(edge, edge - 0.06, ang);
  float wall = exp(-pow((ang - edge) / 0.035, 2.0));
  float n = fbm(vN * 9.0 + vec3(0.0, uTime * 0.05, 0.0));
  float cracks = pow(1.0 - abs(fbm(vN * 14.0 - uTime * 0.03) - 0.5) * 2.0, 8.0);
  float flicker = 0.85 + 0.15 * noise(vN * 30.0 + uTime * 2.0);
  vec3 slag = vec3(0.07, 0.025, 0.015);
  vec3 magma = mix(vec3(0.9, 0.18, 0.02), vec3(1.0, 0.62, 0.18), smoothstep(0.5, 0.8, n));
  float glow = clamp(0.3 + cracks * 1.2 + smoothstep(0.4, 0.7, n) * 0.8, 0.0, 1.0) * uHeat * flicker;
  vec3 col = mix(slag, magma, glow);
  col += vec3(1.0, 0.85, 0.6) * exp(-ang * 2.5) * uHeat * 0.9;        // ground zero stays white-hot longest
  col = col * behind + vec3(1.0, 0.8, 0.5) * wall * 2.2;
  gl_FragColor = vec4(col, clamp(behind * 0.97 + wall, 0.0, 1.0));
}`;
// Ash and smoke smothering the atmosphere, following the front.
const ASH_FRAG = `
uniform vec3 uDir; uniform float uFront; uniform float uTime; uniform float uHeat;
varying vec3 vN;
float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; } return s; }
void main() {
  float ang = acos(clamp(dot(vN, uDir), -1.0, 1.0));
  float behind = smoothstep(uFront * 0.85, uFront * 0.85 - 0.3, ang);
  float swirl = fbm(vN * 4.0 + vec3(uTime * 0.04, 0.0, -uTime * 0.03));
  float a = behind * smoothstep(0.4, 0.8, swirl) * 0.45;
  vec3 col = mix(vec3(0.05, 0.04, 0.035), vec3(0.35, 0.12, 0.04), uHeat * (1.0 - swirl));
  gl_FragColor = vec4(col, a);
}`;

// ---------------------------------------------------------------- the event
export function createImpactEvent({ scene, camera, controls, earth, time, canvas }) {
  const listeners = new Set();
  let phase = 'idle', epoch = 0;
  let objs = null;                       // everything this run added to the scene
  const setPhase = (p) => { phase = p; listeners.forEach((f) => f(p)); };

  const earthPos = () => earth.body.position;

  // The USA (about 39°N, 98°W) in the globe's own frame. three.js spheres map texture u to phi = lon + 180°.
  const USA_LAT = 39 * Math.PI / 180, USA_PHI = (-98 + 180) * Math.PI / 180, USA_THETA = Math.PI / 2 - USA_LAT;
  const USA_LOCAL = new THREE.Vector3(-Math.cos(USA_PHI) * Math.sin(USA_THETA), Math.cos(USA_THETA),
    Math.sin(USA_PHI) * Math.sin(USA_THETA));
  // The spin angle that points the USA most directly at `dir` (Earth-relative), keeping the axial tilt.
  function usaFacingSpin(dir) {
    const q = new THREE.Quaternion(), v = new THREE.Vector3();
    let best = 0, bestDot = -2;
    for (let k = 0; k < 360; k++) {
      earth.globe.rotation.y = k * Math.PI / 180;
      earth.globe.updateMatrixWorld(true);
      const d = v.copy(USA_LOCAL).applyQuaternion(earth.globe.getWorldQuaternion(q)).dot(dir);
      if (d > bestDot) { bestDot = d; best = earth.globe.rotation.y; }
    }
    return best;
  }
  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();

  function build() {
    const E = earthPos().clone();
    const eHat = E.clone().normalize();                       // Sun -> Earth
    const side = new THREE.Vector3().crossVectors(eHat, UP).normalize();
    // Comes in from the dayside, a little above the ecliptic, bending in like a falling orbit.
    const u0 = eHat.clone().multiplyScalar(-0.45).addScaledVector(side, 0.85).addScaledVector(UP, 0.3).normalize();
    const u1 = eHat.clone().multiplyScalar(-0.8).addScaledVector(side, 0.25).addScaledVector(UP, 0.15).normalize();
    // Aim at the USA: turn the (frozen) globe so the USA faces the incoming rock, then end the path on it.
    earth.globe.rotation.y = usaFacingSpin(u1);
    earth.globe.updateMatrixWorld(true);
    const target = USA_LOCAL.clone().applyQuaternion(earth.globe.getWorldQuaternion(new THREE.Quaternion()))
      .multiplyScalar(R_EARTH);                                // Earth-relative, on the surface
    const curve = new THREE.QuadraticBezierCurve3(u0.clone().multiplyScalar(START_DIST),
      u1.clone().multiplyScalar(START_DIST * 0.45), target);
    // impact where the path crosses the surface
    let sHit = 1;
    for (let s = 0.9; s <= 1; s += 0.0005) if (curve.getPoint(s).length() <= R_EARTH + R_ROCK * 0.6) { sHit = s; break; }

    const group = new THREE.Group();                          // Earth-relative frame
    group.position.copy(E);
    scene.add(group);

    const rock = new THREE.Mesh(rockGeometry(R_ROCK, 1.7), new THREE.MeshStandardMaterial({
      color: 0x5e554d, roughness: 1, metalness: 0, emissive: 0xff5a14, emissiveIntensity: 0,
    }));
    group.add(rock);
    const spin = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize();

    // entry glow (ionized air ahead of the rock), invisible until it hits the atmosphere
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: FIRE_GLOW(), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0,
    }));
    group.add(glow);

    // predicted trajectory: dashed red line from the spawn point to the surface
    const pts = curve.getPoints(200).filter((_, i) => i / 200 <= sHit);
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineDashedMaterial({ color: 0xff3b30, dashSize: 0.08, gapSize: 0.06, transparent: true, opacity: 0 }));
    line.computeLineDistances();
    line.visible = false; // the dashed path isn't drawn (kept so the rest of the event code stays unchanged)
    group.add(line);

    // radar reticle + readout (HTML, clickable)
    const tag = document.createElement('div');
    tag.className = 'impact-reticle';
    tag.innerHTML = '<i></i><span><b>UNKNOWN OBJECT</b><em>incoming</em></span>';
    const reticle = new CSS2DObject(tag);
    group.add(reticle);

    const fire = new Particles(16000, { additive: true });
    const ash = new Particles(5000, { additive: false, smoke: true });
    const vapor = new Particles(6000, { additive: true, vapor: true });
    scene.add(fire.points, ash.points, vapor.points);

    return { E, curve, sHit, group, rock, spin, glow, line, tag, reticle, fire, ash, vapor,
      s: 0, t: 0, tPhase: 0, camDist: 10, shake: 0 };
  }

  function clear() {
    if (!objs) return;
    const { group, rock, glow, line, reticle, fire, ash, vapor, shell, ash2, flashLight, fireball, chunks } = objs;
    reticle.element.remove();
    group.remove(reticle);
    rock.geometry.dispose(); rock.material.dispose();
    glow.material.map.dispose(); glow.material.dispose();
    line.geometry.dispose(); line.material.dispose();
    scene.remove(group, fire.points, ash.points, vapor.points);
    fire.dispose(); ash.dispose(); vapor.dispose();
    for (const m of [shell, ash2]) if (m) { m.parent.remove(m); m.geometry.dispose(); m.material.dispose(); }
    if (flashLight) scene.remove(flashLight);
    if (fireball) { scene.remove(fireball); fireball.material.map.dispose(); fireball.material.dispose(); }
    for (const c of chunks ?? []) { scene.remove(c.mesh); c.mesh.geometry.dispose(); c.mesh.material.dispose(); }
    removeMissile(objs);
    objs = null;
  }

  // ------------------------------------------------ phases
  let saved = null;
  function start(model = 'A') {
    restore(false);
    const mine = ++epoch;
    saved = { playing: time.playing };          // the clock keeps running; it's frozen only at impact / intercept
    controls.enabled = false;
    objs = build();
    objs.model = model;
    // Model A: just another asteroid at first (the normal white selection ring); it turns into the red target
    // circle only when CAPCOM realises it's a threat ("That's WAY too close!", goFinal).
    if (model === 'A') objs.tag.classList.add('plain');
    objs.flyT = 1;        // no overview: the camera zooms straight to the chase angle behind the rock
    objs.zoom = { t: 0, pos: camera.position.clone(), tgt: controls.target.clone() };
    setPhase('detected');
    setTimeout(async () => {
      if (mine !== epoch) return;
      await playAct('event_detect');            // "W-wait, CAPCOM. I'm getting a reading. What... what is THAT?!"
      if (mine === epoch) identify();
    }, 600);
  }

  // where the camera sits relative to what it looks at: sunward of Earth, above the plane, off to one side
  function camDir() {
    const eHat = objs.E.clone().normalize();
    const side = new THREE.Vector3().crossVectors(eHat, UP).normalize();
    return eHat.multiplyScalar(-0.55).addScaledVector(UP, 0.55).addScaledVector(side, -0.62).normalize();
  }

  async function identify() {
    if (phase !== 'detected') return;
    const mine = epoch;
    setPhase('tracking');
    objs.tPhase = 0;
    const B = objs.model === 'B';
    objs.tag.querySelector('b').textContent = B ? 'MC-1 · HAZARDOUS (MODEL B)' : 'MC-1 · UNCATALOGUED';
    objs.tag.classList.add('tracking');
    if (B) objs.tag.classList.add('hazard');
    await playAct(B ? 'event_found_b' : 'event_found');
    if (mine !== epoch) return;
    const approach = playAct(B ? 'event_approach_b' : 'event_approach');
    await Promise.all([approach, until(() => mine !== epoch || objs.tPhase >= CRUISE_MIN)]);
    if (mine !== epoch) return;
    if (B) goDefense(); else goFinal();
  }

  // ------------------------------------------------ Model B: planetary defense
  const rockWorld = () => objs.group.localToWorld(objs.rock.position.clone());

  async function goDefense() {
    const mine = epoch, o = objs;
    o.sFinal = o.s; o.tB = 0; o.tPhase = 0;
    setPhase('defense');
    await playAct('event_countdown_b', {});
    if (mine !== epoch) return;
    launch();
  }

  function launch() {
    freezeClock(); // the interceptor flies from a fixed launch point, so Earth holds still from here
    const o = objs, E = earthPos();
    setPhase('intercept');
    o.tPhase = 0;
    playAct('event_fire_b', {});
    sfx('whoosh');
    // lift off from the point on Earth facing MC-1, arc up and out, then home in on the rock
    const n0 = rockWorld().sub(E).normalize();
    o.mL0 = E.clone().addScaledVector(n0, R_EARTH * 1.01);
    o.mC = E.clone().addScaledVector(n0, R_EARTH + 0.45).addScaledVector(UP, 0.3);
    const group = new THREE.Group();
    const metal = new THREE.MeshStandardMaterial({ color: 0xe8ecf2, roughness: 0.45, metalness: 0.4 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.006, 0.04, 14), metal);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.005, 0.015, 14), metal);
    nose.position.y = 0.0275;
    const flame = new THREE.Sprite(new THREE.SpriteMaterial({
      map: FIRE_GLOW(), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
    }));
    flame.position.y = -0.03; flame.scale.setScalar(0.09);
    group.add(body, nose, flame);
    const tagEl = document.createElement('div');
    tagEl.className = 'impact-interceptor';
    tagEl.textContent = 'INTERCEPTOR';
    const label = new CSS2DObject(tagEl);
    group.add(label);
    group.scale.setScalar(0.4); // in proportion with the small rock
    group.position.copy(o.mL0);
    scene.add(group);
    o.missile = { group, body, nose, flame, label, metal };
  }

  function removeMissile(o) {
    const M = o?.missile;
    if (!M) return;
    M.label.element.remove();
    scene.remove(M.group);
    M.body.geometry.dispose(); M.nose.geometry.dispose(); M.metal.dispose();
    M.flame.material.map.dispose(); M.flame.material.dispose();
    o.missile = null;
  }

  function freezeClock() {
    time.playing = false;
    time.onTick?.(time.jd, false);
  }

  function destroyRock() {
    freezeClock();
    const o = objs, mine = epoch, P = rockWorld(), E = earthPos();
    removeMissile(o);
    setPhase('destroyed');
    o.tPhase = 0;
    o.boom = P;
    sfx('impact');
    o.rock.visible = false; o.glow.visible = false; o.line.visible = false; o.reticle.visible = false;
    o.reticle.element.style.display = 'none';

    o.flashLight = new THREE.PointLight(0xffd0a0, 0, 1.2, 0);
    o.flashLight.position.copy(P);
    scene.add(o.flashLight);
    o.fireball = new THREE.Sprite(new THREE.SpriteMaterial({
      map: FIRE_GLOW(), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
    }));
    o.fireball.position.copy(P);
    scene.add(o.fireball);
    // the blast: a sphere of fire and a slower cloud of dust
    for (let k = 0; k < 2600; k++) {
      const d = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize();
      o.fire.emit(P.clone().addScaledVector(d, R_ROCK * 0.5), d.multiplyScalar(0.03 + Math.pow(Math.random(), 2) * 0.5),
        rand(1.5, 5), rand(0.012, 0.04), { grow: 1.5, drag: 0.45 });
    }
    for (let k = 0; k < 1800; k++) {   // shock shell: one thin, fast, expanding sphere of glowing vapor
      const d = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize();
      o.vapor.emit(P.clone(), d.multiplyScalar(rand(0.3, 0.34)), rand(1.6, 2.2), rand(0.012, 0.02), { grow: 2, drag: 0.6 });
    }
    for (let k = 0; k < 320; k++) {
      const d = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize();
      o.ash.emit(P.clone(), d.multiplyScalar(rand(0.01, 0.07)), rand(4, 9), rand(0.025, 0.06), { grow: 3, drag: 0.3 });
    }
    // what's left of MC-1: hot fragments flung outward, most of them carried away from Earth
    const away = P.clone().sub(E).normalize();
    o.chunks = Array.from({ length: 30 }, (_, k) => {
      const mesh = new THREE.Mesh(rockGeometry(rand(0.004, 0.013), k * 0.9 + 3), new THREE.MeshStandardMaterial({
        color: 0x4a4038, roughness: 1, emissive: 0xff6a20, emissiveIntensity: 1.5,
      }));
      mesh.position.copy(P);
      scene.add(mesh);
      const v = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize().multiplyScalar(rand(0.04, 0.2))
        .addScaledVector(away, 0.05);
      return { mesh, v, w: new THREE.Vector3(rand(-5, 5), rand(-5, 5), rand(-5, 5)), heat: 1 };
    });
    o.shake = 0.45;
    playAct('event_saved_b', {}).then(() => {
      if (mine === epoch && phase === 'destroyed') setTimeout(() => { if (mine === epoch) setPhase('saved'); }, 900);
    });
  }

  function goFinal() {
    objs.sFinal = objs.s; objs.tPhase = 0;
    objs.tag.classList.remove('plain');
    objs.tag.classList.add('final');
    setPhase('final');
    playAct('event_panic', { before: 'alarm' });
  }

  function until(cond) {
    return new Promise((res) => { const id = setInterval(() => { if (cond()) { clearInterval(id); res(); } }, 100); });
  }

  function impact() {
    freezeClock();
    const o = objs;
    signalLost();                               // both voices cut out mid-word
    music.cut();                                // and the music with them
    sfx('impact');
    setPhase('impact');
    o.tPhase = 0;
    o.rock.visible = false; o.glow.visible = false; o.line.visible = false; o.reticle.visible = false;
    o.reticle.element.style.display = 'none';

    // impact point + direction in world space and in the globe's own frame
    const P = o.group.localToWorld(o.curve.getPoint(o.sHit).clone());
    o.n = P.clone().sub(earthPos()).normalize();
    o.P = earthPos().clone().addScaledVector(o.n, R_EARTH);
    earth.globe.updateMatrixWorld();
    const local = earth.globe.worldToLocal(o.P.clone()).normalize();
    o.vIn = o.curve.getTangent(o.sHit).normalize();

    const uniforms = { uDir: { value: local }, uFront: { value: 0 }, uTime: { value: 0 }, uHeat: { value: 1 } };
    o.uniforms = uniforms;
    o.shell = new THREE.Mesh(new THREE.SphereGeometry(R_EARTH * 1.004, 128, 64), new THREE.ShaderMaterial({
      uniforms, vertexShader: SHELL_VERT, fragmentShader: SHELL_FRAG, transparent: true, depthWrite: false,
    }));
    // the globe's sphere has radius R_EARTH in its own frame, so the shell lines up whatever its tilt
    earth.globe.add(o.shell);
    o.ash2 = new THREE.Mesh(new THREE.SphereGeometry(R_EARTH * 1.045, 96, 48), new THREE.ShaderMaterial({
      uniforms, vertexShader: SHELL_VERT, fragmentShader: ASH_FRAG, transparent: true, depthWrite: false,
    }));
    o.ash2.renderOrder = 1;
    earth.globe.add(o.ash2);

    o.flashLight = new THREE.PointLight(0xffb070, 0, 1.4, 0); // lights Earth's face and the debris, not the system
    o.flashLight.position.copy(o.P).addScaledVector(o.n, 0.15);
    scene.add(o.flashLight);
    o.fireball = new THREE.Sprite(new THREE.SpriteMaterial({
      map: FIRE_GLOW(), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
    }));
    o.fireball.position.copy(o.P);
    scene.add(o.fireball);

    // molten chunks of crust thrown out along the ejecta curtain
    o.chunks = Array.from({ length: 36 }, (_, k) => {
      const mesh = new THREE.Mesh(rockGeometry(rand(0.006, 0.02), k * 1.3), new THREE.MeshStandardMaterial({
        color: 0x3a2a22, roughness: 1, emissive: 0xff4a10, emissiveIntensity: 2,
      }));
      mesh.position.copy(o.P);
      scene.add(mesh);
      return { mesh, v: ejectaDir(o.n, rand(0.35, 0.9)).multiplyScalar(rand(0.25, 0.75)),
        w: new THREE.Vector3(rand(-6, 6), rand(-6, 6), rand(-6, 6)), heat: 1 };
    });
    o.shake = 1;
  }

  // a direction in the ejecta cone around normal n (the tilted curtain rises 30-70° off the ground)
  const ejectaDir = (n, upness = rand(0.35, 0.85)) => {
    const t1 = tmp.set(n.y, -n.x, 0.3).cross(n).normalize().clone();
    const t2 = new THREE.Vector3().crossVectors(n, t1);
    const a = rand(0, Math.PI * 2);
    return n.clone().multiplyScalar(upness).addScaledVector(t1, Math.cos(a) * (1 - upness))
      .addScaledVector(t2, Math.sin(a) * (1 - upness)).normalize();
  };

  // ------------------------------------------------ per frame
  // Before the impact / intercept, the event's clock runs at the narration speed (Mission Control ⏩ button), so the
  // rock, the countdown and the interceptor keep pace with the voices and the impact still lands on the scream.
  // The blast and aftermath play at normal speed.
  const AFTER = new Set(['impact', 'aftermath', 'destroyed', 'saved']);
  function update(realDt) {
    const dt = AFTER.has(phase) ? realDt : realDt * getRate();
    if (!objs) return;
    const o = objs, E = earthPos();
    o.t += dt; o.tPhase += dt;
    o.group.position.copy(E);
    // point size in drawing-buffer pixels for a sprite `aSize` units across (fov 55°: H / (2 tan 27.5°) ≈ 0.96 H)
    const H = canvas.height || 800;
    o.fire.material.uniforms.uScale.value = H * 0.96;
    o.ash.material.uniforms.uScale.value = H * 0.96;
    o.vapor.material.uniforms.uScale.value = H * 0.96;

    // camera: initial glide to frame the scene
    let camTarget = null;
    if (o.flyT < 1) {
      o.flyT = Math.min(o.flyT + dt / 2.2, 1);
      const k = smooth(o.flyT);
      camera.position.lerpVectors(o.camFrom, o.camTo, k);
      controls.target.lerpVectors(o.targetFrom, o.targetTo, k);
    }

    const defending = phase === 'defense' || phase === 'intercept';
    if (o.tB !== undefined) o.tB += dt;
    if (phase === 'detected' || phase === 'tracking' || phase === 'final' || defending) {
      // path progress
      if (phase === 'detected' || phase === 'tracking') o.s = CLOSE_S * (1 - Math.exp(-o.t / (CRUISE_MIN * 0.45)));
      // Model B: it keeps coming, slowly; the interceptor meets it well short of Earth
      if (defending) o.s = o.sFinal + (o.sHit - o.sFinal) * 0.3 * (1 - Math.exp(-o.tB / 25));
      if (phase === 'final') {
        const f = Math.min(o.tPhase / FINAL, 1);
        o.s = o.sFinal + (o.sHit - o.sFinal) * Math.pow(f, 2.4);
      }
      const p = o.curve.getPoint(Math.min(o.s, o.sHit));
      o.rock.position.copy(p);
      o.rock.rotateOnAxis(o.spin, dt * (phase === 'final' ? 0.9 : 0.35));
      o.reticle.position.copy(p);
      o.line.material.opacity = Math.min(o.line.material.opacity + dt * 0.5, phase === 'detected' ? 0.35 : 0.75);

      const alt = p.length() - R_EARTH;
      const km = alt >= 1.5 ? alt * KM_PER_UNIT : 1.5 * KM_PER_UNIT * Math.pow(Math.max(alt, 0) / 1.5, 3);
      const em = o.tag.querySelector('em');
      if (phase === 'tracking') em.textContent = `${fmtKm(km)} from Earth`;
      if (defending) em.textContent = `${phase === 'intercept' ? 'INTERCEPT INBOUND' : 'TARGET LOCKED'} · ${fmtKm(km)}`;
      if (phase === 'final') {
        const left = Math.max(FINAL - o.tPhase, 0);
        em.textContent = `IMPACT IN 00:${String(Math.ceil(left)).padStart(2, '0')} · ${fmtKm(km)}`;
      }

      // atmospheric entry: within ~0.35 units the rock heats, glows and sheds a burning trail
      const heat = phase === 'final' ? smooth(Math.min(Math.max((0.22 - alt) / 0.18, 0), 1)) : 0;
      o.rock.material.emissiveIntensity = heat * 1.6;
      o.glow.position.copy(p);
      o.glow.material.opacity = heat;
      o.glow.scale.setScalar(0.035 + 0.1 * heat); // entry glow, sized like impactShot.js
      if (heat > 0.02) {
        const vdir = o.curve.getTangent(Math.min(o.s, o.sHit)).normalize();
        const wp = o.group.localToWorld(p.clone());
        for (let k = 0; k < Math.ceil(heat * 40); k++) {
          tmp2.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(R_ROCK * 0.6).add(wp);
          o.fire.emit(tmp2, vdir.clone().multiplyScalar(-rand(0.02, 0.12)).add(new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(0.01)),
            rand(0.8, 2), rand(0.015, 0.04) * (0.5 + heat), { grow: 1.2 });
        }
        for (let k = 0; k < Math.ceil(heat * 8); k++) {
          o.ash.emit(wp.clone().addScaledVector(vdir, -R_ROCK * 1.5), vdir.clone().multiplyScalar(-rand(0.01, 0.04)),
            rand(1.5, 3.5), rand(0.03, 0.07), { grow: 3 });
        }
      }

      // Chase cam (from the impact-sim branch, impactShot.js chaseCam): once it's identified, ride just behind the
      // rock, a little off to the side and above, looking down its path at Earth. Zooms in when the event starts.
      if (o.flyT >= 1) {
        const rk = o.group.localToWorld(p.clone());
        const d = rk.distanceTo(E);
        const u = rk.clone().sub(E).divideScalar(d);
        const side = new THREE.Vector3().crossVectors(u, UP);
        if (side.lengthSq() < 1e-6) side.set(1, 0, 0);
        side.normalize();
        const up2 = new THREE.Vector3().crossVectors(side, u);
        const back = 0.16 + 0.26 * Math.min(d, 1.5) / 1.5;
        camTarget = rk.clone().addScaledVector(u, back).addScaledVector(side, back * 0.45).addScaledVector(up2, back * 0.3);
        if (o.zoom && o.zoom.t < 1) {         // zoom in from wherever the camera was
          o.zoom.t = Math.min(o.zoom.t + dt / ZOOM_SEC, 1);
          const z = smooth(o.zoom.t);
          camera.position.lerpVectors(o.zoom.pos, camTarget, z);
          controls.target.lerpVectors(o.zoom.tgt, E, z);
        } else {                              // then ride along tightly
          const k = 1 - Math.exp(-dt * 2.5);
          controls.target.lerp(E, k);
          camera.position.lerp(camTarget, k);
        }
        if (phase === 'final') camera.position.add(tmp.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(0.004 * heat));
      }
      if (phase === 'final' && o.s >= o.sHit - 1e-4) impact();

      // the interceptor: accelerating along an arc that ends on the rock's current position
      if (phase === 'intercept' && o.missile) {
        const M = o.missile, f = Math.min(o.tPhase / MISSILE_T, 1), end = rockWorld();
        const bez = (u, out) => out.copy(o.mL0).multiplyScalar((1 - u) * (1 - u))
          .addScaledVector(o.mC, 2 * u * (1 - u)).addScaledVector(end, u * u);
        const u = Math.pow(f, 1.5);
        const pos = bez(u, new THREE.Vector3()), dir = bez(Math.min(u + 0.01, 1), new THREE.Vector3()).sub(pos);
        if (dir.lengthSq() > 1e-12) M.group.quaternion.setFromUnitVectors(UP, dir.normalize());
        M.group.position.copy(pos);
        M.flame.scale.setScalar(0.08 + Math.random() * 0.04);
        const tail = pos.clone().addScaledVector(dir, -0.028);
        for (let k = 0; k < 30; k++) {
          o.fire.emit(tail, dir.clone().multiplyScalar(-rand(0.04, 0.16)).add(new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(0.01)),
            rand(0.25, 0.6), rand(0.012, 0.026), { grow: 1 });
        }
        for (let k = 0; k < 6; k++) {   // the sunlit contrail lingers behind it
          o.vapor.emit(tail.clone().add(new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(0.004)),
            dir.clone().multiplyScalar(-0.004), rand(5, 8), rand(0.012, 0.02), { grow: 3 });
        }
        if (f >= 1) destroyRock();
      }
    } else if (phase === 'destroyed' || phase === 'saved') {
      const t = o.tPhase;
      const fb = t < 0.3 ? smooth(t / 0.3) : Math.exp(-(t - 0.3) * 1.1);
      o.fireball.scale.setScalar(0.06 + 0.75 * smooth(Math.min(t / 1, 1)));
      o.fireball.material.opacity = fb;
      o.flashLight.intensity = 8 * fb;
      for (const c of o.chunks) {
        c.mesh.position.addScaledVector(c.v, dt);
        c.v.multiplyScalar(1 - 0.05 * dt);
        c.mesh.rotation.x += c.w.x * dt; c.mesh.rotation.y += c.w.y * dt;
        c.heat = Math.max(c.heat - dt * 0.25, 0);
        c.mesh.material.emissiveIntensity = 1.5 * c.heat;
        if (c.heat > 0.3 && Math.random() < 0.5) o.fire.emit(c.mesh.position, c.v.clone().multiplyScalar(-0.1), rand(0.3, 0.7), 0.008);
      }
      o.shake *= Math.exp(-dt * 1.5);
      const mid = E.clone().lerp(o.boom, 0.55);
      if (phase === 'saved') mid.addScaledVector(tmp2.set(0, 1, 0).applyQuaternion(camera.quaternion), -0.62); // above the card
      controls.target.lerp(mid, 1 - Math.exp(-dt * (phase === 'saved' ? 0.8 : 1.2)));
      camTarget = controls.target.clone().addScaledVector(camDir(), 3.4 + 0.6 * smooth(Math.min(t / 8, 1)));
      camera.position.lerp(camTarget, 1 - Math.exp(-dt * 1));
      if (o.shake > 0.002) camera.position.add(tmp.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(0.04 * o.shake));
    } else if (phase === 'impact' || phase === 'aftermath') {
      const t = o.tPhase;
      const n = o.n;
      // fireball: blooms in a fraction of a second, then fades over a few
      const fb = t < 0.5 ? smooth(t / 0.5) : Math.exp(-(t - 0.5) * 0.8);
      o.fireball.scale.setScalar(0.12 + 0.9 * smooth(Math.min(t / 1.2, 1)));
      o.fireball.material.opacity = fb;
      o.fireball.position.copy(o.P).addScaledVector(n, 0.05 + 0.15 * Math.min(t, 2));
      o.flashLight.intensity = 9 * fb;

      // magma front: fast at first, slowing as it wraps around to the far side (~8 s to engulf the globe)
      o.uniforms.uFront.value = Math.PI * 1.15 * (1 - Math.exp(-t / 2.6));
      o.uniforms.uTime.value = o.t;
      o.uniforms.uHeat.value = 0.6 + 0.4 * Math.exp(-Math.max(t - 6, 0) / 18); // a magma ocean keeps glowing for ages

      // ejecta: a dense curtain in the first two seconds, a jet straight up along the impact path
      if (t < 2.2) {
        const rate = Math.round(1400 * Math.exp(-t * 1.6) * dt * 60 / 2);
        for (let k = 0; k < rate; k++) {
          const d = ejectaDir(n);
          o.fire.emit(o.P.clone().addScaledVector(n, 0.01), d.multiplyScalar(0.12 + Math.pow(Math.random(), 2) * 0.75),
            rand(2.5, 9), rand(0.01, 0.03), { gravity: true, grow: 0.5 });
        }
        for (let k = 0; k < rate / 8; k++) {
          const d = ejectaDir(n, rand(0.55, 1));
          o.fire.emit(o.P.clone().addScaledVector(n, 0.02), d.multiplyScalar(rand(0.06, 0.3)), rand(1.5, 3.5), rand(0.03, 0.07),
            { grow: 2.5, drag: 0.8 });
        }
      }
      // the firestorm riding the front + ash boiling up behind it
      const front = o.uniforms.uFront.value;
      if (front < Math.PI) {
        const t1 = tmp.set(n.y, -n.x, 0.3).cross(n).normalize().clone();
        const t2 = new THREE.Vector3().crossVectors(n, t1);
        for (let k = 0; k < 70; k++) {
          const a = rand(0, Math.PI * 2), ang = front + rand(-0.05, 0.02);
          const d = n.clone().multiplyScalar(Math.cos(ang)).addScaledVector(t1, Math.sin(ang) * Math.cos(a)).addScaledVector(t2, Math.sin(ang) * Math.sin(a));
          o.fire.emit(E.clone().addScaledVector(d, R_EARTH * 1.01), d.clone().multiplyScalar(rand(0.01, 0.05)),
            rand(0.6, 1.6), rand(0.02, 0.05), { grow: 1 });
        }
      }
      const ashRate = t < 25 ? 30 : 8;
      for (let k = 0; k < ashRate; k++) {
        const d = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize();
        if (Math.acos(d.dot(n)) > front * 0.9) continue;
        o.ash.emit(E.clone().addScaledVector(d, R_EARTH * rand(1.02, 1.08)), d.multiplyScalar(rand(0.005, 0.02)),
          rand(3, 7), rand(0.05, 0.13), { grow: 2.5 });
      }
      // chunks: ballistic, spinning, cooling from orange to black
      for (const c of o.chunks) {
        if (!c.mesh.visible) continue;
        tmp.copy(c.mesh.position).sub(E);
        const r = tmp.length();
        if (r < R_EARTH * 0.99 && t > 0.5) { c.mesh.visible = false; continue; }
        c.v.addScaledVector(tmp, -G / (r * r * r) * dt);
        c.mesh.position.addScaledVector(c.v, dt);
        c.mesh.rotation.x += c.w.x * dt; c.mesh.rotation.y += c.w.y * dt;
        c.heat = Math.max(c.heat - dt * 0.15, 0);
        c.mesh.material.emissiveIntensity = 2 * c.heat;
      }

      // camera: kick + rumble, then pull back slowly to take it all in
      o.shake *= Math.exp(-dt * 0.9);
      // once the card is up, look a little below Earth so the planet sits above the card
      const look = phase === 'aftermath' ? E.clone().addScaledVector(tmp2.set(0, 1, 0).applyQuaternion(camera.quaternion), -0.32) : E;
      controls.target.lerp(look, 1 - Math.exp(-dt * (phase === 'aftermath' ? 0.8 : 1.5)));
      const dist = 1.9 + 1.1 * smooth(Math.min(t / 10, 1));
      camTarget = controls.target.clone().addScaledVector(camDir(), dist);
      camera.position.lerp(camTarget, 1 - Math.exp(-dt * 1.2));
      if (o.shake > 0.002) camera.position.add(tmp.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(0.05 * o.shake));

      if (phase === 'impact' && t >= CARD_AT) setPhase('aftermath');
    }

    o.fire.update(dt, E);
    o.ash.update(dt, E);
    o.vapor.update(dt, E);
  }

  // Puts Earth back the way it was (the card's "Restore Earth" button, or before a new run).
  function restore(resume = true) {
    epoch++;
    stopNarration();
    music.uncut();
    clear();
    controls.enabled = true;
    if (saved && resume) { time.playing = true; time.dirty = true; }
    saved = null;
    if (phase !== 'idle') setPhase('idle');
  }

  // Clicks on the canvas: while the event runs it takes them all (so the dot commentary can't talk over it).
  function onClick() {
    return phase !== 'idle';
  }

  return {
    start, identify, restore, update, onClick,
    get active() { return phase !== 'idle'; },
    get phase() { return phase; },
    get model() { return objs?.model ?? 'A'; },
    onPhase(f) { listeners.add(f); return () => listeners.delete(f); },
    dispose() { restore(false); listeners.clear(); },
  };
}

function fmtKm(km) {
  if (km >= 1e6) return `${(km / 1e6).toFixed(1)} million km`;
  if (km >= 1e3) return `${Math.round(km / 1e3).toLocaleString('en-US')},000 km`;
  return `${Math.round(km)} km`;
}
