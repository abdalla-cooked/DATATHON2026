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
const PULSE = 0.3;                       // dots swell by up to 30% while pulsing in mistakes mode
const MARKER_SIZE = 18;                  // pixels: white ring around the selected asteroid
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
// Soft additive halo around the Sun.
const GLOW = sprite((g, s) => {
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, 'rgba(255,230,160,1)'); grad.addColorStop(0.2, 'rgba(255,190,80,0.55)');
  grad.addColorStop(0.5, 'rgba(255,140,40,0.12)'); grad.addColorStop(1, 'rgba(255,120,30,0)');
  g.fillStyle = grad; g.fillRect(0, 0, s, s);
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

// Image textures live in public/textures (Solar System Scope, CC BY 4.0, see CREDITS.md there).
const loader = new THREE.TextureLoader();
function tex(file) {
  const t = loader.load(`textures/${file}`);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
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

// Planets + dwarf planets: sphere + label + orbit ring. Sizes are exaggerated (true scale would be invisible).
function addPlanets(scene, jd) {
  return BODIES.map((p) => {
    const isEarth = p.name === 'Earth';
    const isDwarf = !!p.dwarf;
    const ringColor = isEarth ? 0x33ff99 : isDwarf ? 0x8a7f6a : 0x666666;
    const ringOpacity = isEarth ? 0.9 : p.faint ? 0.25 : isDwarf ? 0.4 : 0.6;
    scene.add(orbitLine(planetElementsAt(p, jd), ringColor, ringOpacity));

    // body = untilted group that moves along the orbit and carries the label; globe = the tilted, spinning sphere.
    const body = new THREE.Group();
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(p.radius, 48, 24),
      new THREE.MeshStandardMaterial({
        map: p.texture ? tex(p.texture) : null,
        color: p.texture && p.name !== 'Pluto' ? 0xffffff : p.color, // Pluto tints Ceres' map
        roughness: 0.95, metalness: 0,
      }),
    );
    globe.rotation.z = THREE.MathUtils.degToRad(p.tilt ?? 0);
    body.add(globe);
    if (p.ring) { // Saturn's rings: the texture is a radial strip, so remap the ring's UVs to run inner → outer edge
      const inner = p.radius * 1.25, outer = p.radius * 2.3;
      const geo = new THREE.RingGeometry(inner, outer, 128, 1);
      const pos = geo.attributes.position, uv = geo.attributes.uv, v = new THREE.Vector3();
      for (let k = 0; k < pos.count; k++) {
        v.fromBufferAttribute(pos, k);
        uv.setXY(k, (v.length() - inner) / (outer - inner), 0.5);
      }
      const ring = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        map: tex('2k_saturn_ring_alpha.png'), side: THREE.DoubleSide, transparent: true, roughness: 1, depthWrite: false,
      }));
      ring.rotation.x = -Math.PI / 2 + THREE.MathUtils.degToRad(p.tilt ?? 27);
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
    return { planet: p, body, label, globe };
  });
}

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Thinning the cloud: 1 in SAMPLE_EVERY of ALL asteroids, so high- and low-risk dots are thinned at the same ratio.
// Exceptions (see `keep` in the cloud effect): the UI presets, and the dots a mode is about (mistakes, hidden hazards).
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

export default function SolarSystem({ asteroids, metrics, view, onSelect }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null); // { scene, camera, points, shown, cloud, ... } shared by the effects below
  // Shared clock (see TimeControls.jsx). Starts paused at today.
  const timeRef = useRef({ jd: jdFromDate(new Date()), playing: false, speed: 30, dirty: true, onTick: null });
  const [showAll, setShowAll] = useState(false);              // false = thinned cloud (see SAMPLE_EVERY)
  const [highlightRisk, setHighlightRisk] = useState(false);  // false = plain rock; true = red high risk / blue low risk
  const [counts, setCounts] = useState({ shown: 0, total: 0, hidden: 0 }); // for the "Showing X of Y" caption

  // Create the scene once; clean up on unmount.
  useEffect(() => {
    const canvas = canvasRef.current;
    const time = timeRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x02030a); // shown until the star map loads
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

    // Sun: textured self-lit sphere + soft halo + a light at its center so the planets are lit from the right side.
    const sun = new THREE.Mesh(new THREE.SphereGeometry(0.4, 48, 24), new THREE.MeshBasicMaterial({ map: tex('2k_sun.jpg') }));
    scene.add(sun);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: GLOW, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
    }));
    halo.scale.setScalar(3.2);
    scene.add(halo);
    scene.add(new THREE.PointLight(0xfff2dd, 3, 0, 0)); // decay 0: same brightness at every distance
    scene.add(new THREE.AmbientLight(0xffffff, 0.18));  // so the night sides aren't pitch black

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
      sun.rotation.y += dt * 0.05; // slow cosmetic spin (not tied to the time slider)
      for (const { globe } of planets) globe.rotation.y += dt * 0.15;
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
    const c = new THREE.Color();
    list.forEach((a, k) => { colorOf(a, c).toArray(col, k * 3); px[k] = sizeOf(a); });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(list.length * 3), 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geometry.setAttribute('dotSize', new THREE.BufferAttribute(px, 1));
    const material = new THREE.PointsMaterial({
      size: 1, // multiplier on each dot's own size; the pulse animates it
      sizeAttenuation: false, vertexColors: true, map: DOT, alphaTest: 0.5, transparent: true,
      // depthTest on: the solid Sun/planets hide the dots behind them. depthWrite off: dots never hide each other
      // by distance, so among themselves they still stack by draw order (above).
      depthTest: true, depthWrite: false,
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
            <button
              type="button" className={`risk-toggle${highlightRisk ? ' on' : ''}`} aria-pressed={highlightRisk}
              onClick={() => setHighlightRisk((h) => !h)}
              disabled={view.showMistakes || view.showHidden}
              title={view.showMistakes || view.showHidden ? 'Mistakes / hidden-hazards mode uses its own colors' : undefined}
            >
              {highlightRisk ? 'Hide risk colors' : 'Highlight risk'}
            </button>
            {highlightRisk && !view.showMistakes && !view.showHidden && (
              <small className="risk-key"><span className="hot">●</span> high risk · <span className="cold">●</span> low risk</small>
            )}
            <label>
              <input type="checkbox" id="showAllAsteroids" checked={showAll} onChange={(e) => setShowAll(e.target.checked)} />
              {' '}Show all asteroids
            </label>
            <small>
              Showing {counts.shown.toLocaleString()} of {counts.total.toLocaleString()}
              {!showAll && (view.showHidden ? <><br />every hidden hazard included;<br />1 in {SAMPLE_EVERY} of the rest</>
                : view.showMistakes ? <><br />every mistake included;<br />1 in {SAMPLE_EVERY} of the rest</>
                : <><br />1 in {SAMPLE_EVERY} of every asteroid,<br />high and low risk alike</>)}
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
