// P2 owns this file. The Three.js scene, mounted once inside React (PLAN.md §6).
// Steps done: 1 bare scene · 2 orbits · 3 asteroid cloud · 4 toggles · 5 click to inspect · planets · time slider ·
// Act 4 hidden hazards.
// Props replace the window events of PLAN.md Contract 4.
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { orbitLine, positionAt, makeOrbitCloud } from './kepler.js';
import { BODIES, planetElementsAt } from './planets.js';
import { MAX_JD, jdFromDate, meanAnomalyAt } from './time.js';
import TimeControls from './TimeControls.jsx';
import ViewButtons from './ViewButtons.jsx';

const COLD = new THREE.Color(0x2b5cc0); // p = 0, safe (a quieter blue, so the safe crowd reads as background)
const HOT = new THREE.Color(0xff3030);  // p = 1, hazardous
const MISS = new THREE.Color(0xff00ff);        // mistakes mode: real hazard the model missed
const FALSE_ALARM = new THREE.Color(0xffd400); // mistakes mode: flagged but not actually hazardous
const DIM = new THREE.Color(0x2a3550);         // mistakes mode: correct prediction, faded out
const LIME = new THREE.Color(0x9dff3a);        // hidden-hazards mode: dark asteroid measured >= 140 m, not on NASA's list
const LIME_HEX = 0x9dff3a;
// Dot sizes in screen pixels (sizeAttenuation off), tuned for the real ~43k asteroids.
// Normal mode: grows from `safe` (score 0) to `hazard` (score 1). Mistakes mode: by kind.
const SIZE = { safe: 3, hazard: 5, correct: 2, falseAlarm: 4, miss: 5, hidden: 8 };
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

// Planets + dwarf planets: sphere + label + orbit ring. Sizes are exaggerated (true scale would be invisible).
function addPlanets(scene, jd) {
  return BODIES.map((p) => {
    const isEarth = p.name === 'Earth';
    const isDwarf = !!p.dwarf;
    const ringColor = isEarth ? 0x33ff99 : isDwarf ? 0x8a7f6a : 0x666666;
    const ringOpacity = isEarth ? 0.9 : p.faint ? 0.25 : isDwarf ? 0.4 : 0.6;
    scene.add(orbitLine(planetElementsAt(p, jd), ringColor, ringOpacity));

    const body = new THREE.Mesh(
      new THREE.SphereGeometry(p.radius, 32, 16),
      new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.9, metalness: 0 }),
    );
    if (p.ring) { // Saturn's rings, tilted ~27°
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(p.radius * 1.3, p.radius * 2.3, 64),
        new THREE.MeshBasicMaterial({ color: 0xcdbb8a, side: THREE.DoubleSide, transparent: true, opacity: 0.55 }),
      );
      ring.rotation.x = -Math.PI / 2 + 0.47;
      body.add(ring);
    }
    scene.add(body);

    const tag = document.createElement('div');
    tag.textContent = p.name;
    Object.assign(tag.style, {
      font: '11px system-ui, sans-serif', color: isDwarf ? '#a9a291' : '#cfd6e6', letterSpacing: '0.04em',
      textShadow: '0 0 4px #000', whiteSpace: 'nowrap', opacity: p.faint ? '0.7' : '1',
    });
    const label = new CSS2DObject(tag);
    label.position.set(0, p.radius + 0.35, 0);
    body.add(label);
    return { planet: p, body, label };
  });
}

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Thinning the cloud: everything that matters to the story is always drawn; only "boring" asteroids
// (not hazardous AND below both models' thresholds) are sampled, 1 in SAMPLE_EVERY.
const SAMPLE_EVERY = 5;
const ALWAYS_SHOW = new Set(['99942', '101955', '65803']); // Apophis, Bennu, Didymos (the UI presets)

// Stable pseudo-random pick per asteroid (FNV-1a hash of its designation), so the same dots stay
// put across model toggles, mistakes mode and the time slider.
function sampled(pdes) {
  let h = 0x811c9dc5;
  for (let k = 0; k < pdes.length; k++) { h ^= pdes.charCodeAt(k); h = Math.imul(h, 0x01000193); }
  return (h >>> 0) % SAMPLE_EVERY === 0;
}

// Act 4 headline: near Earth's orbit (MOID <= 0.05 AU), NOT labeled hazardous, yet NASA's NEOWISE telescope
// measured it at >= 140 m. Dark surfaces make them look faint (H > 22), so the brightness rule misses them.
export const isMeasuredHidden = (a) => !!a.hidden && (a.D_meas ?? 0) >= 140;

function mattersToStory(a, metrics) {
  const thrA = metrics?.A?.threshold ?? 0.5, thrB = metrics?.B?.threshold ?? 0.5;
  return a.pha === 1 || a.hidden || (a.pA ?? 0) >= thrA || (a.pB ?? 0) >= thrB || ALWAYS_SHOW.has(String(a.pdes));
}

export default function SolarSystem({ asteroids, metrics, view, onSelect }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null); // { scene, camera, points, shown, cloud, ... } shared by the effects below
  // Shared clock (see TimeControls.jsx). Starts paused at today.
  const timeRef = useRef({ jd: jdFromDate(new Date()), playing: false, speed: 30, dirty: true, onTick: null });
  const [showAll, setShowAll] = useState(false);              // false = thinned cloud (see mattersToStory)
  const [counts, setCounts] = useState({ shown: 0, total: 0, hidden: 0 }); // for the "Showing X of Y" caption

  // Create the scene once; clean up on unmount.
  useEffect(() => {
    const canvas = canvasRef.current;
    const time = timeRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05060a);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 5000);
    camera.position.set(...VIEWS.earth.pos);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.minDistance = 2;
    controls.maxDistance = 2000; // Eris's far end is ~98 AU = 980 units

    // Sun: glowing sphere + a light at its center so the planets are lit from the right side.
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 16), new THREE.MeshBasicMaterial({ color: 0xffcc55 })));
    scene.add(new THREE.PointLight(0xffffff, 3, 0, 0)); // decay 0: same brightness at every distance
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));  // so the night sides aren't pitch black

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

    const ctx = { scene, camera, points: null, shown: [], cloud: null, pulse: false, selected: null, marker: null };
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
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    });

    return () => {
      removeEventListener('resize', resize);
      renderer.setAnimationLoop(null);
      controls.dispose();
      renderer.dispose();
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
    const hiddenMode = !!view.showHidden;              // Act 4 overrides the other colorings
    const mistakes = !hiddenMode && view.showMistakes && thr != null; // needs the model's threshold from metrics.json

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
      .sort(hiddenMode ? (x, y) => isMeasuredHidden(x) - isMeasuredHidden(y)
        : mistakes ? (x, y) => kindOf(x) - kindOf(y) : (x, y) => (x[key] ?? 0) - (y[key] ?? 0));
    setCounts({ shown: list.length, total: pool.length, hidden: list.filter(isMeasuredHidden).length });

    const colorOf = (a, out) => {
      if (hiddenMode) return out.copy(isMeasuredHidden(a) ? LIME : DIM);
      if (!mistakes) return out.copy(COLD).lerp(HOT, a[key] ?? 0);
      return out.copy([DIM, FALSE_ALARM, MISS][kindOf(a)]);
    };

    // Size per dot (pixels): normal mode grows with the hazard score, mistakes mode by kind.
    const sizeOf = (a) => (hiddenMode ? (isMeasuredHidden(a) ? SIZE.hidden : SIZE.correct) : mistakes
      ? [SIZE.correct, SIZE.falseAlarm, SIZE.miss][kindOf(a)]
      : SIZE.safe + (SIZE.hazard - SIZE.safe) * (a[key] ?? 0));

    const col = new Float32Array(list.length * 3);
    const px = new Float32Array(list.length);
    const c = new THREE.Color();
    list.forEach((a, k) => { colorOf(a, c).toArray(col, k * 3); px[k] = sizeOf(a); });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(list.length * 3), 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geometry.setAttribute('dotSize', new THREE.BufferAttribute(px, 1));
    const material = new THREE.PointsMaterial({
      size: 1, // multiplier on each dot's own size; the pulse animates it
      sizeAttenuation: false, vertexColors: true, map: DOT, alphaTest: 0.5, transparent: true,
      depthTest: false, depthWrite: false, // stack by draw order (above), not by distance
    });
    // three's PointsMaterial gives every dot the same size; this patches its shader to read `dotSize` per dot.
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('void main() {', 'attribute float dotSize;\nvoid main() {')
        .replace('gl_PointSize = size;', 'gl_PointSize = size * dotSize;');
    };
    material.customProgramCacheKey = () => 'per-dot-size';
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
  }, [asteroids, metrics, view.model, view.testOnly, view.showMistakes, view.showHidden, showAll]);

  // Act 4: draw the hidden hazards' orbits in lime, so judges see them all threading Earth's orbit,
  // and glide to Earth's neighborhood where they live.
  useEffect(() => {
    const ctx = sceneRef.current;
    if (!ctx || !asteroids || !view.showHidden) return;
    const lines = asteroids
      .filter((a) => isMeasuredHidden(a) && a.e < 1 && (!view.testOnly || a.test))
      .map((a) => orbitLine(a, LIME_HEX, 0.35));
    ctx.scene.add(...lines);
    ctx.flyTo('earth');
    return () => {
      for (const l of lines) { ctx.scene.remove(l); l.geometry.dispose(); l.material.dispose(); }
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

      const a = ctx.shown[best];
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

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);
    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
      clearSelection();
    };
  }, []);

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
