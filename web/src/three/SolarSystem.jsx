// P2 owns this file. The Three.js scene, mounted once inside React (PLAN.md §6).
// Steps done: 1 bare scene · 2 orbits · 3 asteroid cloud · 4 toggles · 5 click to inspect · planets · time slider ·
// Act 4 hidden hazards.
// Props replace the window events of PLAN.md Contract 4.
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { orbitLine, positionAt, makeOrbitCloud } from './kepler.js';
import { planetElementsAt } from './planets.js';
import { addPlanets, addSunAndLights, loader, BG_COLOR } from './bodies.js';
import { ALWAYS_SHOW, sampled, SAMPLE_EVERY } from './cloudFilter.js';
import { replay, revealOf, REPLAY_GREY, SPREAD } from '../lib/replay.js';
import { playAct } from '../lib/narration.js';
import { MAX_JD, jdFromDate, meanAnomalyAt } from './time.js';
import TimeControls from './TimeControls.jsx';
import ViewButtons from './ViewButtons.jsx';
import { createImpactEvent } from './impactEvent.js';
import './ImpactEvent.css';

const ROCK = new THREE.Color(0xa89a88); // default: plain rock, no risk coloring
const COLD = new THREE.Color(0x3d7bff); // "Highlight risk" on: below the model's threshold (low risk)
const HOT = new THREE.Color(0xff3030);  // "Highlight risk" on: at or above the threshold (high risk)
const MISS = new THREE.Color(0xff00ff);        // mistakes mode: real hazard the model missed
const FALSE_ALARM = new THREE.Color(0xffd400); // mistakes mode: flagged but not actually hazardous
const DIM = new THREE.Color(0x2a3550);         // mistakes mode: correct prediction, faded out
const LIME = new THREE.Color(0x9dff3a);        // hidden-hazards mode: dark asteroid measured >= 140 m, not on NASA's list
const LIME_HEX = 0x9dff3a;
// Dot sizes in screen pixels (sizeAttenuation off), tuned for the real ~43k asteroids.
// Normal mode: grows from `safe` (score 0) to `hazard` (score 1). Mistakes mode: by kind.
const SIZE = { safe: 3, hazard: 5, correct: 2, falseAlarm: 4, miss: 5, hidden: 8 };
const PULSE = 0.3;                       // dots swell by up to 30% while pulsing (mistakes + hidden-hazards modes)
const HIDDEN_TAGS = 5;                   // Act 4: name tags on this many of the biggest hidden hazards
const MARKER_SIZE = 18;                  // pixels: white ring around the selected asteroid
const FOCUS_DIST = 4;                    // scene units (0.4 AU): how close the camera gets when zooming in on a selection
const PICK_RADIUS = 10;                  // pixels: how close a click must be to a dot to select it

// Asteroid sprite: a lumpy, lit rock with a few craters. Drawn in greys, so the per-dot color tints it.
const DOT = sprite((g, s) => {
  const c = s / 2, n = 14, rnd = mulberry(7);
  g.beginPath();
  for (let k = 0; k < n; k++) {
    const t = (k / n) * Math.PI * 2, r = c * (0.78 + 0.2 * rnd());
    g[k ? 'lineTo' : 'moveTo'](c + Math.cos(t) * r, c + Math.sin(t) * r);
  }
  g.closePath();
  const lit = g.createRadialGradient(c * 0.7, c * 0.65, c * 0.1, c, c, c);
  lit.addColorStop(0, '#fff'); lit.addColorStop(0.6, '#b8b8b8'); lit.addColorStop(1, '#5a5a5a');
  g.fillStyle = lit;
  g.fill();
  g.clip();
  for (const [x, y, r] of [[0.62, 0.42, 0.13], [1.25, 1.1, 0.18], [0.8, 1.3, 0.1], [1.3, 0.62, 0.08]]) {
    g.fillStyle = 'rgba(0,0,0,0.28)'; g.beginPath(); g.arc(x * c, y * c, r * c, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(255,255,255,0.18)'; g.beginPath(); g.arc(x * c + r * c * 0.25, y * c + r * c * 0.25, r * c * 0.7, 0, Math.PI * 2); g.fill();
  }
});
// White ring sprite that marks the selected asteroid.
const RING = sprite((g, s) => { g.strokeStyle = '#fff'; g.lineWidth = 6; g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 5, 0, Math.PI * 2); g.stroke(); });

function mulberry(a) { // tiny seeded RNG, so the rock sprite looks the same on every load
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sprite(draw) {
  const s = 64, cv = document.createElement('canvas');
  cv.width = cv.height = s;
  draw(cv.getContext('2d'), s);
  return new THREE.CanvasTexture(cv);
}

// Camera presets for the view buttons (1 AU = 10 units). Real distances throughout, no squashed scale.
export const VIEWS = {
  earth: { label: "Earth's neighborhood", pos: [0, 25, 35] },     // out to Mars: where the hazard story is
  inner: { label: 'Inner planets + belt', pos: [0, 75, 105] },    // out to Jupiter, incl. the main belt / Ceres
  outer: { label: 'Whole solar system', pos: [0, 430, 610] },     // out to Neptune and Pluto
};
const LABEL_MIN_PX = 26; // hide a body's label when it sits closer than this to the Sun on screen (zoomed far out)

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Act 4 headline: near Earth's orbit (MOID <= 0.05 AU), NOT labeled hazardous, yet NASA's NEOWISE telescope
// measured it at >= 140 m. Dark surfaces make them look faint (H > 22), so the brightness rule misses them.
export const isMeasuredHidden = (a) => !!a.hidden && (a.D_meas ?? 0) >= 140;

// CAPCOM explains these toggles once per page load (remounting the app on Replay intro doesn't repeat them)
let riskExplained = false;
let showAllExplained = false;

export default function SolarSystem({ asteroids, metrics, view, onSelect, pickRequest, custom, onReady, onReplayIntro, apiRef }) {
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;
  const canvasRef = useRef(null);
  const sceneRef = useRef(null); // { scene, camera, points, shown, cloud, ... } shared by the effects below
  // Shared clock (see TimeControls.jsx). Starts at today and begins playing once the intro hands off.
  const timeRef = useRef({ jd: jdFromDate(new Date()), playing: false, speed: 1, dirty: true, onTick: null });
  const [showAll, setShowAll] = useState(false);              // false = thinned cloud (see cloudFilter.js)
  // false = plain rock; true = red high risk / blue low risk. Off by default, even after "Watch the AI learn".
  const [highlightRisk, setHighlightRisk] = useState(false);
  const [counts, setCounts] = useState({ shown: 0, total: 0, hidden: 0 }); // for the "Showing X of Y" caption
  const [impactPhase, setImpactPhase] = useState('idle'); // the impact event (impactEvent.js)

  // Create the scene once; clean up on unmount.
  useEffect(() => {
    const canvas = canvasRef.current;
    const time = timeRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BG_COLOR); // shown until the star map loads (the intro ends on this color)
    loader.load('textures/8k_stars_milky_way.jpg', (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = t;
      scene.backgroundIntensity = 0.55; // dimmed so the asteroid dots stay the brightest thing on screen
    });

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 5000);
    camera.position.set(...VIEWS.earth.pos);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.minDistance = 2;
    controls.maxDistance = 2000; // Eris's far end is ~98 AU = 980 units

    const sun = addSunAndLights(scene); // shared with the intro (bodies.js)

    // Planet names are HTML labels drawn by a second renderer layered over the canvas.
    const labelRenderer = new CSS2DRenderer();
    Object.assign(labelRenderer.domElement.style, { position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '1' });
    canvas.parentElement.appendChild(labelRenderer.domElement);
    const planets = addPlanets(scene, time.jd);

    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      labelRenderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    addEventListener('resize', resize);
    resize();

    // replayU: 0..1 progress of the "Watch the AI learn" replay (1 = every dot in its model color).
    const ctx = { scene, camera, points: null, shown: [], cloud: null, pulse: false, selected: null, marker: null, hiddenTags: [],
      replayU: { value: replay.progress() } };
    let readySent = false;
    sceneRef.current = ctx;

    // The impact event: a fictional asteroid that ends the world (impactEvent.js).
    ctx.impact = createImpactEvent({
      scene, camera, controls, time, canvas, earth: planets.find((p) => p.planet.name === 'Earth'),
    });
    const offImpact = ctx.impact.onPhase(setImpactPhase);

    // Move everything to Julian Date `jd`.
    const tmp = new THREE.Vector3();
    function placeAll(jd) {
      for (const { planet, body } of planets) {
        const el = planetElementsAt(planet, jd);
        positionAt(el, el.ma, body.position);
      }
      if (ctx.points && ctx.cloud) {
        const attr = ctx.points.geometry.attributes.position;
        ctx.cloud(jd, attr.array);
        attr.needsUpdate = true;
      }
      for (const { a, obj } of ctx.hiddenTags) {   // Act 4 name tags ride along with their asteroids
        positionAt(a, meanAnomalyAt(a, jd), obj.position);
      }
      if (ctx.selected && ctx.marker) {
        positionAt(ctx.selected, meanAnomalyAt(ctx.selected, jd), tmp);
        const attr = ctx.marker.geometry.attributes.position;
        attr.setXYZ(0, tmp.x, tmp.y, tmp.z);
        attr.needsUpdate = true;
      }
    }
    ctx.placeAll = placeAll;

    // Smooth camera glide to a preset (view buttons). Always ends looking at the Sun.
    let flight = null;
    const ORIGIN = new THREE.Vector3();
    const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
    ctx.flyTo = (name) => {
      const v = VIEWS[name];
      if (!v) return;
      ctx.follow = false;
      flight = {
        from: camera.position.clone(), to: new THREE.Vector3(...v.pos), toT: ORIGIN,
        fromT: controls.target.clone(), start: performance.now(), dur: reduceMotion() ? 1 : 1400,
      };
    };

    // Zoom in on the selected asteroid and keep it centered as it moves along its orbit.
    // The camera keeps its current viewing angle and ends FOCUS_DIST units (1 unit = 0.1 AU) from the rock.
    const focusPos = new THREE.Vector3();
    const livePos = () => positionAt(ctx.selected, meanAnomalyAt(ctx.selected, time.jd), focusPos);
    ctx.focusOn = () => {
      if (!ctx.selected) return;
      const offset = camera.position.clone().sub(controls.target).setLength(FOCUS_DIST);
      ctx.follow = true;
      flight = {
        from: camera.position.clone(), fromT: controls.target.clone(), offset,
        start: performance.now(), dur: reduceMotion() ? 1 : 1600,
      };
    };

    // Hide labels of bodies that sit almost on top of the Sun on screen (e.g. Mercury–Mars in the wide view).
    const sunPx = new THREE.Vector3(), bodyPx = new THREE.Vector3();
    function updateLabels() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      sunPx.set(0, 0, 0).project(camera);
      for (const { body, label } of planets) {
        bodyPx.copy(body.position).project(camera);
        label.visible = Math.hypot((bodyPx.x - sunPx.x) * w / 2, (bodyPx.y - sunPx.y) * h / 2) >= LABEL_MIN_PX;
      }
    }

    let last = performance.now();
    let autoStarted = false;
    renderer.setAnimationLoop((now) => {
      const dt = Math.min((now - last) / 1000, 0.1); // seconds; capped so a background tab doesn't jump years
      last = now;
      // Start the clock as soon as the intro is out of the way: replay 'armed' means the intro still covers
      // the app (its last frame matches these dot positions), so wait until it starts or is skipped.
      if (!autoStarted && replay.mode !== 'armed') { autoStarted = true; time.playing = true; }
      if (time.playing) {
        time.jd = Math.min(time.jd + time.speed * dt, MAX_JD);
        if (time.jd >= MAX_JD) time.playing = false;
        time.dirty = true;
        time.onTick?.(time.jd, time.playing);
      }
      if (time.dirty) { placeAll(time.jd); time.dirty = false; }

      if (ctx.impact.active) { flight = null; ctx.impact.update(dt); } // the event drives the camera
      if (ctx.impact.active && ctx.selected) ctx.dropSelection?.();     // close the details card so the event has the screen
      if (flight) {
        const t = Math.min((now - flight.start) / flight.dur, 1), k = ease(t);
        if (flight.offset && ctx.selected) {          // zooming in on a moving asteroid: aim at where it is now
          const p = livePos();
          controls.target.lerpVectors(flight.fromT, p, k);
          camera.position.lerpVectors(flight.from, p.clone().add(flight.offset), k);
        } else if (!flight.offset) {
          camera.position.lerpVectors(flight.from, flight.to, k);
          controls.target.lerpVectors(flight.fromT, flight.toT, k);
        }
        if (t >= 1) flight = null;
      } else if (ctx.follow && ctx.selected) {         // after the zoom: ride along, the user can still orbit around it
        const delta = livePos().clone().sub(controls.target);
        controls.target.add(delta);
        camera.position.add(delta);
      }
      controls.update();
      updateLabels();
      sun.rotation.y += dt * 0.05; // slow cosmetic spin (not tied to the time slider)
      for (const { globe, planet } of planets) {
        if (!(ctx.impact.active && planet.name === 'Earth')) globe.rotation.y += dt * 0.15; // Earth holds still for the event
      }
      if (ctx.points) {
        ctx.points.material.size = ctx.pulse ? 1 + PULSE * (1 + Math.sin(now / 200)) / 2 : 1;
      }
      ctx.replayU.value = replay.progress(now);
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
      // Tell the page once the first frame with the asteroid cloud is on screen (the intro waits for this
      // before it crossfades away, so there is never an empty frame).
      if (!readySent && ctx.points) { readySent = true; onReadyRef.current?.(); }
    });

    return () => {
      offImpact();
      ctx.impact.dispose();
      removeEventListener('resize', resize);
      renderer.setAnimationLoop(null);
      controls.dispose();
      renderer.dispose();
      renderer.forceContextLoss(); // free the WebGL context now (the intro can be replayed many times)
      labelRenderer.domElement.remove();
    };
  }, []);

  // Steps 3–4: every asteroid as one point, moved along its orbit to the slider's date.
  //   Normal mode:   plain rock; with "Highlight risk" on, red if the model's score is at/above its threshold, else blue.
  //   Mistakes mode: magenta = real hazard the model missed, yellow = false alarm, everything correct fades out.
  //   testOnly:      only asteroids from the unseen test set.
  // Rebuilds whenever the data or any toggle changes.
  useEffect(() => {
    const ctx = sceneRef.current;
    if (!ctx || !asteroids) return;
    const key = view.model === 'A' ? 'pA' : 'pB';
    const thr = metrics?.[view.model]?.threshold;
    const hiddenMode = !!view.showHidden;              // Act 4 overrides the other colorings
    const mistakes = !hiddenMode && view.showMistakes && thr != null; // needs the model's threshold from metrics.json

    // Kind of dot: 0 = correct (mistakes mode), 1 = false alarm, 2 = missed hazard.
    const kindOf = (a) => {
      const flagged = (a[key] ?? 0) >= thr;
      return a.pha === 1 && !flagged ? 2 : a.pha === 0 && flagged ? 1 : 0;
    };
    // Draw order = stacking order (the cloud doesn't write depth), so the dots that matter go last and sit on top:
    // normal mode → most hazardous on top; mistakes mode → misses on top of false alarms on top of the faded rest.
    const pool = asteroids.filter((a) => a.e < 1 && (!view.testOnly || a.test)); // bound orbits only
    const list = pool
      .filter((a) => showAll || ALWAYS_SHOW.has(String(a.pdes)) || sampled(String(a.pdes))
        || (mistakes && kindOf(a) !== 0) || (hiddenMode && isMeasuredHidden(a)))
      .sort(hiddenMode ? (x, y) => isMeasuredHidden(x) - isMeasuredHidden(y)
        : mistakes ? (x, y) => kindOf(x) - kindOf(y) : (x, y) => (x[key] ?? 0) - (y[key] ?? 0));
    setCounts({ shown: list.length, total: pool.length, hidden: list.filter(isMeasuredHidden).length });

    const colorOf = (a, out) => {
      if (hiddenMode) return out.copy(isMeasuredHidden(a) ? LIME : DIM);
      if (!mistakes) return out.copy(!highlightRisk ? ROCK : (a[key] ?? 0) >= (thr ?? 0.5) ? HOT : COLD);
      return out.copy([DIM, FALSE_ALARM, MISS][kindOf(a)]);
    };

    // Size per dot (pixels): normal mode grows with the hazard score, mistakes mode by kind.
    const sizeOf = (a) => (hiddenMode ? (isMeasuredHidden(a) ? SIZE.hidden : SIZE.correct) : mistakes
      ? [SIZE.correct, SIZE.falseAlarm, SIZE.miss][kindOf(a)]
      : SIZE.safe + (SIZE.hazard - SIZE.safe) * (a[key] ?? 0));

    const col = new Float32Array(list.length * 3);
    const px = new Float32Array(list.length);
    const rev = new Float32Array(list.length); // when the replay reveals this dot (lib/replay.js)
    const c = new THREE.Color();
    list.forEach((a, k) => { colorOf(a, c).toArray(col, k * 3); px[k] = sizeOf(a); rev[k] = revealOf(a.pdes); });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(list.length * 3), 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geometry.setAttribute('dotSize', new THREE.BufferAttribute(px, 1));
    geometry.setAttribute('reveal', new THREE.BufferAttribute(rev, 1));
    const material = new THREE.PointsMaterial({
      size: 1, // multiplier on each dot's own size; the pulse animates it
      sizeAttenuation: false, vertexColors: true, map: DOT, alphaTest: 0.5, transparent: true,
      // depthTest on: the solid Sun/planets hide the dots behind them. depthWrite off: dots never hide each other
      // by distance, so among themselves they still stack by draw order (above).
      depthTest: true, depthWrite: false,
    });
    // three's PointsMaterial gives every dot the same size; this patches its shader to read `dotSize` per dot.
    // It also runs the replay: until the replay reaches a dot's `reveal` value the dot is grey at the
    // safe size, then it fades into its real color and size.
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uReplay = ctx.replayU;
      shader.uniforms.uGrey = { value: new THREE.Color(REPLAY_GREY) };
      shader.vertexShader = shader.vertexShader
        .replace('void main() {', `attribute float dotSize;\nattribute float reveal;\nuniform float uReplay;\nuniform vec3 uGrey;\nvoid main() {`)
        .replace('#include <color_vertex>', `#include <color_vertex>
          float seen = smoothstep(reveal, reveal + ${SPREAD.toFixed(3)}, uReplay * ${(1 + SPREAD).toFixed(3)});
          vColor.rgb = mix(uGrey, vColor.rgb, seen);`)
        .replace('gl_PointSize = size;', `gl_PointSize = size * mix(${SIZE.safe.toFixed(1)}, dotSize, seen);`);
    };
    material.customProgramCacheKey = () => 'per-dot-size-replay';
    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false; // the dots move, so the bounding sphere computed at build time goes stale
    ctx.scene.add(points);
    ctx.points = points;
    ctx.shown = list;              // index in the cloud → asteroid object (for click-to-inspect)
    ctx.cloud = makeOrbitCloud(list);
    ctx.pulse = mistakes || hiddenMode; // the animation loop makes the dots pulse in mistakes and hidden-hazards modes
    timeRef.current.dirty = true;  // place the new dots at the current date on the next frame

    return () => {
      ctx.scene.remove(points);
      geometry.dispose();
      points.material.dispose();
      ctx.points = null;
      ctx.cloud = null;
    };
  }, [asteroids, metrics, view.model, view.testOnly, view.showMistakes, view.showHidden, showAll, highlightRisk]);

  // Act 4: draw the hidden hazards' orbits in lime, so judges see them all threading Earth's orbit,
  // and glide to Earth's neighborhood where they live.
  useEffect(() => {
    const ctx = sceneRef.current;
    if (!ctx || !asteroids || !view.showHidden) return;
    const lines = asteroids
      .filter((a) => isMeasuredHidden(a) && a.e < 1 && (!view.testOnly || a.test))
      .map((a) => orbitLine(a, LIME_HEX, 0.35));
    ctx.scene.add(...lines);

    // Name tags on the biggest ones (by measured size), so judges can read who they are.
    const biggest = asteroids
      .filter((a) => isMeasuredHidden(a) && a.e < 1 && (!view.testOnly || a.test))
      .sort((x, y) => y.D_meas - x.D_meas)
      .slice(0, HIDDEN_TAGS);
    ctx.hiddenTags = biggest.map((a) => {
      const tag = document.createElement('div');
      tag.textContent = `${a.name.replace(/^\d+\s+/, '')} · ${Math.round(a.D_meas)} m`;
      Object.assign(tag.style, {
        font: '600 12px system-ui, sans-serif', color: '#9dff3a', whiteSpace: 'nowrap',
        textShadow: '0 0 4px #000, 0 0 8px #000', transform: 'translate(10px, -14px)',
      });
      const obj = new CSS2DObject(tag);
      ctx.scene.add(obj);
      return { a, obj };
    });
    timeRef.current.dirty = true; // place the tags at the current date on the next frame
    ctx.flyTo('earth');
    return () => {
      for (const l of lines) { ctx.scene.remove(l); l.geometry.dispose(); l.material.dispose(); }
      for (const { obj } of ctx.hiddenTags) ctx.scene.remove(obj); // CSS2DObject removes its own <div>
      ctx.hiddenTags = [];
    };
  }, [asteroids, view.showHidden, view.testOnly]);

  // Step 5: click a dot → draw its orbit in white, mark it, and tell the app (onSelect → side panel).
  // Picking is done in screen space (nearest dot within PICK_RADIUS pixels), which works the same at
  // every zoom level because the dots are a fixed pixel size. Drags (rotating the camera) are ignored.
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const ctx = sceneRef.current;
    const canvas = canvasRef.current;
    if (!ctx) return;
    let down = null, selectedLine = null;
    const v = new THREE.Vector3();

    const clearSelection = () => {
      for (const obj of [selectedLine, ctx.marker]) {
        if (!obj) continue;
        ctx.scene.remove(obj);
        obj.geometry.dispose();
        obj.material.dispose();
      }
      selectedLine = ctx.marker = ctx.selected = null;
      ctx.follow = false;
    };

    const onPointerDown = (ev) => { down = { x: ev.clientX, y: ev.clientY }; };
    const onPointerUp = (ev) => {
      if (!down || Math.hypot(ev.clientX - down.x, ev.clientY - down.y) > 5) return; // it was a drag
      const r = canvas.getBoundingClientRect();
      const mx = ev.clientX - r.left, my = ev.clientY - r.top;
      if (ctx.impact?.onClick(mx, my, r)) return; // the event takes every click while it runs
      const pos = ctx.points?.geometry.attributes.position;
      if (!pos) return;

      let best = -1, bestD = PICK_RADIUS;
      for (let k = 0; k < pos.count; k++) {
        v.fromBufferAttribute(pos, k).project(ctx.camera);
        if (v.z > 1) continue; // behind the camera
        const d = Math.hypot((v.x + 1) / 2 * r.width - mx, (1 - v.y) / 2 * r.height - my);
        if (d < bestD) { bestD = d; best = k; }
      }
      if (best < 0) return;

      select(ctx.shown[best]);
    };

    // Also used by the UI (presets, worst-miss list) through the pickRequest prop below.
    const select = (a) => {
      clearSelection();
      selectedLine = orbitLine(a, 0xffffff, 1);
      ctx.marker = new THREE.Points(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3()]),
        new THREE.PointsMaterial({ size: MARKER_SIZE, sizeAttenuation: false, map: RING, transparent: true, depthTest: false }),
      );
      ctx.marker.frustumCulled = false;
      ctx.selected = a;
      ctx.scene.add(selectedLine, ctx.marker);
      timeRef.current.dirty = true; // places the marker at the current date
      ctx.focusOn();                // glide in and follow it
      onSelectRef.current?.(a);
    };

    // Close the details card: drop the selection and glide back to Earth's neighborhood.
    const deselect = () => {
      clearSelection();
      ctx.flyTo('earth');
      onSelectRef.current?.(null);
    };

    ctx.select = select;
    ctx.dropSelection = () => { clearSelection(); onSelectRef.current?.(null); }; // no camera move (the impact event uses this)
    if (apiRef) apiRef.current = { deselect, select, startImpact: (model) => ctx.impact.start(model) };
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);
    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
      clearSelection();
    };
  }, []);

  // UI asked to select an asteroid by name or pdes (presets, worst misses).
  useEffect(() => {
    const ctx = sceneRef.current;
    if (!ctx?.select || !pickRequest || !asteroids) return;
    const q = pickRequest.q;
    const a = asteroids.find((x) => x.pdes === q || x.name.includes(q));
    if (a) ctx.select(a);
  }, [pickRequest, asteroids]);

  // "Design your own asteroid": draw the custom orbit in cyan.
  useEffect(() => {
    const ctx = sceneRef.current;
    if (!ctx || !custom) return;
    const line = orbitLine(custom, 0x00ffff, 1);
    ctx.scene.add(line);
    return () => { ctx.scene.remove(line); line.geometry.dispose(); line.material.dispose(); };
  }, [custom]);

  return (
    <>
      <canvas id="scene" ref={canvasRef} />
      <TimeControls time={timeRef} />
      <ImpactOverlay phase={impactPhase} model={sceneRef.current?.impact.model} onBackToStart={onReplayIntro} />
      {/* TEMPORARY: plays the impact event on demand, for testing. Model A ends in extinction, Model B saves Earth. */}
      {impactPhase === 'idle' && (
        <button type="button" className="impact-test" onClick={() => sceneRef.current?.impact.start(view.model)}>
          TEST: impact event (Model {view.model})
        </button>
      )}
      <ViewButtons views={VIEWS} initial="earth" onView={(name) => sceneRef.current?.flyTo(name)}>
        {counts.total > 0 && (
          <div className="cloud-info">
            <button
              type="button" className={`risk-toggle${highlightRisk ? ' on' : ''}`} aria-pressed={highlightRisk}
              onClick={() => {
                // CAPCOM explains the colors the first time only; later toggles stay quiet
                if (!riskExplained) { riskExplained = true; playAct('risk_on'); }
                setHighlightRisk(!highlightRisk);
              }}
              disabled={view.showMistakes || view.showHidden}
              title={view.showMistakes || view.showHidden ? 'Mistakes / hidden-hazards mode uses its own colors' : undefined}
            >
              {highlightRisk ? 'Hide risk colors' : 'Highlight risk'}
            </button>
            {highlightRisk && !view.showMistakes && !view.showHidden && (
              <small className="risk-key"><span className="hot">●</span> high risk · <span className="cold">●</span> low risk</small>
            )}
            <label>
              <input type="checkbox" id="showAllAsteroids" checked={showAll}
                onChange={(e) => {
                  setShowAll(e.target.checked);
                  if (e.target.checked && !showAllExplained) { showAllExplained = true; playAct('show_all_on'); }
                }} />
              {' '}Show all asteroids
            </label>
            {view.showMistakes && !view.showHidden && (
              <small className="risk-key"><span className="mag">●</span> missed hazard · <span className="yel">●</span> false alarm</small>
            )}
            <small>
              Showing {counts.shown.toLocaleString()} of {counts.total.toLocaleString()}
              {!showAll && !view.showHidden && !view.showMistakes && ` (1 in ${SAMPLE_EVERY})`}
            </small>
            {view.showHidden && (
              <p className="hidden-card">
                <b>{counts.hidden} hidden hazards</b><br />
                Measured at 140 m or more by NASA's NEOWISE telescope, and their orbits pass within 0.05 AU of
                Earth's. NASA doesn't list them as hazardous: its rule judges size by brightness, and these are
                dark, so they look smaller than they are.
              </p>
            )}
          </div>
        )}
      </ViewButtons>
    </>
  );
}

// HTML layer of the impact event: banners, red vignette, flashes, and the ending cards.
// Model A: extinction. Model B: flags MC-1 hazardous early, the intern takes the shot, Earth is saved.
function ImpactOverlay({ phase, model, onBackToStart }) {
  if (phase === 'idle') return null;
  const back = onBackToStart && <button type="button" onClick={onBackToStart}>Back to the start</button>;
  return (
    <>
      {phase === 'detected' && (
        <div className="impact-banner" role="alert">⚠ Unidentified object on radar <small>click it to identify</small></div>
      )}
      {phase === 'tracking' && model !== 'B' && (
        <div className="impact-banner tracking" role="status">Tracking MC-1 <small>not in NASA's catalog</small></div>
      )}
      {phase === 'tracking' && model === 'B' && (
        <div className="impact-banner hazard" role="alert">⚠ MC-1 flagged hazardous <small>by Model B, without MOID · interceptor arming</small></div>
      )}
      {phase === 'defense' && <div className="impact-banner defense" role="status">Interceptor armed <small>target locked</small></div>}
      {phase === 'intercept' && <div className="impact-banner defense" role="status">Interceptor away</div>}
      {phase === 'destroyed' && <div className="impact-flash small" aria-hidden="true" />}
      {phase === 'saved' && (
        <div className="impact-card saved" role="dialog" aria-label="Earth saved">
          <p className="ic-kicker">Target destroyed</p>
          <h2>Earth saved</h2>
          <p>Model B flagged MC-1 as hazardous from the shape of its orbit alone, with no closest-approach data.
            That early warning gave the intern time to take the shot.</p>
          <p className="ic-note">This was fiction. MC-1 doesn't exist, and no known asteroid is on a collision course with Earth.</p>
          {back}
        </div>
      )}
      {phase === 'final' && <div className="impact-banner final" role="alert">⚠ Collision course</div>}
      {phase === 'final' && <div className="impact-vignette" aria-hidden="true" />}
      {(phase === 'impact' || phase === 'aftermath') && <div className="impact-flash" aria-hidden="true" />}
      {phase === 'aftermath' && (
        <div className="impact-card" role="dialog" aria-label="Extinction-level event">
          <p className="ic-kicker">Signal lost</p>
          <h2>Extinction-level event</h2>
          <p>The crust melted. The oceans boiled away. Nothing survived.</p>
          <p className="ic-note">This was fiction. MC-1 doesn't exist, and no known asteroid is on a collision course with Earth.</p>
          {back}
        </div>
      )}
    </>
  );
}
