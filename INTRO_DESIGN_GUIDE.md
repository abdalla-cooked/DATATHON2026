# Cinematic scroll intro: build guide for an agent

This guide tells you how to build a scroll-driven intro that feels like one continuous camera move through a 3D scene, with large type that slides in line by line, and a last screen that hands off to a live app with no visible cut. It documents the intro we shipped for the DATATHON 2026 asteroid project ("Is it coming for us?"). You do not need any other context to follow it.

The reference code lives in `abdalla-cooked/datathon2026` under `web/src/intro/` and `web/src/Root.jsx`. If you can read that repo, read those files after this guide. Every number below comes from them.

---

## 1. The feel you are aiming for

- Dark, quiet, lots of empty space. One idea per screen.
- Scrolling moves a camera, never a page. The text layers fade and slide over a 3D scene that is always there.
- Nothing jumps. Every motion eases in and out, and scrolling backwards replays the exact same frames in reverse.
- Text arrives as masked lines: each line slides up from behind its own invisible clip, like type rising out of a slot.
- The next section starts arriving before the last one has fully left, so you never see an empty, black gap.
- The final frame of the intro is pixel-identical to the first frame of the app behind it. Clicking the launch button crossfades over 1 second and you cannot tell where the intro ended.
- A slow, generated ambient drone plays from the first frame (if the browser allows), with a music toggle in the corner.

Inspiration was Oakley's Axiom Space page: huge type, dark space, one beat per screen. Match that kind of feel. Do not copy any real site's text, images or layout.

---

## 2. Stack (exact versions)

| Package | Version | Role |
|---|---|---|
| react, react-dom | 18.3.1 | Components and page shell |
| vite + @vitejs/plugin-react | 5.4.11 / 4.3.4 | Dev server and build |
| three | 0.160.0 | The one WebGL scene |
| gsap (with ScrollTrigger) | 3.15.0 | Scrubbed timelines, pinning |
| lenis | 1.3.27 | Inertial smooth scroll |

Fonts from Google Fonts: **Space Grotesk** 500/600 for headlines and numbers, **Inter** 400/500/600 for body text.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap">
<meta name="theme-color" content="#05060a">
```

No image textures, no audio files. The Earth is a procedural shader and the music is synthesized with the Web Audio API, so the intro has nothing heavy to download.

---

## 3. File structure

```
web/
  index.html                 fonts, theme-color, #root
  src/
    main.jsx                 renders <Root />
    Root.jsx                 page shell: intro, then app; skip, replay, handoff gate, music toggle, Begin gate
    styles.css               design tokens (:root) + .intro-layer fade + music toggle + Begin gate
    intro/
      ScrollIntro.jsx        DOM sections, Lenis + GSAP setup, per-section timelines
      scene.js               the one Three.js scene; everything is a function of scroll position `s`
      earth.js               procedural shader Earth with atmosphere
      intro.css              all intro layout, type and section styles
    lib/
      dataCache.js           one fetch per JSON file, shared by intro and app
      music.js               generative ambient music (Web Audio)
      replay.js              shared state for the app's opening "replay" animation
```

Keep this split. The DOM text and the 3D scene never talk to each other directly. They both read the same scroll number.

---

## 4. Core architecture (the part that makes it smooth)

### 4.1 One number drives everything

All 3D state is a pure function of one value, `s`, the scroll position measured in **screens** (0 at the top, `TOTAL = 14.9` at the bottom). One GSAP tween scrubs `M.s` from 0 to `TOTAL` across the full scroll length. The render loop calls `scene.render(M.s, time)` every frame.

Because the scene has no internal state that depends on history, scrolling back and forth always lands on the same frame. This is the single most important rule. Never trigger 3D animations with one-shot events like "on enter".

### 4.2 One canvas, one pinned stage

- One `<canvas>` is `position: fixed; inset: 0` behind everything (z-index 0).
- A dark gradient scrim sits over it (z-index 1), then a layer for HTML labels that follow 3D points (z-index 2), then the text (z-index 3).
- The scroll container is given a height of `(TOTAL + 1) * innerHeight` px.
- Inside it, one `.intro-stage` (100vh) is pinned by ScrollTrigger for the whole length. Every text section is an absolutely positioned layer inside that stage, stacked on top of each other. Sections do not scroll past; they crossfade in place.

### 4.3 Lenis and GSAP share one frame loop

```js
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const lenis = new Lenis({ autoRaf: false, lerp: 0.09 });
lenis.on('scroll', ScrollTrigger.update);

const tick = (t) => {
  lenis.raf(t * 1000);          // smooth scroll
  scene.render(M.s, t);         // 3D
  // plus any per-frame DOM writes (counter text, scrim opacity)
};
gsap.ticker.add(tick);
gsap.ticker.lagSmoothing(0);    // never let GSAP "catch up" with a jump after a slow frame
```

`lerp: 0.09` gives a heavy, gliding scroll. Lower is floatier, higher is snappier. Restore `lagSmoothing(500, 33)` on unmount.

Also set `history.scrollRestoration = 'manual'` on load, or a refresh mid-intro restores a scroll position that does not match the scene.

### 4.4 The master scrub and the pin

```js
const ctx = gsap.context(() => {
  ScrollTrigger.create({
    trigger: stage, start: 0, end: () => TOTAL * innerHeight, pin: true, pinSpacing: false,
  });
  gsap.fromTo(M, { s: 0 }, {
    s: TOTAL, ease: 'none',
    scrollTrigger: { start: 0, end: () => TOTAL * innerHeight, scrub: 1, invalidateOnRefresh: true },
  });
  buildSections(stage);
}, root);
```

`scrub: 1` means the value takes about 1 second to catch up with the scroll position. Together with Lenis this produces the soft, damped feel. Use `ease: 'none'` on the master tween; the easing lives in the tracks (section 6).

### 4.5 One scrubbed timeline per text section

Each section gets a timeline whose time unit is **one screen** and which runs over an absolute range `[a, b]` of screens:

```js
function sectionTimeline(a, b) {
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      start: () => a * innerHeight, end: () => b * innerHeight,
      scrub: 1, invalidateOnRefresh: true,
    },
  });
  tl.to({}, { duration: 0.001 }, b - a - 0.001); // force the timeline length to equal the section length
  return tl;
}
```

Positions inside the timeline are then in screens from the section start, so `0.5` means "half a screen after this section begins". The ranges of neighbouring sections overlap by 0.3 to 0.5 screens. That overlap is what creates the crossfade.

---

## 5. Design tokens

```css
:root {
  --bg: #05060a;        /* page and WebGL clear color */
  --text: #dde3f0;
  --accent: #5aa2ff;    /* blue: kickers, rules, numbers, button, Earth rim */
  --hazard: #ff3030;    /* red: danger words, hazard dots, warning bars */
  --muted: #8b96ad;
  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

Other colors used: body copy at `rgba(221,227,240,.86)`, dust `#a9c4ff`, stars `#dfe7ff`, asteroid dots `#86a6d8`, a warm label/orbit color `#ffc7a0`, card borders `#23304a` and `#2a3858`, card fill `rgba(5,6,10,.74)` with `backdrop-filter: blur(8px)`.

### Type scale

| Element | Font | Size | Line height | Notes |
|---|---|---|---|---|
| Hero title (h1) | Display 600 | `clamp(46px, 8.4vw, 118px)` | 0.96 | letter-spacing -0.02em, centered |
| Big number | Display 600 | `clamp(64px, 10vw, 150px)` | 1 | letter-spacing -0.04em, `tabular-nums` |
| Section h2 | Display 600 | `clamp(30px, 3.6vw, 54px)` | 1.06 | |
| Launch title | Display 600 | `clamp(40px, 6vw, 88px)` | 1 | |
| Figure number | Display 600 | `clamp(40px, 4.6vw, 68px)` | 1 | accent color |
| Strong lede | Display | `clamp(22px, 2.3vw, 34px)` | 1.2 | |
| Lede | Body | `clamp(17px, 1.45vw, 22px)` | 1.45 | 86% white |
| Hero subtitle | Body | `clamp(16px, 1.4vw, 20px)` | | muted |
| Kicker / act label | Body 600 | 12px | 1.2 | uppercase, letter-spacing 0.18em, accent, 18px below |
| Note | Body | 15px | | 2px red left border, 12px padding |

All section text gets `text-shadow: 0 1px 18px rgba(5,6,10,.65)` so it stays readable over bright 3D.

### Layout

- Sections: `position: absolute; inset: 0; display: flex; align-items: center; padding: 0 max(16px, 6vw)`.
- Hero and number screens are centered. Story screens (`.side`) sit on the left, `max-width: min(560px, 42vw)`, and the 3D scene slides right to make room (section 6.4).
- Hero text starts at `padding-top: 16vh`, not vertically centered, so the Earth sits below it.
- Scroll cue: bottom 26px, centered, the word "Scroll" (11px, 0.2em tracking, uppercase) above a 1px by 40px accent line that grows from the top and fades, on a 1.8s loop. It fades in after 1.1s.
- Skip button: fixed top 16px right 16px, pill (`border-radius: 999px`), 13px, translucent dark fill with blur.

---

## 6. Motion recipes

### 6.1 Masked line reveal

Markup: wrap every line of copy in two spans. The outer clips, the inner moves.

```jsx
function L({ children }) {
  return <span className="line"><span className="line-inner">{children}</span></span>;
}
// <h1><L>Is it coming</L><L>for us?</L></h1>
```

```css
.line { display: block; overflow: hidden; padding-bottom: .12em; margin-bottom: -.12em; } /* room for descenders */
.line-inner { display: block; will-change: transform; }
```

Animation inside a scrubbed timeline:

```js
const linesIn = (tl, el, at, stagger = 0.06) =>
  tl.fromTo(el.querySelectorAll('.line-inner'),
    { yPercent: 110 }, { yPercent: 0, duration: 0.35, stagger, ease: 'power3.out' }, at);
```

Gotcha: a staggered `fromTo` inside a scrubbed timeline only pre-renders its first target. Before building timelines, set every non-hero line to its start state yourself, or later lines flash visible on load:

```js
gsap.set(stage.querySelectorAll('.sec:not(.sec-hero) .line-inner'), { yPercent: 110 });
```

The hero is the exception. It plays on page load, not on scroll: `duration 1.1s, stagger 0.12s, ease power3.out, delay 0.2s`.

### 6.2 The other helpers

```js
const fadeUp = (tl, el, at, dur = 0.3) =>
  tl.fromTo(el, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: dur, ease: 'power2.out' }, at);
const show = (tl, el) => tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.02 }, 0); // section layer on
const out  = (tl, el, at, dur) => tl.to(el, { autoAlpha: 0, y: -50, duration: dur, ease: 'power1.in' }, at);
```

- Enter: lines rise 110% from below, `power3.out`.
- Exit: the whole section body drifts **up** 50px while fading, `power1.in`, over 0.35 to 0.45 screens. Up-and-out on exit plus up-from-below on entry reads as one continuous upward motion.
- Thin rules (`1px` lines) draw with `scaleX` 0 to 1 from the left; tree connectors draw with `scaleY` from the top.
- Only animate `transform` and `opacity` (`autoAlpha`). Never width, top, height or box-shadow.

### 6.3 Tracks: eased values over scroll for the 3D

Every 3D parameter is a "track": a list of `[screen, value]` keys joined with smoothstep. Holds are just two keys with the same value.

```js
const smooth = (t) => t * t * (3 - 2 * t);
function track(keys) {
  return (s) => {
    if (s <= keys[0][0]) return keys[0][1];
    for (let k = 0; k < keys.length - 1; k++) {
      const [s0, v0] = keys[k], [s1, v1] = keys[k + 1];
      if (s <= s1) return v0 + (v1 - v0) * smooth((s - s0) / (s1 - s0));
    }
    return keys[keys.length - 1][1];
  };
}
export const TRACKS = {
  dust:     track([[0, 1], [1.6, 0]]),
  count:    track([[1.2, 0], [2.9, 1]]),                    // share of dots revealed, also drives the counter
  rings:    track([[1.3, 0], [2.4, 1]]),                    // planet orbit lines
  band:     track([[3.0, 0], [3.6, 1], [4.8, 1], [5.3, 0]]),
  haz:      track([[4.9, 0], [5.6, 1], [8.6, 1], [9.2, 0]]),
  apoDraw:  track([[6.9, 0], [7.9, 1]]),                    // an orbit line draws itself
  apoAlpha: track([[6.75, 0], [6.95, 1], [8.4, 1], [9.0, 0]]),
  hidden:   track([[8.8, 0], [9.8, 1], [11.9, 1], [12.6, 0]]),
  measured: track([[10.3, 0], [10.8, 1], [11.9, 1], [12.4, 0]]),
  launch:   track([[11.9, 0], [12.8, 1]]),                  // morph into the app's first frame
  thin:     track([[12.0, 0], [12.8, 1]]),
  stars:    track([[0, 1], [12.0, 1], [12.9, 0]]),
  shift:    track([[3.4, 0], [4.0, 1], [11.9, 1], [12.7, 0]]), // scene slides aside for left-side copy
};
```

Write the track keys and the section timeline ranges side by side so text and 3D line up. A number counter can read a track directly: `Math.round(TRACKS.count(s) * total)`, written to `textContent` only when the value changes.

### 6.4 Making room for the copy

When text sits on the left, the scene slides right using the camera's view offset (no CSS transform on the canvas, no re-render cost):

```js
const SHIFT = 0.18; // share of the viewport
const sh = TRACKS.shift(s) * SHIFT;
if (sh > 1e-4) {
  if (w >= h) camera.setViewOffset(w, h, -sh * w, 0, w, h);   // landscape: slide right
  else        camera.setViewOffset(w, h, 0, -sh * h, w, h);   // portrait: slide down, text on top
} else if (camera.view) camera.clearViewOffset();
```

At the same time a scrim fades in with the same track (`scrim.style.opacity = TRACKS.shift(s)`):

```css
.intro-scrim { background: linear-gradient(90deg, rgba(5,6,10,.82) 0%, rgba(5,6,10,.5) 34%, rgba(5,6,10,0) 58%); }
@media (max-aspect-ratio: 1/1) {
  .intro-scrim { background: linear-gradient(180deg, rgba(5,6,10,.86) 0%, rgba(5,6,10,.55) 34%, rgba(5,6,10,0) 58%); }
}
```

### 6.5 The camera path

The camera is defined by keyframes of `[screen, target, distance, azimuth, elevation]`. Each channel is interpolated separately with a **monotone cubic (Fritsch-Carlson)** so the camera never overshoots a key and never wobbles. Distance is interpolated in **log space**, so zooming from 0.85 to 85 units feels even instead of rushing at one end.

```js
const keys = [
  [0,    earthPlusUp, 0.85, azE + 0.62, 12°],   // hero: very close on the night side of Earth
  [0.4,  earthPlusUp, 0.85, azE + 0.62, 12°],   // hold while the hero reads
  [1.25, earth,       3,    azE + 1.5,  20°],   // pull back, swing around
  [2.6,  earth*0.3,   85,   ...,        55°],   // way out: see the whole inner solar system
  [3.8,  earth*0.8,   30,   ...,        22°],
  [5.6,  sun,         48,   ...,        38°],
  [7.5,  sun,         36,   ...,        80°],   // nearly top-down for the orbit drawing
  [9.3,  focus,       22,   ...,        32°],   // push in on the chosen objects
  [11.0, focus,       9,    ...,        24°],
  [12.9, sun,         hypot(25,35), 0, atan2(25,35)], // the app's exact start view
  [14.9, sun,         same,         0, same],
];
```

```js
camera.position.set(
  tgt.x + d * Math.cos(el) * Math.sin(az),
  tgt.y + d * Math.sin(el),
  tgt.z + d * Math.cos(el) * Math.cos(az));
camera.lookAt(tgt);
```

Unwrap the azimuth keys before building the spline so the camera always turns the short way:

```js
for (let i = 1; i < az.length; i++) {
  while (az[i] - az[i - 1] > Math.PI) az[i] -= 2 * Math.PI;
  while (az[i] - az[i - 1] < -Math.PI) az[i] += 2 * Math.PI;
}
```

From `s >= 12.9` on, skip the spline and hard-set the app's camera (`position (0, 25, 35)`, `lookAt(0,0,0)`) so the handoff frame is exact.

Camera: `PerspectiveCamera(55, aspect, 0.1, 5000)`, the same as the app.

---

## 7. Section timing (in screens)

| Section | Range | What happens |
|---|---|---|
| Hero | 0 to 1.3 | Already visible on load. Scroll cue fades at 0.05. Body leaves at 0.78 over 0.39. Camera holds 0 to 0.4, then pulls back. |
| Scale | 1.0 to 3.2 | Count line in at 0.12. Counter runs 1.2 to 2.9 while dots appear. Second line in at 1.05. Leaves at 1.8. |
| Rule | 2.75 to 4.95 | Heading at 0.12. Two figures at 0.4 and 0.75, each with a rule drawing 0.05 later. Closing line at 1.2. Leaves at 1.72. A 3D band fades in 3.0 to 3.6. |
| Act 1 | 4.5 to 6.9 | Copy at 0.15. A small tree diagram builds node by node every 0.1 from 0.55. Caption at 1.25. Leaves at 1.92. |
| Act 2 | 6.45 to 8.85 | Copy at 0.15. Three stats fade up at 0.75, 0.89, 1.03. An orbit line draws 6.9 to 7.9. Leaves at 1.92. |
| Act 4 (headline) | 8.4 to 12.2 | Longest section, 3.8 screens. Four beats share one grid cell and replace each other: A in at 0.1, out at 0.85; B in at 1.1, out at 1.72; C in at 1.95; D in at 2.5. Leaves at 3.23 over 0.45. Dots turn red 8.8 to 9.8, rings appear 10.3 to 10.8. |
| Launch | 11.9 to 13.5 | "Now watch it learn." in at 0.15, button fades up at 0.4. The scene morphs into the app's first frame 11.9 to 12.8. |
| Credits | 13.5 to 14.9 | The whole finale layer slides up by the credits card height + 32px over 0.65 (`power2.inOut`). Names fade up every 0.12 from 0.3, chip rows at 0.7, footer at 0.9. |

Rules of thumb that came out of tuning:

- Give each plain section about 2.2 to 2.4 screens. Give the main point of the story about 3.8.
- Start the next section 0.35 to 0.45 screens before the previous one has finished its exit.
- Start the 3D change for a section 0.2 to 0.3 screens after its text begins, so the reader looks at the words first, then the picture.
- Beats that replace each other inside one section share one CSS grid cell (`.beats { display: grid } .beat { grid-area: 1 / 1 }`), so they occupy the same spot with no layout shift.

---

## 8. The 3D scene

All of it is in one `WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })` with pixel ratio `Math.min(devicePixelRatio, 1.5)` and `scene.background = #05060a`.

| Object | Build | Notes |
|---|---|---|
| Stars | 2,500 `Points` on a sphere of radius 1,800 to 2,400 | Soft round sprite in the fragment shader, size `(1.2 + 1.6a) * pixelRatio`, brightness `0.25 + 0.75 * rand^2.2` so most are faint |
| Dust | 400 points within 0.45 to 2.05 units of Earth | Additive blending, each point drifts on its own sine path (amplitude 0.06), fades out by s = 1.6 |
| Sun glow | `Sprite` with a radial canvas gradient, scale 4.2 | Warm white center to orange edge, additive |
| Earth | Procedural shader sphere, radius 0.27, 128x96 segments, tilted 23.44 degrees | See below |
| Planets and orbit rings | Shared with the app | Ring opacity multiplied by `TRACKS.rings` |
| Asteroid cloud | One `Points` with custom shader, about 40,000 points | Per-point attributes (reveal order, flags). Uniforms from tracks drive count, color and size. `depthTest: false` |
| Band | Flat ring mesh at ±0.05 AU around Earth's orbit, plus two edge lines | Fill opacity 0.16, edges 0.7, additive |
| Marker rings | `Points` with a ring-shaped fragment shader, 16 to 18 CSS px | Used to circle specific objects |
| HTML labels | Absolutely positioned divs projected from 3D points every frame | `translate3d` only; flip to the left side near the right edge |

### Procedural Earth (earth.js)

No textures. The fragment shader builds:

1. Land from 4-octave simplex fbm (`fbm4(p * 1.7)`, land where noise > 0.04 to 0.10).
2. Dark ocean `rgb(0.010, 0.035, 0.085)` to `rgb(0.020, 0.075, 0.150)`, land from dark green to tan, ice caps where `|y| > 0.8`.
3. Day lighting `0.02 + 1.25 * max(N·L, 0)`, so the night side is almost black.
4. A sun glint on water (`pow(N·H, 60) * 0.6`).
5. Thin clouds drifting slowly (`uTime * 0.004`).
6. Warm city lights `rgb(1.0, 0.72, 0.40)` only on the night side: low-frequency regions multiplied by high-frequency specks, so they read as scattered towns.
7. A Fresnel rim in the accent blue, strong on the lit crescent.

An atmosphere shell at radius x1.14 renders back faces with additive blending, brightest just outside the limb. The surface turns at `time * 0.025` rad/s.

The hero frames Earth from 0.85 units away on its **night side** (camera azimuth = direction from the Sun to Earth + 0.62 rad, elevation 12 degrees). You see a thin bright crescent, city lights and a blue rim against black. That shot is the whole mood of the opening.

### Asteroid cloud shader idea

```glsl
float shown = step(aReveal, uCount);                 // reveal in a stable random order
vec3 col = mix(uBase, uRed, max(uHaz * aPha, uHidden * aHidden));
col = mix(col, uGrey, uLaunch);                      // become the app's first frame
float px = mix(size * uPR, uSafe, uLaunch);          // match the app's dot size on screen
gl_PointSize = a < 0.004 ? 0.0 : px;
```

`aReveal` is a hash of each object's id mapped to 0..1, so the same dots appear first every time. When an effect focuses on a subset, the rest dim to 22% instead of disappearing, so context stays.

---

## 9. The handoff into the app

The goal: the last intro frame and the first app frame are the same picture.

1. **Preload during the intro.** On mount, call `import('./App.jsx')` and fetch every JSON file through a shared cache (`dataCache.js`, one promise per file). By the time the reader reaches the button, the app chunk and data are ready.
2. **Morph the scene.** From s = 11.9 to 12.8, the `launch` track moves the camera to the app's view, turns every dot grey (`0x5c6577`) at the app's dot size, swaps the shader Earth for the app's plain Earth at launch > 0.6, and fades stars and glow to 0.
3. **On click** (`Watch the AI learn`):
   - Kill the master scrub, stop Lenis, and tween `M.s` to at least 12.95 over 0.7s with `power2.inOut`. This covers someone who clicks before they have scrolled all the way.
   - Add a `launched` class that fades the text, skip button, labels and scrim out over 0.5s. The canvas stays.
   - Root mounts the app underneath with its opening animation armed.
4. **Two-condition gate.** Root waits for both: the app has drawn its first frame (`onReady`) and the intro camera has settled (`onSettled`). Only then does the intro layer fade to 0 over **1000ms** and unmount. Without this gate you get a flash of an empty app.
5. **Skip intro** writes `localStorage['<project>.skipIntro'] = '1'`, mounts the app, and fades the intro out over 600ms. On the next visit the app loads directly.
6. **Replay intro** (a link in the app's top bar) clears that key, scrolls to 0, mounts the intro at opacity 0, fades it in over 600ms on the next animation frame, then unmounts the app.

```css
.intro-layer { position: relative; z-index: 40; opacity: 1; transition-property: opacity; transition-timing-function: ease; }
.intro-layer.faded { opacity: 0; pointer-events: none; }
```

Set the transition duration inline per case (1000ms launch, 600ms skip and replay). Wrap every `localStorage` call in try/catch.

---

## 10. Audio

### Ambient music (lib/music.js)

Generated live with Web Audio, so there is no file and no audible loop point.

- **Pads**: each chord tone is two sawtooths detuned -11 and +9 cents plus a sine core, through one low-pass at 950 Hz (Q 0.8) whose cutoff breathes ±450 Hz on a 0.02 Hz LFO (one cycle every 50s). Attack 16s, release 22s, a new chord every 40s, old chord fades under the new one.
- **Progression**: D minor, low open voicings: Dm(add9), Bbmaj7, Fmaj7/C, Dm(add9), Gm(add9), Am7.
- **Sub**: a sine an octave under the root at gain 0.07, gliding to each new root.
- **Air tones**: every 14 to 28s, a soft triangle pair two octaves up swells in over 6s and out by 18s, far back in the reverb.
- **Wind**: looped noise through a band-pass at 300 Hz (Q 6), swept ±180 Hz and panned slowly, gain 0.035.
- **Swell**: every 30 to 60s, low noise whose low-pass opens 80 to 700 Hz and back over 14s.
- **Reverb**: one 11-second synthetic impulse (decaying noise with a soft attack), 95% wet. A gentle compressor (threshold -24 dB, ratio 3) glues it.
- **Master** level 0.45, fades in over 8s. A `duck()` drops it to 40% while voices speak.

### Autoplay and the Begin gate

On load, try to start the audio context. If it is still suspended after 300ms, show a full-screen **Begin** gate: dark radial overlay with 3px blur, an uppercase "▶ Begin" pill button placed at 64vh (over the dark side of Earth, below the hero copy), and "Best with sound on" under it. The gate blocks wheel and touch scroll while it is up. Any first pointerdown, keydown or touchstart anywhere also starts the music.

A small "♫ Music on / off" toggle sits fixed at bottom 16px, left 16px on every screen and remembers its state in localStorage. When off, suspend the audio context so it uses no CPU.

---

## 11. Reduced motion and phones

**`prefers-reduced-motion: reduce`**: no Lenis, no pinning, no scrub. Sections become normal 100vh blocks in document flow, each fading in (`opacity .6s`) when an IntersectionObserver sees 20% of it. The canvas renders one still frame at the app view. The scrim becomes a flat `rgba(5,6,10,.6)`. The launch button goes straight to the handoff.

**Portrait (`max-aspect-ratio: 1/1`)**: the scene slides down instead of right, copy sits at the top (`padding-top: 68px`), two-column layouts stack, stats become a 3-column grid with 14px gaps, and the scrim gradient runs top to bottom.

**Under 480px**: lede drops to `clamp(14px, 3.9vw, 17px)` so each masked line (about 45 characters) stays on one row in 358px of width. A masked line that wraps still animates as one block, which looks wrong.

Test at 1400px and 390px wide. No sideways scroll at 390px.

---

## 12. Performance rules

- One WebGL context for the whole intro. Never a canvas per section.
- Pixel ratio capped at 1.5.
- Animate only `transform` and `opacity`. Use `will-change: transform` on the moving line spans and labels.
- Hide any 3D object whose opacity is below 0.001 (`obj.visible = false`) so it costs nothing.
- In shaders, set `gl_PointSize = 0` and `discard` for invisible points.
- Write DOM only when a value changes (the counter, label flip classes). Measure label widths once.
- `frustumCulled = false` on large point clouds that shift around, so they do not pop.
- On unmount: remove the ticker callback, revert the GSAP context, destroy Lenis, dispose every geometry, material and texture, and call `renderer.forceContextLoss()`.
- Target 60fps on a mid-range laptop. Check with the browser Performance panel.

---

## 13. Copy rules

- One idea per screen. Two short lines per heading at most.
- Pull every number from the data files. Never type a number into the copy. Show `—` until data arrives.
- Use real units the reader can picture ("7.5 million km, about 19 times the distance to the Moon").
- Kickers label the beat ("Act 1", "Act 4 · Hidden hazards") in small blue caps.
- Red is reserved for danger. Use it on one or two words per screen at most.
- End strong claims with an honest qualifier in a small note with a red left bar ("Candidates to watch, not confirmed threats.").

The story arc that worked: a question (hero), the scale (one big counting number), the rule (two numbers), what the model did (three short acts), the headline finding (longest screen), a call to action, credits.

---

## 14. Step-by-step build order

1. Set up Vite + React, add the exact versions in section 2, add the fonts and tokens.
2. Build `Root.jsx` with the phase states `intro`, `launching`, `app`, `returning`, and the skip and replay logic. Use a placeholder app.
3. Build `scene.js` with the renderer, stars, a sphere, and `render(s, time)`. Wire Lenis + GSAP ticker + master scrub. Confirm the camera moves smoothly with a two-key path before adding anything else.
4. Add the camera keyframes with the monotone spline and log distance. Tune them with no text on screen.
5. Add the stacked section markup with `L` spans and `buildSections`. Do one section, scrub it back and forth, then add the rest.
6. Add tracks one effect at a time, lining each up with its section range.
7. Add the view offset shift and scrim for left-side copy.
8. Build the handoff: preload, morph into the app frame, the click tween, the two-condition gate.
9. Add music, the Begin gate and the toggle.
10. Add reduced motion and portrait styles.
11. Test.

## 15. Done when

- Scrolling down and back up at any speed shows no jumps, no flashes of text, and no black gaps between sections.
- The hero lines rise in on load; the scroll cue appears after about 1.1s.
- At 1400px and 390px wide: no console errors, no horizontal scroll, every masked line stays on one row.
- Clicking the launch button at any scroll position leads to the app with no visible cut.
- Skip intro is remembered after a reload; Replay intro brings it back.
- Every number on screen matches the data files.
- Reduced motion shows a simple, readable page with fades only.
- About 60fps on a mid-range laptop.

## 16. Pitfalls we hit

- **Later lines flash on load**: staggered `fromTo` in a scrubbed timeline only pre-renders its first target. Fix with an upfront `gsap.set(..., { yPercent: 110 })`.
- **Camera spins the long way round**: unwrap the azimuth keys.
- **Zoom rushes at one end**: interpolate log(distance), not distance.
- **Camera overshoots and wobbles at keys**: use a monotone cubic, not Catmull-Rom.
- **Jump after a slow frame**: `gsap.ticker.lagSmoothing(0)`.
- **Mobile address bar resize restarts things**: `ScrollTrigger.config({ ignoreMobileResize: true })`.
- **Refresh mid-intro lands on a mismatched frame**: `history.scrollRestoration = 'manual'`.
- **Empty app flashes during the handoff**: wait for both the app's first frame and the camera settle before fading.
- **Dots change size at the handoff**: the intro and app use different pixel ratio caps (1.5 vs 2). Convert the app's dot size: `SAFE_PX / appPixelRatio() * introPixelRatio()`.
- **Labels run off screen**: flip them to the left of their point when `x + 16 + width > viewportWidth - 8`, then clamp.
- **Autoplay blocked**: never assume sound. Try, then fall back to the Begin gate.
