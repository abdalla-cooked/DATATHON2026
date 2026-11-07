// P2 owns this file. The Three.js scene, mounted once inside React (PLAN.md §6).
// Step 1: bare scene — Sun, planet orbits for scale, orbit controls.
// Later steps (points, toggles, click-to-inspect) go in the effects below; props replace the window events.
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { orbitLine } from './kepler.js';

const PLANETS = [
  { name: 'Mercury', a: 0.387, e: 0.206, i: 7.0, om: 48.3, w: 29.1 },
  { name: 'Venus',   a: 0.723, e: 0.007, i: 3.4, om: 76.7, w: 54.9 },
  { name: 'Earth',   a: 1.000, e: 0.017, i: 0.0, om: 0.0,  w: 102.9 },
  { name: 'Mars',    a: 1.524, e: 0.093, i: 1.8, om: 49.6, w: 286.5 },
];

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

    renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
    sceneRef.current = { scene, camera, renderer };

    return () => {
      removeEventListener('resize', resize);
      renderer.setAnimationLoop(null);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  // TODO(P2 step 3–4): when `asteroids` / `metrics` / `view` change, rebuild the THREE.Points cloud.
  // TODO(P2 step 5): raycast on click → onSelect(asteroid).

  return <canvas id="scene" ref={canvasRef} />;
}
