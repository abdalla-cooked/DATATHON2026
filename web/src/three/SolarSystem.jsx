// P2 owns this file. The Three.js scene, mounted once inside React (PLAN.md §6).
// Steps done: 1 bare scene · 2 orbits · 3 asteroid cloud · 4 toggles · 5 click to inspect · planets · time slider.
// Props replace the window events of PLAN.md Contract 4.
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { orbitLine, positionAt, makeOrbitCloud } from './kepler.js';
import { planetElementsAt } from './planets.js';
import { addPlanets, addSunAndLights, BG_COLOR } from './bodies.js';
import { mattersToStory, sampled, SAMPLE_EVERY } from './cloudFilter.js';
import { replay, revealOf, REPLAY_GREY, SPREAD } from '../lib/replay.js';
import { MAX_JD, jdFromDate, meanAnomalyAt } from './time.js';
import TimeControls from './TimeControls.jsx';
import ViewButtons from './ViewButtons.jsx';

const COLD = new THREE.Color(0x2b5cc0); // p = 0, safe (a quieter blue, so the safe crowd reads as background)
const HOT = new THREE.Color(0xff3030);  // p = 1, hazardous
const MISS = new THREE.Color(0xff00ff);        // mistakes mode: real hazard the model missed
const FALSE_ALARM = new THREE.Color(0xffd400); // mistakes mode: flagged but not actually hazardous
const DIM = new THREE.Color(0x2a3550);         // mistakes mode: correct prediction, faded out
// Dot sizes in screen pixels (sizeAttenuation off), tuned for the real ~43k asteroids.
// Normal mode: grows from `safe` (score 0) to `hazard` (score 1). Mistakes mode: by kind.
const SIZE = { safe: 3, hazard: 5, correct: 2, falseAlarm: 4, miss: 5 };
const PULSE = 0.3;                       // dots swell by up to 30% while pulsing in mistakes mode
const MARKER_SIZE = 18;                  // pixels: white ring around the selected asteroid
const PICK_RADIUS = 10;                  // pixels: how close a click must be to a dot to select it

// Round dot sprite, so points render as circles instead of squares.
const DOT = sprite((g, s) => { g.fillStyle = '#fff'; g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 1, 0, Math.PI * 2); g.fill(); });
// White ring sprite that marks the selected asteroid.
const RING = sprite((g, s) => { g.strokeStyle = '#fff'; g.lineWidth = 6; g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 5, 0, Math.PI * 2); g.stroke(); });

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

export default function SolarSystem({ asteroids, metrics, view, onSelect, pickRequest, custom, onReady }) {
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;
  const canvasRef = useRef(null);
  const sceneRef = useRef(null); // { scene, camera, points, shown, cloud, ... } shared by the effects below
  // Shared clock (see TimeControls.jsx). Starts paused at today.
  const timeRef = useRef({ jd: jdFromDate(new Date()), playing: false, speed: 30, dirty: true, onTick: null });
  const [showAll, setShowAll] = useState(false);              // false = thinned cloud (see mattersToStory)
  const [counts, setCounts] = useState({ shown: 0, total: 0 }); // for the "Showing X of Y" caption

  // Create the scene once; clean up on unmount.
  useEffect(() => {
    const canvas = canvasRef.current;
    const time = timeRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BG_COLOR);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 5000);
    camera.position.set(...VIEWS.earth.pos);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.minDistance = 2;
    controls.maxDistance = 2000; // Eris's far end is ~98 AU = 980 units

    addSunAndLights(scene);

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
    const ctx = { scene, camera, points: null, shown: [], cloud: null, pulse: false, selected: null, marker: null,
      replayU: { value: replay.progress() } };
    let readySent = false;
    sceneRef.current = ctx;

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
    ctx.flyTo = (name) => {
      const v = VIEWS[name];
      if (!v) return;
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      flight = {
        from: camera.position.clone(), to: new THREE.Vector3(...v.pos),
        fromT: controls.target.clone(), start: performance.now(), dur: reduce ? 1 : 1400,
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
    renderer.setAnimationLoop((now) => {
      const dt = Math.min((now - last) / 1000, 0.1); // seconds; capped so a background tab doesn't jump years
      last = now;
      if (time.playing) {
        time.jd = Math.min(time.jd + time.speed * dt, MAX_JD);
        if (time.jd >= MAX_JD) time.playing = false;
        time.dirty = true;
        time.onTick?.(time.jd, time.playing);
      }
      if (time.dirty) { placeAll(time.jd); time.dirty = false; }

      if (flight) {
        const t = Math.min((now - flight.start) / flight.dur, 1), k = ease(t);
        camera.position.lerpVectors(flight.from, flight.to, k);
        controls.target.lerpVectors(flight.fromT, ORIGIN, k);
        if (t >= 1) flight = null;
      }
      controls.update();
      updateLabels();
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
      removeEventListener('resize', resize);
      renderer.setAnimationLoop(null);
      controls.dispose();
      renderer.dispose();
      renderer.forceContextLoss(); // free the WebGL context now (the intro can be replayed many times)
      labelRenderer.domElement.remove();
    };
  }, []);

  // Steps 3–4: every asteroid as one point, moved along its orbit to the slider's date.
  //   Normal mode:   blue (safe) → red (hazardous) by the selected model's probability.
  //   Mistakes mode: magenta = real hazard the model missed, yellow = false alarm, everything correct fades out.
  //   testOnly:      only asteroids from the unseen test set.
  // Rebuilds whenever the data or any toggle changes.
  useEffect(() => {
    const ctx = sceneRef.current;
    if (!ctx || !asteroids) return;
    const key = view.model === 'A' ? 'pA' : 'pB';
    const thr = metrics?.[view.model]?.threshold;
    const mistakes = view.showMistakes && thr != null; // needs the model's threshold from metrics.json

    // Kind of dot: 0 = correct (mistakes mode), 1 = false alarm, 2 = missed hazard.
    const kindOf = (a) => {
      const flagged = (a[key] ?? 0) >= thr;
      return a.pha === 1 && !flagged ? 2 : a.pha === 0 && flagged ? 1 : 0;
    };
    // Draw order = stacking order (depth test is off for the cloud), so the dots that matter go last and sit on top:
    // normal mode → most hazardous on top; mistakes mode → misses on top of false alarms on top of the faded rest.
    const pool = asteroids.filter((a) => a.e < 1 && (!view.testOnly || a.test)); // bound orbits only
    const list = pool
      .filter((a) => showAll || mattersToStory(a, metrics) || sampled(String(a.pdes)))
      .sort(mistakes ? (x, y) => kindOf(x) - kindOf(y) : (x, y) => (x[key] ?? 0) - (y[key] ?? 0));
    setCounts({ shown: list.length, total: pool.length });

    const colorOf = (a, out) => {
      if (!mistakes) return out.copy(COLD).lerp(HOT, a[key] ?? 0);
      return out.copy([DIM, FALSE_ALARM, MISS][kindOf(a)]);
    };

    // Size per dot (pixels): normal mode grows with the hazard score, mistakes mode by kind.
    const sizeOf = (a) => (mistakes
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
      depthTest: false, depthWrite: false, // stack by draw order (above), not by distance
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
    ctx.pulse = mistakes;          // the animation loop makes the dots pulse while mistakes mode is on
    timeRef.current.dirty = true;  // place the new dots at the current date on the next frame

    return () => {
      ctx.scene.remove(points);
      geometry.dispose();
      points.material.dispose();
      ctx.points = null;
      ctx.cloud = null;
    };
  }, [asteroids, metrics, view.model, view.testOnly, view.showMistakes, showAll]);

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
    };

    const onPointerDown = (ev) => { down = { x: ev.clientX, y: ev.clientY }; };
    const onPointerUp = (ev) => {
      if (!down || Math.hypot(ev.clientX - down.x, ev.clientY - down.y) > 5) return; // it was a drag
      const r = canvas.getBoundingClientRect();
      const mx = ev.clientX - r.left, my = ev.clientY - r.top;
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
      onSelectRef.current?.(a);
    };

    ctx.select = select;
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
      <ViewButtons views={VIEWS} initial="earth" onView={(name) => sceneRef.current?.flyTo(name)}>
        {counts.total > 0 && (
          <div className="cloud-info">
            <label>
              <input type="checkbox" id="showAllAsteroids" checked={showAll} onChange={(e) => setShowAll(e.target.checked)} />
              {' '}Show all asteroids
            </label>
            <small>
              Showing {counts.shown.toLocaleString()} of {counts.total.toLocaleString()}
              {!showAll && <><br />every hazard and every mistake included;<br />1 in {SAMPLE_EVERY} of the clearly safe rest</>}
            </small>
          </div>
        )}
      </ViewButtons>
    </>
  );
}
