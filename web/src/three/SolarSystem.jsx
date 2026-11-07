// P2 owns this file. The Three.js scene, mounted once inside React (PLAN.md §6).
// Step 1: bare scene — Sun, planet orbits for scale, orbit controls.
// Later steps (points, toggles, click-to-inspect) go in the effects below; props replace the window events.
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { orbitLine, positionAt } from './kepler.js';
import { PLANETS, planetElementsAt } from './planets.js';

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

// Planets are drawn where they really are today. Sizes are exaggerated (true scale would be invisible).
function addPlanets(scene, date) {
  const labels = [];
  for (const p of PLANETS) {
    const el = planetElementsAt(p, date);
    scene.add(orbitLine(el, p.name === 'Earth' ? 0x33ff99 : 0x666666, p.name === 'Earth' ? 0.9 : 0.6));

    const body = new THREE.Mesh(
      new THREE.SphereGeometry(p.radius, 32, 16),
      new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.9, metalness: 0 }),
    );
    body.position.copy(positionAt(el));
    scene.add(body);

    const tag = document.createElement('div');
    tag.textContent = p.name;
    Object.assign(tag.style, {
      font: '11px system-ui, sans-serif', color: '#cfd6e6', letterSpacing: '0.04em',
      textShadow: '0 0 4px #000', whiteSpace: 'nowrap',
    });
    const label = new CSS2DObject(tag);
    label.position.set(0, p.radius + 0.35, 0);
    body.add(label);
    labels.push(label);
  }
  return labels;
}

export default function SolarSystem({ asteroids, metrics, view, onSelect }) {
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

    // Sun: glowing sphere + a light at its center so the planets are lit from the right side.
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 16), new THREE.MeshBasicMaterial({ color: 0xffcc55 })));
    scene.add(new THREE.PointLight(0xffffff, 3, 0, 0)); // decay 0: same brightness at every distance
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));  // so the night sides aren't pitch black

    // Planet names are HTML labels drawn by a second renderer layered over the canvas.
    const labelRenderer = new CSS2DRenderer();
    Object.assign(labelRenderer.domElement.style, { position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '1' });
    canvas.parentElement.appendChild(labelRenderer.domElement);
    addPlanets(scene, new Date());

    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      labelRenderer.setSize(w, h);
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

      const a = ctx.shown[best];
      clearSelection();
      selectedLine = orbitLine(a, 0xffffff, 1);
      marker = new THREE.Points(
        new THREE.BufferGeometry().setFromPoints([positionAt(a)]),
        new THREE.PointsMaterial({ size: POINT_SIZE * 2.5, sizeAttenuation: false, map: RING, transparent: true, depthTest: false }),
      );
      ctx.scene.add(selectedLine, marker);
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

  return <canvas id="scene" ref={canvasRef} />;
}
