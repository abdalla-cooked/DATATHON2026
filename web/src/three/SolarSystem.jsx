// P2 owns this file. The Three.js scene, mounted once inside React (PLAN.md §6).
// Step 1: bare scene — Sun, planet orbits for scale, orbit controls.
// Later steps (points, toggles, click-to-inspect) go in the effects below; props replace the window events.
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { orbitLine, positionAt } from './kepler.js';

const COLD = new THREE.Color(0x3a7bff); // p = 0, safe
const HOT = new THREE.Color(0xff3030);  // p = 1, hazardous
const MISS = new THREE.Color(0xff00ff);        // mistakes mode: real hazard the model missed
const FALSE_ALARM = new THREE.Color(0xffd400); // mistakes mode: flagged but not actually hazardous
const DIM = new THREE.Color(0x2a3550);         // mistakes mode: correct prediction, faded out
const POINT_SIZE = 6;                    // pixels on screen (sizeAttenuation off). Try 3 once the real ~30k points load.

// Round dot sprite, so points render as circles instead of squares.
const DOT = (() => {
  const s = 64, cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const g = cv.getContext('2d');
  g.fillStyle = '#fff';
  g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 1, 0, Math.PI * 2); g.fill();
  return new THREE.CanvasTexture(cv);
})();

// White ring sprite that marks the selected asteroid.
const RING = (() => {
  const s = 64, cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const g = cv.getContext('2d');
  g.strokeStyle = '#fff'; g.lineWidth = 6;
  g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 5, 0, Math.PI * 2); g.stroke();
  return new THREE.CanvasTexture(cv);
})();

const PICK_RADIUS = 10; // pixels: how close a click must be to a dot to select it

const PLANETS = [
  { name: 'Mercury', a: 0.387, e: 0.206, i: 7.0, om: 48.3, w: 29.1 },
  { name: 'Venus',   a: 0.723, e: 0.007, i: 3.4, om: 76.7, w: 54.9 },
  { name: 'Earth',   a: 1.000, e: 0.017, i: 0.0, om: 0.0,  w: 102.9 },
  { name: 'Mars',    a: 1.524, e: 0.093, i: 1.8, om: 49.6, w: 286.5 },
];

export default function SolarSystem({ asteroids, metrics, view, onSelect, pickRequest, custom }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null); // { scene, camera, renderer } for later effects

  // Create the scene once; clean up on unmount (React StrictMode mounts twice in dev).
  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05060a);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 5000);
    camera.position.set(0, 25, 35);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.4), new THREE.MeshBasicMaterial({ color: 0xffcc55 }))); // Sun
    PLANETS.forEach((p) => scene.add(orbitLine(p, p.name === 'Earth' ? 0x33ff99 : 0x666666, 0.9)));

    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    addEventListener('resize', resize);
    resize();

    const ctx = { scene, camera, renderer, points: null, shown: [], pulse: false };
    sceneRef.current = ctx;
    renderer.setAnimationLoop(() => {
      controls.update();
      if (ctx.points) {
        ctx.points.material.size = ctx.pulse ? POINT_SIZE + 2.5 * (1 + Math.sin(performance.now() / 200)) : POINT_SIZE;
      }
      renderer.render(scene, camera);
    });

    return () => {
      removeEventListener('resize', resize);
      renderer.setAnimationLoop(null);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  // Steps 3–4: every asteroid as one point, at its real position (mean anomaly `ma`).
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

    const list = asteroids.filter((a) => a.e < 1 && (!view.testOnly || a.test)); // bound orbits only

    const colorOf = (a, out) => {
      const p = a[key] ?? 0;
      if (!mistakes) return out.copy(COLD).lerp(HOT, p);
      const flagged = p >= thr;
      if (a.pha === 1 && !flagged) return out.copy(MISS);
      if (a.pha === 0 && flagged) return out.copy(FALSE_ALARM);
      return out.copy(DIM);
    };

    const pos = new Float32Array(list.length * 3);
    const col = new Float32Array(list.length * 3);
    const c = new THREE.Color();
    list.forEach((a, k) => {
      positionAt(a).toArray(pos, k * 3);
      colorOf(a, c).toArray(col, k * 3);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const points = new THREE.Points(geometry, new THREE.PointsMaterial({
      size: POINT_SIZE, sizeAttenuation: false, vertexColors: true, map: DOT, alphaTest: 0.5, transparent: true,
    }));
    ctx.scene.add(points);
    ctx.points = points;
    ctx.shown = list; // index in the cloud → asteroid object (for click-to-inspect in step 5)
    ctx.pulse = mistakes; // the animation loop makes the dots pulse while mistakes mode is on

    return () => {
      ctx.scene.remove(points);
      geometry.dispose();
      points.material.dispose();
      ctx.points = null;
    };
  }, [asteroids, metrics, view.model, view.testOnly, view.showMistakes]);

  // Step 5: click a dot → draw its orbit in white, mark it, and tell the app (onSelect → side panel).
  // Picking is done in screen space (nearest dot within PICK_RADIUS pixels), which works the same at
  // every zoom level because the dots are a fixed pixel size. Drags (rotating the camera) are ignored.
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const ctx = sceneRef.current;
    const canvas = canvasRef.current;
    if (!ctx) return;
    let down = null, selectedLine = null, marker = null;
    const v = new THREE.Vector3();

    const clearSelection = () => {
      for (const obj of [selectedLine, marker]) {
        if (!obj) continue;
        ctx.scene.remove(obj);
        obj.geometry.dispose();
        obj.material.dispose();
      }
      selectedLine = marker = null;
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
      marker = new THREE.Points(
        new THREE.BufferGeometry().setFromPoints([positionAt(a)]),
        new THREE.PointsMaterial({ size: POINT_SIZE * 2.5, sizeAttenuation: false, map: RING, transparent: true, depthTest: false }),
      );
      ctx.scene.add(selectedLine, marker);
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

  return <canvas id="scene" ref={canvasRef} />;
}
