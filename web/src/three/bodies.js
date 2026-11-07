// Sun, planets and dwarf planets as drawn by the live app (textures from public/textures). Shared with the intro so both scenes match
// exactly at the handoff (same sizes, colors, orbit rings and lights).
import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { orbitLine } from './kepler.js';
import { BODIES, planetElementsAt } from './planets.js';

export const BG_COLOR = 0x05060a;

// Image textures live in public/textures (Solar System Scope, CC BY 4.0, see CREDITS.md there).
export const loader = new THREE.TextureLoader();
export function tex(file) {
  const t = loader.load(`textures/${file}`);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// Soft additive halo around the Sun.
function glowTexture() {
  const s = 64, cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const g = cv.getContext('2d');
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, 'rgba(255,230,160,1)'); grad.addColorStop(0.2, 'rgba(255,190,80,0.55)');
  grad.addColorStop(0.5, 'rgba(255,140,40,0.12)'); grad.addColorStop(1, 'rgba(255,120,30,0)');
  g.fillStyle = grad; g.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(cv);
}

// Sun: textured self-lit sphere + soft halo + a light at its center so the planets are lit from the right side.
export function addSunAndLights(scene) {
  const sun = new THREE.Mesh(new THREE.SphereGeometry(0.4, 48, 24), new THREE.MeshBasicMaterial({ map: tex('2k_sun.jpg') }));
  scene.add(sun);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
  }));
  halo.scale.setScalar(3.2);
  scene.add(halo);
  scene.add(new THREE.PointLight(0xfff2dd, 3, 0, 0)); // decay 0: same brightness at every distance
  scene.add(new THREE.AmbientLight(0xffffff, 0.18));  // so the night sides aren't pitch black
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
      const sring = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        map: tex('2k_saturn_ring_alpha.png'), side: THREE.DoubleSide, transparent: true, roughness: 1, depthWrite: false,
      }));
      sring.rotation.x = -Math.PI / 2 + THREE.MathUtils.degToRad(p.tilt ?? 27);
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
    return { planet: p, body, label, ring, globe };
  });
}
