// Sun, planets and dwarf planets as drawn by the live app. Shared with the intro so both scenes match
// exactly at the handoff (same sizes, colors, orbit rings and lights).
import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { orbitLine } from './kepler.js';
import { BODIES, planetElementsAt } from './planets.js';

export const BG_COLOR = 0x05060a;

// Sun: glowing sphere + a light at its center so the planets are lit from the right side.
export function addSunAndLights(scene) {
  const sun = new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 16), new THREE.MeshBasicMaterial({ color: 0xffcc55 }));
  scene.add(sun);
  scene.add(new THREE.PointLight(0xffffff, 3, 0, 0)); // decay 0: same brightness at every distance
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));  // so the night sides aren't pitch black
  return sun;
}

// Planets + dwarf planets: sphere + orbit ring (+ HTML label unless labels: false).
// Sizes are exaggerated (true scale would be invisible).
export function addPlanets(scene, jd, { labels = true } = {}) {
  return BODIES.map((p) => {
    const isEarth = p.name === 'Earth';
    const isDwarf = !!p.dwarf;
    const ringColor = isEarth ? 0x33ff99 : isDwarf ? 0x8a7f6a : 0x666666;
    const ringOpacity = isEarth ? 0.9 : p.faint ? 0.25 : isDwarf ? 0.4 : 0.6;
    const ring = orbitLine(planetElementsAt(p, jd), ringColor, ringOpacity);
    scene.add(ring);

    const body = new THREE.Mesh(
      new THREE.SphereGeometry(p.radius, 32, 16),
      new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.9, metalness: 0 }),
    );
    if (p.ring) { // Saturn's rings, tilted ~27°
      const sring = new THREE.Mesh(
        new THREE.RingGeometry(p.radius * 1.3, p.radius * 2.3, 64),
        new THREE.MeshBasicMaterial({ color: 0xcdbb8a, side: THREE.DoubleSide, transparent: true, opacity: 0.55 }),
      );
      sring.rotation.x = -Math.PI / 2 + 0.47;
      body.add(sring);
    }
    scene.add(body);

    let label = null;
    if (labels) {
      const tag = document.createElement('div');
      tag.textContent = p.name;
      Object.assign(tag.style, {
        font: '11px system-ui, sans-serif', color: isDwarf ? '#a9a291' : '#cfd6e6', letterSpacing: '0.04em',
        textShadow: '0 0 4px #000', whiteSpace: 'nowrap', opacity: p.faint ? '0.7' : '1',
      });
      label = new CSS2DObject(tag);
      label.position.set(0, p.radius + 0.35, 0);
      body.add(label);
    }
    return { planet: p, body, label, ring };
  });
}
