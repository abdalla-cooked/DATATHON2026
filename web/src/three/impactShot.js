// Impact shot (prototype). Bends the selected asteroid's orbit onto a collision course with Earth, then plays one
// continuous shot: bent red orbit, fast-forward with a chase cam, Earth fills the screen, fireball, white flash,
// damage rings on the globe, results card. The effect numbers are placeholders until lib/impact.js lands.
//
// Driven from SolarSystem's animation loop: createImpactShot(...) returns { start, update, skip, back, active }.
// Everything on screen is a pure function of the seconds since start, so a slow frame never desyncs the shot.
import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { AU, positionAt, orbitPoints } from './kepler.js';
import { planetElementsAt } from './planets.js';
import { ASTEROID_EPOCH_JD, meanAnomalyAt, meanMotionDeg, dateFromJd } from './time.js';

const DEG = Math.PI / 180;
const KM_PER_UNIT = 149597870.7 / AU;
const EARTH_KM = 6371;
const LEAD_DAYS = 60;          // the hypothetical impact happens this many days after "now"
const SWITCH_DIST = 1.4;       // scene units from Earth's centre where the fast-forward hands over to the final approach

// Seconds per beat. contact = rock touches the (exaggerated) globe; hold = screen fully white.
const TL = { frame: 1.0, bend: 2.2, warp: 4.6, approach: 1.6, point: 0.25, rise: 0.15, hold: 0.5, fade: 1.4, rings: 4.0 };
const M = {};
M.bend0 = TL.frame;
M.warp0 = M.bend0 + TL.bend;
M.contact = M.warp0 + TL.warp + TL.approach;
M.rise0 = M.contact + TL.point;
M.hold0 = M.rise0 + TL.rise;
M.fade0 = M.hold0 + TL.hold;
M.card = M.hold0 + TL.rings;
M.end = M.card + 0.6;

const RING_COLORS = { fireball: 0xfff1c8, blast: 0xff8a2a, burns: 0xff3b30 };

const wrap360 = (x) => ((x % 360) + 360) % 360;
const angDiff = (a, b) => ((a - b + 540) % 360) - 180;          // a − b, in (−180, 180]
const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
const lerp = (a, b, k) => a + (b - a) * k;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

// Mean anomaly (rad) for true anomaly nu (rad) on an ellipse of eccentricity e.
function meanFromTrue(nu, e) {
  const E = 2 * Math.atan2(Math.sqrt(1 - e) * Math.sin(nu / 2), Math.sqrt(1 + e) * Math.cos(nu / 2));
  return E - e * Math.sin(E);
}

const rockAt = (el, jd, out) => positionAt(el, meanAnomalyAt(el, jd), out);
function earthAt(earth, jd, out) {
  const el = planetElementsAt(earth, jd);
  return positionAt(el, el.ma, out);
}

// Hypothetical orbit that puts asteroid `a` in Earth's path LEAD_DAYS from jdNow. Keeps a, e, i (e nudged only when the
// orbit can't reach Earth's distance) and picks the node, ω and mean anomaly so the rock arrives with Earth.
// Earth's orbit is the ecliptic (i = 0), so the hit must be at a node: argument of latitude u = 0 or 180°.
// Of the 4 candidates (2 nodes × ±ν) it keeps the one that hits the sunlit side and changes the real orbit least.
export function collisionOrbit(a, earth, jdNow, R) {
  const T = jdNow + LEAD_DAYS;
  const pE = earthAt(earth, T, new THREE.Vector3());
  const rE = pE.length() / AU;
  const lamE = Math.atan2(-pE.z, pE.x) / DEG; // scene (x, y, z) = ecliptic (x, z, −y)

  let A = a.a, e = a.e;
  if (A * (1 - e) > 0.98 * rE) e = 1 - (0.98 * rE) / A;
  if (A * (1 + e) < 1.02 * rE) e = (1.02 * rE) / A - 1;
  e = clamp(e, 0.02, 0.97);
  if (A * (1 - e) > rE || A * (1 + e) < rE) { A = 1.1 * rE; e = 0.2; } // can't reach 1 AU at all: generic Apollo orbit
  const p = A * (1 - e * e);
  const nu = Math.acos(clamp((p / rE - 1) / e, -1, 1));
  const epoch = a.epoch ?? ASTEROID_EPOCH_JD;
  const n = meanMotionDeg(A);

  const v1 = new THREE.Vector3(), v2 = new THREE.Vector3();
  const vE = earthAt(earth, T + 0.01, v1).clone().sub(earthAt(earth, T - 0.01, v2)).divideScalar(0.02);
  const sunDir = pE.clone().normalize().negate();
  let best = null;
  for (const u of [0, 180]) {
    for (const s of [1, -1]) {
      const nuDeg = (s * nu) / DEG;
      const el = { a: A, e, i: a.i, om: wrap360(lamE + u), w: wrap360(u - nuDeg), epoch };
      el.ma = wrap360(meanFromTrue(s * nu, e) / DEG - n * (T - epoch));
      const vRel = rockAt(el, T + 0.01, v1).clone().sub(rockAt(el, T - 0.01, v2)).divideScalar(0.02).sub(vE);
      const hit = vRel.clone().normalize().negate(); // the rock comes in from this side of Earth
      const change = (Math.abs(angDiff(el.om, a.om)) + Math.abs(angDiff(el.w, a.w))) / 360;
      const score = hit.dot(sunDir) - 0.6 * change;
      if (!best || score > best.score) best = { el, vRel, score };
    }
  }

  // Contact: the exaggerated globe (radius R) is ~600× Earth, so the rock touches it a few days before T.
  const dist = (jd) => rockAt(best.el, jd, v1).distanceTo(earthAt(earth, jd, v2));
  let lo = T - 0.5;
  while (dist(lo) < R && lo > jdNow + 1) lo -= 0.5;
  let hi = T;
  for (let k = 0; k < 40; k++) { const mid = (lo + hi) / 2; if (dist(mid) > R) lo = mid; else hi = mid; }
  const vUnits = best.vRel.length(); // scene units per day
  return {
    el: best.el, T, Tc: hi, jdNow, missAtT: dist(T),
    vRelUnits: vUnits, vRelKms: (vUnits * KM_PER_UNIT) / 86400, vhat: best.vRel.clone().normalize(),
  };
}

// PLACEHOLDER numbers for the prototype (no impact physics yet; lib/impact.js replaces this).
// Energy and impact speed come from asteroids.json when present; crater and ring radii are rough scalings only.
export function placeholderEffects(a, vRelKms) {
  const D = a.D_meas ?? a.D_pred ?? 100;                                 // m
  const v = a.v_imp ?? Math.sqrt(vRelKms * vRelKms + 11.2 * 11.2);         // km/s
  const E = a.E_mt ?? (0.5 * 2800 * (Math.PI / 6) * D ** 3 * (v * 1000) ** 2) / 4.184e15; // Mt TNT
  return {
    placeholder: true,
    diameterM: D, speedKms: v, energyMt: E,
    hiroshimas: E / 0.015,
    craterKm: (15 * D) / 1000,
    vsTunguska: E / 12, vsChicxulub: E / 1e8,
    rings: [
      { key: 'fireball', label: 'Fireball', km: Math.max(0.05, E ** 0.4) },
      { key: 'blast', label: 'Blast (5 psi)', km: Math.max(0.2, 6 * E ** (1 / 3)) },
      { key: 'burns', label: '3rd-degree burns', km: Math.max(0.4, 11 * E ** 0.41) },
    ],
  };
}

export function formatCountdown(days) {
  const s = Math.max(0, days * 86400);
  const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60);
  if (d >= 1) return `${d} day${d === 1 ? '' : 's'} ${h} h`;
  if (h >= 1) return `${h} hour${h === 1 ? '' : 's'} ${m} min`;
  if (m >= 1) return `${m} minute${m === 1 ? '' : 's'}`;
  const n = Math.max(1, Math.floor(s));
  return `${n} second${n === 1 ? '' : 's'}`;
}

function glowTexture(stops) {
  const s = 128, cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const g = cv.getContext('2d');
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  for (const [k, c] of stops) grad.addColorStop(k, c);
  g.fillStyle = grad;
  g.fillRect(0, 0, s, s);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function rockGeometry() {
  const g = new THREE.IcosahedronGeometry(1, 2);
  const pos = g.attributes.position, v = new THREE.Vector3();
  for (let k = 0; k < pos.count; k++) { // position-based noise, so shared corners move together (no cracks)
    v.fromBufferAttribute(pos, k);
    const f = 1 + 0.2 * Math.sin(3.1 * v.x + 1.3) * Math.sin(2.7 * v.y + 0.4) * Math.sin(3.3 * v.z + 2.1)
      + 0.07 * Math.sin(7.3 * v.x + 5.1 * v.z);
    v.multiplyScalar(f * (1 + 0.25 * v.x * v.x));
    pos.setXYZ(k, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

// Glowing rings drawn on a shell just above the globe. Angles are radians of arc from the impact site (uDir).
function ringMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uDir: { value: new THREE.Vector3(0, 0, 1) },
      uWave: { value: 0 }, uWaveA: { value: 0 },
      uR: { value: [0, 0, 0] },
      uC: { value: [new THREE.Color(RING_COLORS.fireball), new THREE.Color(RING_COLORS.blast), new THREE.Color(RING_COLORS.burns)] },
      uA: { value: 0 }, uGlow: { value: 0 },
    },
    vertexShader: /* glsl */`
      varying vec3 vP;
      void main() { vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform vec3 uDir; uniform float uWave, uWaveA, uA, uGlow; uniform float uR[3]; uniform vec3 uC[3];
      varying vec3 vP;
      void main() {
        vec3 n = normalize(vP);
        float ang = atan(length(cross(n, uDir)), dot(n, uDir)); // accurate for tiny angles, unlike acos
        vec3 col = vec3(0.0);
        float w = (ang - uWave) / 0.035;
        col += vec3(1.0, 0.85, 0.6) * exp(-w * w) * uWaveA;                     // global pressure wave
        col += vec3(1.0, 0.45, 0.15) * 0.07 * uWaveA * step(ang, uWave);        // haze behind it
        for (int k = 0; k < 3; k++) {
          float r = max(uR[k], 1e-7);
          float d = (ang - r) / (r * 0.07);
          col += uC[k] * (exp(-d * d) * 0.95 + step(ang, r) * 0.11) * uA;       // bright edge + faint fill
        }
        col += vec3(1.0, 0.8, 0.5) * exp(-ang / max(uR[0] * 0.7, 1e-7)) * uGlow; // glowing ground zero
        gl_FragColor = vec4(col, 1.0);
      }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
}

/**
 * scene, camera, controls: the live app's. earth: the Earth entry from addPlanets ({ planet, body, globe }).
 * time: SolarSystem's shared clock ref value. host: element for the DOM overlays. size(): canvas { w, h } in px.
 * hideAsteroid(a, hidden): hide / restore the asteroid's own dot, marker and orbit line.
 * onState(state): { phase: 'running', a } | { phase: 'results', a, effects } | null (shot over).
 */
export function createImpactShot({ scene, camera, controls, earth, time, host, size, hideAsteroid, onState }) {
  const R = earth.planet.radius;
  let S = null; // the running shot

  const V = () => new THREE.Vector3();
  const tmpA = V(), tmpB = V(), pos = V(), tgt = V(), rock = V(), E = V(), side = V(), up2 = V(), dir = V();
  const Y = new THREE.Vector3(0, 1, 0);

  function start(a) {
    if (S) back();
    if (!a || !(a.e < 1)) return;
    const jdNow = time.jd;
    const orb = collisionOrbit(a, earth.planet, jdNow, R);
    const effects = placeholderEffects(a, orb.vRelKms);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const saved = {
      pos: camera.position.clone(), tgt: controls.target.clone(), up: camera.up.clone(),
      near: camera.near, jd: time.jd, playing: time.playing, controls: controls.enabled,
    };
    time.playing = false;
    controls.enabled = false;
    hideAsteroid(a, true);

    // Orbits: the real one (white, fades to a ghost) and the hypothetical one (red, bends out of it).
    const realLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(orbitPoints(a)),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1, depthWrite: false }));
    const redGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints(a));
    const redLine = new THREE.Line(redGeo, new THREE.LineBasicMaterial({ color: 0xff3b30, transparent: true, opacity: 0, depthWrite: false }));
    redLine.visible = false;

    // The rock: a lumpy lit mesh (exaggerated size), a glow, and a fireball trail of additive sprites.
    const rockMesh = new THREE.Mesh(rockGeometry(), new THREE.MeshStandardMaterial({ color: 0x8c8276, roughness: 1, flatShading: true }));
    rockMesh.scale.setScalar(0.008);
    const fireTex = glowTexture([[0, 'rgba(255,255,240,1)'], [0.18, 'rgba(255,214,140,0.95)'], [0.45, 'rgba(255,120,30,0.45)'], [1, 'rgba(255,60,0,0)']]);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: fireTex, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
    const trail = Array.from({ length: 22 }, () => new THREE.Sprite(new THREE.SpriteMaterial({
      map: fireTex, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0,
    })));
    const pointTex = glowTexture([[0, 'rgba(255,255,255,1)'], [0.25, 'rgba(255,255,245,0.9)'], [0.6, 'rgba(255,230,190,0.25)'], [1, 'rgba(255,220,180,0)']]);
    const point = new THREE.Sprite(new THREE.SpriteMaterial({ map: pointTex, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, depthTest: false }));
    point.visible = false;
    const group = new THREE.Group();
    group.add(realLine, redLine, rockMesh, glow, point, ...trail);
    scene.add(group);

    // Where the rock touches the globe, in world space (at Tc) and in the globe's own (tilted) frame.
    const Ec = earthAt(earth.planet, orb.Tc, V());
    const site = rockAt(orb.el, orb.Tc, V());
    const nHat = site.clone().sub(Ec).normalize();
    site.copy(Ec).addScaledVector(nHat, R);
    earth.globe.updateMatrixWorld(true);
    const qInv = earth.globe.getWorldQuaternion(new THREE.Quaternion()).invert();
    const dirLocal = nHat.clone().applyQuaternion(qInv);
    const t1 = new THREE.Vector3().crossVectors(nHat, Y);
    if (t1.lengthSq() < 1e-6) t1.set(1, 0, 0);
    t1.normalize();
    const t2 = new THREE.Vector3().crossVectors(t1, nHat).normalize(); // camera drifts this way off the vertical

    // Rings: a shell just above the globe (child of globe, so it is tilted with it), plus km labels.
    const shell = new THREE.Mesh(new THREE.SphereGeometry(R * 1.004, 160, 80), ringMaterial());
    shell.material.uniforms.uDir.value.copy(dirLocal);
    shell.renderOrder = 2;
    earth.globe.add(shell);
    const ringAng = effects.rings.map((r) => Math.min(r.km / EARTH_KM, 1.4));
    const lt1 = new THREE.Vector3().crossVectors(dirLocal, Y);
    if (lt1.lengthSq() < 1e-6) lt1.set(1, 0, 0);
    lt1.normalize();
    const lt2 = new THREE.Vector3().crossVectors(dirLocal, lt1).normalize();
    const bearings = [-0.5, 0.45, 1.35]; // radians around the site, so the three labels don't stack
    const labels = effects.rings.map((r, k) => {
      const div = document.createElement('div');
      div.className = `impact-ring-label ${r.key}`;
      div.textContent = `${r.label} · ${fmtKm(r.km)}`;
      const obj = new CSS2DObject(div);
      const b = bearings[k], ang = ringAng[k];
      const tang = lt1.clone().multiplyScalar(Math.cos(b)).addScaledVector(lt2, Math.sin(b));
      obj.position.copy(dirLocal).multiplyScalar(Math.cos(ang)).addScaledVector(tang, Math.sin(ang)).multiplyScalar(R * 1.004);
      obj.visible = false;
      earth.globe.add(obj);
      return obj;
    });
    const diveH = clamp(R * Math.sin(Math.max(...ringAng)) * 3.2, 0.004, 0.42);

    // DOM: title, countdown, flash.
    const fx = document.createElement('div');
    fx.className = 'impact-fx';
    fx.innerHTML = '<div class="shot-flash"></div><div class="impact-title"><b></b><span>Hypothetical orbit. Not a real prediction.</span></div><div class="impact-count"><b></b><span></span></div>';
    fx.querySelector('.impact-title b').textContent = `What if ${shortName(a)} were headed for Earth?`;
    host.appendChild(fx);
    const flash = fx.querySelector('.shot-flash'), title = fx.querySelector('.impact-title');
    const count = fx.querySelector('.impact-count'), countB = count.querySelector('b'), countS = count.querySelector('span');

    // Overview framing for the opening: wide enough for both orbits.
    const Q = Math.max(a.a * (1 + a.e), orb.el.a * (1 + orb.el.e), 1.2);
    const dist = clamp((43 * Q) / 1.6, 30, 160);
    const overview = { pos: new THREE.Vector3(0, 0.58, 0.81).multiplyScalar(dist), tgt: new THREE.Vector3() };

    const tau0 = orb.Tc - jdNow;
    const tauSw = clamp((SWITCH_DIST - R) / Math.max(orb.vRelUnits, 1e-4), 0.05, tau0 * 0.5);

    S = {
      a, orb, effects, saved, reduced, t0: performance.now(), cut: null, resultsSent: false,
      realLine, redLine, redGeo, rockMesh, glow, trail, point, group, shell, labels, ringAng, diveH,
      fx, flash, title, count, countB, countS, site, nHat, t2, overview, tau0, tauSw, Ec,
      cam0: { pos: camera.position.clone(), tgt: controls.target.clone() }, lastBend: -1, near: camera.near, offset: '',
      dispose: [realLine.geometry, realLine.material, redGeo, redLine.material, rockMesh.geometry, rockMesh.material,
        glow.material, point.material, fireTex, pointTex, ...trail.map((s) => s.material), shell.geometry, shell.material],
    };
    if (reduced) beginCut(performance.now(), '#05060a', 0.6);
    onState?.({ phase: 'running', a });
  }

  // Fade to `color`, jump to the end state, fade back (Skip, and the reduced-motion version of the whole shot).
  function beginCut(now, color, inSec) {
    if (!S || S.cut) return;
    S.cut = { start: now, color, inSec, outSec: 0.8, frozen: (now - S.t0) / 1000, jumped: false };
  }

  // Fraction (0..1) of the remaining time to contact at shot time t (fast-forward, then a constant-speed approach).
  function jdAt(t) {
    if (t < M.warp0) return S.orb.jdNow;
    const x = (t - M.warp0) / (TL.warp + TL.approach);
    if (x >= 1) return S.orb.Tc;
    const xs = TL.warp / (TL.warp + TL.approach);
    let tau;
    if (x >= xs) tau = (S.tauSw * (1 - x)) / (1 - xs);
    else { // log-time ramp whose speed matches the approach's at the hand-over
      const y = (xs - x) / xs, L = Math.log(S.tau0 / S.tauSw);
      const c = clamp(xs / ((1 - xs) * L), 0.2, 2);
      tau = S.tauSw * Math.exp(L * (c * y + (1 - c) * y * y));
    }
    return S.orb.Tc - tau;
  }

  function mixEl(k) { // real orbit → hypothetical orbit, k = 0..1 (mean anomaly blended at jdNow)
    const a = S.a, el = S.orb.el, jd = S.orb.jdNow;
    const ma0 = meanAnomalyAt(a, jd), ma1 = meanAnomalyAt(el, jd);
    return {
      a: lerp(a.a, el.a, k), e: lerp(a.e, el.e, k), i: a.i,
      om: wrap360(a.om + angDiff(el.om, a.om) * k), w: wrap360(a.w + angDiff(el.w, a.w) * k),
      ma: wrap360(ma0 + angDiff(ma1, ma0) * k), epoch: jd,
    };
  }

  function chaseCam(rk, e, outPos, outTgt) {
    const d = rk.distanceTo(e);
    const u = dir.copy(rk).sub(e).divideScalar(d);
    side.crossVectors(u, Y);
    if (side.lengthSq() < 1e-6) side.set(1, 0, 0);
    side.normalize();
    up2.crossVectors(side, u);
    const back = 0.16 + 0.26 * Math.min(d, 1.5) / 1.5;
    outPos.copy(rk).addScaledVector(u, back).addScaledVector(side, back * 0.45).addScaledVector(up2, back * 0.3);
    outTgt.copy(e);
  }

  function setNear(n) {
    if (Math.abs(n - S.near) / S.near < 0.02) return;
    S.near = n; camera.near = n; camera.updateProjectionMatrix();
  }

  function setOffset(dx, dy) {
    const { w, h } = size();
    const key = `${w}x${h}:${dx.toFixed(1)},${dy.toFixed(1)}`;
    if (key === S.offset) return;
    S.offset = key;
    if (dx === 0 && dy === 0) camera.clearViewOffset();
    else camera.setViewOffset(w, h, dx, dy, w, h);
  }

  function frame(t) {
    const { orb } = S;
    // Orbits
    const kb = smooth(M.bend0, M.warp0, t);
    if (kb !== S.lastBend) {
      S.lastBend = kb;
      const pts = orbitPoints(mixEl(ease(kb)));
      const attr = S.redGeo.attributes.position;
      pts.forEach((p, k) => attr.setXYZ(k, p.x, p.y, p.z));
      attr.needsUpdate = true;
    }
    const linesOut = 1 - smooth(M.warp0 + TL.warp - 0.6, M.warp0 + TL.warp + 0.4, t);
    S.realLine.material.opacity = lerp(1, 0.22, kb) * linesOut;
    S.redLine.visible = kb > 0 && linesOut > 0;
    S.redLine.material.opacity = Math.min(1, kb * 3) * linesOut;

    // Clock
    const jd = jdAt(t);
    time.jd = jd;
    time.dirty = true;
    earthAt(earth.planet, jd, E);
    if (t < M.warp0) positionAt(mixEl(ease(kb)), mixEl(ease(kb)).ma, rock);
    else rockAt(orb.el, jd, rock);
    const d = rock.distanceTo(E);
    const before = t < M.contact;

    // Rock, glow, fireball trail
    const heat = before ? smooth(R * 1.4, R * 1.0, d) : 0;
    S.rockMesh.visible = S.glow.visible = before;
    S.rockMesh.position.copy(rock);
    S.rockMesh.rotation.set(t * 0.7, t * 1.1, 0);
    S.glow.position.copy(rock);
    S.glow.scale.setScalar(0.035 + 0.1 * heat);
    S.glow.material.opacity = 0.55 + 0.45 * heat;
    S.trail.forEach((sp, k) => {
      const f = (k + 1) / S.trail.length;
      sp.visible = heat > 0.01;
      sp.position.copy(rock).addScaledVector(orb.vhat, -(0.004 + 0.012 * heat) * (k + 1));
      sp.scale.setScalar((0.03 + 0.07 * heat) * (1 - 0.8 * f));
      sp.material.opacity = heat * (1 - f) * 0.9;
    });

    // Camera
    let shake = 0;
    if (t < M.warp0) {
      const k = ease(clamp(t / (M.warp0 - 0.4), 0, 1));
      pos.lerpVectors(S.cam0.pos, S.overview.pos, k);
      tgt.lerpVectors(S.cam0.tgt, S.overview.tgt, k);
      camera.up.copy(Y);
      setNear(S.saved.near);
    } else if (t < M.hold0) {
      if (before) chaseCam(rock, E, tmpB, tgt);
      else chaseCam(tmpA.copy(S.site).addScaledVector(orb.vhat, -0.0001), S.Ec, tmpB, tgt);
      const w = smooth(M.warp0 + 0.3, M.warp0 + TL.warp * 0.85, t);
      pos.lerpVectors(S.overview.pos, tmpB, w);
      tgt.lerpVectors(S.overview.tgt, tgt, w);
      shake = before ? 0.004 * heat : 0.012 * (1 - smooth(M.contact, M.hold0, t) * 0.5);
    } else {
      const tr = t - M.hold0;
      const k = ease(clamp((tr - 1.4) / 2.6, 0, 1));
      const h = Math.exp(lerp(Math.log(0.42), Math.log(S.diveH), k));
      pos.copy(S.site).addScaledVector(S.nHat, h).addScaledVector(S.t2, h * lerp(0.24, 0.7, k));
      tgt.copy(S.site).addScaledVector(S.nHat, -R * 0.5 * (1 - k));
      camera.up.copy(S.nHat);
      setNear(clamp(h * 0.2, 0.0003, S.saved.near));
      shake = 0.003 * (1 - smooth(0, 1.2, tr)) * h;
    }
    if (shake > 0) pos.add(tmpA.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(2 * shake));
    camera.position.copy(pos);
    camera.lookAt(tgt);
    controls.target.copy(tgt);

    // Card space: shift the picture away from the results card (right on wide screens, bottom on phones).
    const sc = smooth(M.card - 0.6, M.card + 0.4, t);
    const { w: cw, h: ch } = size();
    if (cw >= 760) setOffset(sc * Math.min(200, cw * 0.15), 0);
    else setOffset(0, sc * ch * 0.2);

    // Bright point → white flash
    S.point.visible = t >= M.contact && t < M.fade0;
    if (S.point.visible) {
      S.point.position.copy(S.site);
      const kp = smooth(M.contact, M.rise0 + 0.1, t);
      S.point.scale.setScalar(0.02 + 0.5 * kp);
    }
    let white = 0;
    if (t >= M.rise0 && t < M.hold0) white = smooth(M.rise0, M.hold0, t);
    else if (t >= M.hold0 && t < M.fade0) white = 1;
    else if (t >= M.fade0) white = 1 - smooth(M.fade0, M.fade0 + TL.fade, t);
    if (t >= M.contact && !S.flashAt) { // centre the glare on the impact point
      const p = tmpA.copy(S.site).project(camera);
      S.flashAt = `${((p.x + 1) / 2 * 100).toFixed(1)}% ${((1 - p.y) / 2 * 100).toFixed(1)}%`;
      S.flash.style.background = `radial-gradient(circle at ${S.flashAt}, #fff 0%, #fff 35%, #fff4dc 65%, #ffd9a6 100%)`;
    }
    if (!S.cut) S.flash.style.opacity = white.toFixed(3);

    // Rings
    const tr = t - M.hold0;
    const u = S.shell.material.uniforms;
    S.shell.visible = tr > 0;
    const wp = clamp((tr - 0.2) / 3.2, 0, 1);
    u.uWave.value = 1.6 * easeOut(wp);
    u.uWaveA.value = wp > 0 && wp < 1 ? 1 - wp : 0;
    const g = easeOut(clamp((tr - 2.2) / 1.8, 0, 1));
    S.ringAng.forEach((ang, k) => { u.uR.value[k] = ang * g; });
    u.uA.value = smooth(2.2, 2.6, tr) * (1 + 0.08 * Math.sin(tr * 3));
    u.uGlow.value = tr > 0 ? lerp(1.6, 0.7, smooth(0, 3, tr)) : 0;
    S.labels.forEach((l) => { l.visible = tr > 3.6; });

    // Text
    S.title.classList.toggle('on', t > 0.2 && t < M.contact - TL.approach);
    S.count.classList.toggle('on', t > M.warp0 + 0.2 && before);
    if (t > M.warp0) {
      S.countB.textContent = `Impact in ${formatCountdown(orb.Tc - jd)}`;
      S.countS.textContent = dateFromJd(jd).toISOString().slice(0, 10);
    }

    if (t >= M.card && !S.resultsSent) {
      S.resultsSent = true;
      onState?.({ phase: 'results', a: S.a, effects: S.effects });
    }
  }

  function update(now) {
    if (!S) return;
    let t = (now - S.t0) / 1000;
    if (S.cut) {
      const c = S.cut, ct = (now - c.start) / 1000;
      S.flash.style.background = c.color;
      if (ct < c.inSec) { S.flash.style.opacity = (ct / c.inSec).toFixed(3); t = c.frozen; }
      else {
        if (!c.jumped) { c.jumped = true; S.t0 = now - M.end * 1000; S.flashAt = 'cut'; }
        t = M.end;
        const o = 1 - (ct - c.inSec) / c.outSec;
        S.flash.style.opacity = Math.max(0, o).toFixed(3);
        if (o <= 0) S.cut = null;
      }
    }
    frame(Math.min(t, M.end + 30)); // keeps the rings breathing on the results screen
  }

  function skip() {
    if (!S || S.resultsSent) return;
    beginCut(performance.now(), '#05060a', 0.35);
  }

  function back() {
    if (!S) return;
    const s = S;
    S = null;
    s.group.removeFromParent();
    s.shell.removeFromParent();
    for (const l of s.labels) l.removeFromParent(); // CSS2DObject removes its own <div>
    for (const x of s.dispose) x.dispose();
    s.fx.remove();
    camera.clearViewOffset();
    camera.up.copy(s.saved.up);
    camera.near = s.saved.near;
    camera.updateProjectionMatrix();
    camera.position.copy(s.saved.pos);
    controls.target.copy(s.saved.tgt);
    camera.lookAt(s.saved.tgt);
    controls.enabled = s.saved.controls;
    time.jd = s.saved.jd;
    time.playing = s.saved.playing;
    time.dirty = true;
    hideAsteroid(s.a, false);
    onState?.(null);
  }

  return { start, update, skip, back, get active() { return !!S; } };
}

function shortName(a) {
  const m = /^\d+\s+(.+?)(\s+\(.*\))?$/.exec(a.name);
  return m ? m[1] : a.name.replace(/^\((.*)\)$/, '$1');
}

function fmtKm(km) {
  if (km >= 100) return `${Math.round(km).toLocaleString()} km`;
  if (km >= 10) return `${km.toFixed(0)} km`;
  if (km >= 1) return `${km.toFixed(1)} km`;
  return `${Math.round(km * 1000)} m`;
}
