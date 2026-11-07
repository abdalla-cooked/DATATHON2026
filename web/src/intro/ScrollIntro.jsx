// The scroll-driven intro. One fixed WebGL canvas (scene.js) behind one pinned stage of text layers.
// All 3D state follows a single number, M.s (scroll position in screens, 0..TOTAL), scrubbed by one
// ScrollTrigger. Each text section is its own scrubbed timeline over an absolute range of screens, and
// the ranges overlap so sections crossfade. Lenis smooths the scroll and runs in gsap.ticker, together
// with the Three render, so scroll, text and 3D move on the same frame.
//
// Props (Root.jsx):
//   onLaunch   "Watch the AI learn" clicked; Root mounts the app beneath with the replay armed
//   onSettled  the camera has reached the app's start view (M.s >= SETTLE_S)
//   onSkip     "Skip intro" clicked
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createIntroScene, TRACKS, TOTAL, SETTLE_S } from './scene.js';
import { getAsteroids, getMetrics } from '../lib/dataCache.js';
import './intro.css';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const REPO_URL = 'https://github.com/abdalla-cooked/DATATHON2026';
const TEAM = ['Abdalla Shaldam', 'Alexander Philippopoulos', 'Jean-Paul Saliba'];
const STACK = [
  ['Python', 'pandas', 'scikit-learn', 'LightGBM', 'm2cgen'],
  ['React', 'Vite', 'Three.js', 'GSAP', 'Lenis'],
];

const fmt = (n) => (n == null ? '—' : Number(n).toLocaleString('en-US'));

// Thresholds the Act 1 tree actually learned, read from the sklearn text export.
function treeSplits(rules) {
  const h = /H <= ([\d.]+)/.exec(rules || '');
  const m = /moid <= ([\d.]+)/.exec(rules || '');
  return { h: h ? Number(h[1]).toFixed(3) : '—', moid: m ? Number(m[1]).toFixed(3) : '—' };
}

// One masked line: the inner span slides up from below its own clip box.
function L({ children, className = '' }) {
  return <span className={'line ' + className}><span className="line-inner">{children}</span></span>;
}

// Scrubbed timeline over screens [a, b]; its time unit is one screen.
function sectionTimeline(a, b) {
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { start: () => a * window.innerHeight, end: () => b * window.innerHeight, scrub: 1, invalidateOnRefresh: true },
  });
  tl.to({}, { duration: 0.001 }, b - a - 0.001); // pin the timeline's length to the section's length
  return tl;
}

function buildSections(stage) {
  const $ = (sel, root = stage) => root.querySelector(sel);
  const $$ = (sel, root = stage) => root.querySelectorAll(sel);
  const inners = (el) => $$('.line-inner', el);
  const linesIn = (tl, el, at, stagger = 0.06) =>
    tl.fromTo(inners(el), { yPercent: 110 }, { yPercent: 0, duration: 0.35, stagger, ease: 'power3.out' }, at);
  const fadeUp = (tl, el, at, dur = 0.3) =>
    tl.fromTo(el, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: dur, ease: 'power2.out' }, at);
  const show = (tl, el) => tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.02 }, 0);
  const out = (tl, el, at, dur) => tl.to(el, { autoAlpha: 0, y: -50, duration: dur, ease: 'power1.in' }, at);
  const sec = (name) => $(`[data-sec="${name}"]`);
  // A staggered fromTo inside a scrubbed timeline only pre-renders its first target, so put every
  // masked line (except the hero's, which plays in on load) in its start state up front.
  gsap.set($$('.sec:not(.sec-hero) .line-inner'), { yPercent: 110 });

  // hero 0–1.3: already in on load, only leaves
  {
    const s = sec('hero'), tl = sectionTimeline(0, 1.3);
    tl.to($('.scroll-cue', s), { autoAlpha: 0, duration: 0.25 }, 0.05);
    out(tl, $('.sec-body', s), 0.78, 0.39);
  }
  // scale 1.0–3.2: the counter runs 1.2–2.9 (TRACKS.count)
  {
    const s = sec('scale'), tl = sectionTimeline(1.0, 3.2);
    show(tl, s);
    linesIn(tl, $('.beat-count', s), 0.12);
    linesIn(tl, $('.beat-rate', s), 1.05);
    out(tl, $('.sec-body', s), 1.8, 0.36);
  }
  // rule 2.75–4.95: the NASA band is drawn 3.0–5.3
  {
    const s = sec('rule'), tl = sectionTimeline(2.75, 4.95);
    show(tl, s);
    linesIn(tl, $('.rule-head', s), 0.12);
    $$('.fig', s).forEach((f, k) => {
      linesIn(tl, f, 0.4 + k * 0.35);
      tl.fromTo($('.fig-rule', f), { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: 'power2.out' }, 0.45 + k * 0.35);
    });
    linesIn(tl, $('.rule-end', s), 1.2);
    out(tl, $('.sec-body', s), 1.72, 0.37);
  }
  // act 1 4.5–6.9: text left, the tree draws itself
  {
    const s = sec('act1'), tl = sectionTimeline(4.5, 6.9);
    show(tl, s);
    linesIn(tl, $('.copy', s), 0.15);
    const parts = $$('.tree > *', s);
    parts.forEach((p, k) => {
      const at = 0.55 + k * 0.1;
      if (p.classList.contains('conn')) tl.fromTo(p, { scaleY: 0 }, { scaleY: 1, duration: 0.12 }, at);
      else fadeUp(tl, p, at, 0.18);
    });
    linesIn(tl, $('.tree-caption', s), 1.25);
    out(tl, $('.sec-body', s), 1.92, 0.36);
  }
  // act 2 6.45–8.85: Apophis's orbit draws 6.9–7.9
  {
    const s = sec('act2'), tl = sectionTimeline(6.45, 8.85);
    show(tl, s);
    linesIn(tl, $('.copy', s), 0.15);
    $$('.stat', s).forEach((st, k) => fadeUp(tl, st, 0.75 + k * 0.14, 0.3));
    out(tl, $('.sec-body', s), 1.92, 0.36);
  }
  // act 4 8.4–12.2: four beats; hidden hazards turn red 8.8–9.8, the measured 34 ring up 10.3–10.8
  {
    const s = sec('act4'), tl = sectionTimeline(8.4, 12.2);
    const [a, b, c, d] = ['a', 'b', 'c', 'd'].map((k) => $(`.beat-${k}`, s));
    show(tl, s);
    linesIn(tl, $('.act', s), 0.05);
    linesIn(tl, a, 0.1);
    out(tl, a, 0.85, 0.25);
    tl.fromTo(b, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.02 }, 1.05);
    linesIn(tl, b, 1.1);
    out(tl, b, 1.72, 0.22);
    tl.fromTo(c, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.02 }, 1.92);
    linesIn(tl, c, 1.95);
    tl.fromTo(d, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.02 }, 2.45);
    linesIn(tl, d, 2.5);
    out(tl, $('.sec-body', s), 3.23, 0.45);
  }
  // launch 11.9–13.5: holds; it leaves with the finale layer
  {
    const s = sec('launch'), tl = sectionTimeline(11.9, 13.5);
    show(tl, s);
    linesIn(tl, s, 0.15);
    fadeUp(tl, $('.launch-cta', s), 0.4, 0.3);
  }
  // credits 13.5–14.9: the finale layer slides up, names arrive one by one
  {
    const finale = $('.finale'), cr = sec('credits'), tl = sectionTimeline(13.5, TOTAL);
    // bring the credits' bottom edge 32px above the bottom of the screen
    tl.to(finale, { y: () => -(cr.offsetHeight + 32), duration: 0.65, ease: 'power2.inOut' }, 0);
    // the launch block leaves as the card arrives; the card has its own launch button
    tl.to($('.sec-body', sec('launch')), { autoAlpha: 0, duration: 0.35 }, 0.05);
    tl.fromTo(cr, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, 0.1);
    $$('.name', cr).forEach((n, k) => fadeUp(tl, n, 0.3 + k * 0.12, 0.2));
    $$('.chips', cr).forEach((c, k) => fadeUp(tl, c, 0.7 + k * 0.08, 0.2));
    fadeUp(tl, $('.credits-foot', cr), 0.9, 0.2);
  }
}

export default function ScrollIntro({ onLaunch, onSettled, onSkip }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const labelsRef = useRef(null);
  const scrollerRef = useRef(null);
  const stageRef = useRef(null);
  const countRef = useRef(null);
  const scrimRef = useRef(null);
  const launchRef = useRef(null);   // filled by the effect: () => void
  const [metrics, setMetrics] = useState(null);
  const [launched, setLaunched] = useState(false);
  const [reduced] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);

  // keep the latest callbacks without re-running the setup effect
  const cb = useRef({ onLaunch, onSettled });
  cb.current = { onLaunch, onSettled };

  useLayoutEffect(() => {
    const scene = createIntroScene(canvasRef.current, labelsRef.current);
    const M = { s: reduced ? SETTLE_S : 0 };
    let neos = 0, lastCount = -1, alive = true;

    Promise.all([getMetrics(), getAsteroids()]).then(([m, a]) => {
      if (!alive) return;
      scene.setData(a, m);
      neos = m?.counts?.neos_used ?? 0;
      lastCount = -1;
      setMetrics(m);
      if (reduced) scene.render(M.s, 0);
    }).catch(() => { /* the app shows its own error; the intro still plays without dots */ });

    // ---- reduced motion: normal document flow, a still frame, sections fade in when seen ----
    if (reduced) {
      scene.render(M.s, 0);
      const onResize = () => { scene.resize(); scene.render(M.s, 0); };
      window.addEventListener('resize', onResize);
      const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.2 });
      stageRef.current.querySelectorAll('.sec').forEach((el) => io.observe(el));
      launchRef.current = () => { cb.current.onLaunch(); cb.current.onSettled(); };
      return () => {
        alive = false;
        io.disconnect();
        window.removeEventListener('resize', onResize);
        scene.dispose();
      };
    }

    // ---- full version ----
    const setHeight = () => { scrollerRef.current.style.height = (TOTAL + 1) * window.innerHeight + 'px'; };
    setHeight();

    const lenis = new Lenis({ autoRaf: false, lerp: 0.09 });
    lenis.on('scroll', ScrollTrigger.update);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({ trigger: stageRef.current, start: 0, end: () => TOTAL * window.innerHeight, pin: true, pinSpacing: false });
      const master = gsap.fromTo(M, { s: 0 }, {
        s: TOTAL, ease: 'none',
        scrollTrigger: { start: 0, end: () => TOTAL * window.innerHeight, scrub: 1, invalidateOnRefresh: true },
      });
      buildSections(stageRef.current);

      // hero arrives on load (not scrubbed)
      gsap.fromTo(stageRef.current.querySelectorAll('[data-sec="hero"] .line-inner'),
        { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.2 });

      launchRef.current = () => {
        cb.current.onLaunch();
        master.scrollTrigger?.kill();
        master.kill();
        lenis.stop();
        gsap.to(M, {
          s: Math.max(M.s, SETTLE_S), duration: 0.7, ease: 'power2.inOut',
          onComplete: () => cb.current.onSettled(),
        });
      };
    }, rootRef.current);

    const tick = (t) => {
      lenis.raf(t * 1000);
      scene.render(M.s, t);
      const c = Math.round(TRACKS.count(M.s) * neos);
      if (c !== lastCount && countRef.current) { countRef.current.textContent = fmt(c); lastCount = c; }
      if (scrimRef.current) scrimRef.current.style.opacity = TRACKS.shift(M.s).toFixed(3);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => { setHeight(); scene.resize(); };
    window.addEventListener('resize', onResize);
    ScrollTrigger.addEventListener('refreshInit', setHeight);
    ScrollTrigger.refresh();

    return () => {
      alive = false;
      window.removeEventListener('resize', onResize);
      ScrollTrigger.removeEventListener('refreshInit', setHeight);
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      ctx.revert();
      lenis.destroy();
      scene.dispose();
    };
  }, [reduced]);

  const launch = () => {
    if (launched) return;
    setLaunched(true);
    launchRef.current?.();
  };

  const m = metrics;
  const tree = treeSplits(m?.tree_rules);
  const pct = m ? Math.round(m.counts.pha_rate * 100) : null;
  const per100 = m ? Math.round(m.B.recall * 100) : null;
  const hh = m?.hidden_hazards;

  const launchCta = (
    <button type="button" className="launch-btn" onClick={launch} disabled={launched}>
      Watch the AI learn
    </button>
  );

  return (
    <div ref={rootRef} className={'intro' + (reduced ? ' reduced' : '') + (launched ? ' launched' : '')}>
      <canvas ref={canvasRef} className="intro-canvas" aria-hidden="true" />
      <div ref={scrimRef} className="intro-scrim" aria-hidden="true" />
      <div ref={labelsRef} className="intro-labels" aria-hidden="true" />
      <button type="button" className="intro-skip" onClick={onSkip}>Skip intro</button>

      <div ref={scrollerRef} className="intro-scroll">
        <div ref={stageRef} className="intro-stage">

          <section className="sec sec-hero" data-sec="hero">
            <div className="sec-body">
              <p className="kicker"><L>DATATHON 2026 · Problem 2</L></p>
              <h1 className="hero-title"><L>Is it coming</L><L>for us?</L></h1>
              <p className="hero-sub"><L>We taught a machine to spot the asteroids worth worrying about.</L></p>
            </div>
            <div className="scroll-cue" aria-hidden="true"><span>Scroll</span><i /></div>
          </section>

          <section className="sec sec-scale" data-sec="scale">
            <div className="sec-body">
              <div className="beat-count">
                <p className="big-num"><L><span ref={countRef}>{reduced ? fmt(m?.counts?.neos_used) : '0'}</span></L></p>
                <p className="lede"><L>near-Earth asteroids in our data.</L></p>
              </div>
              <div className="beat-rate">
                <p className="lede strong"><L>About {pct ?? '—'} percent are officially</L><L><em className="hot">potentially hazardous.</em></L></p>
              </div>
            </div>
          </section>

          <section className="sec sec-rule side" data-sec="rule">
            <div className="sec-body">
              <h2 className="rule-head"><L>How does NASA decide?</L></h2>
              <div className="figs">
                <div className="fig">
                  <p className="fig-num"><L>0.05 AU</L></p>
                  <i className="fig-rule" />
                  <p className="fig-text"><L>Its orbit passes within 7.5 million km of Earth’s,</L><L>about 19 times the distance to the Moon.</L></p>
                </div>
                <div className="fig">
                  <p className="fig-num"><L>140 m</L></p>
                  <i className="fig-rule" />
                  <p className="fig-text"><L>It’s at least 140 m across. Most have never been</L><L>measured, so NASA goes by brightness: H ≤ 22.</L></p>
                </div>
              </div>
              <p className="rule-end"><L>That’s the whole definition.</L></p>
            </div>
          </section>

          <section className="sec sec-act1 side" data-sec="act1">
            <div className="sec-body two-col">
              <div className="copy">
                <p className="act"><L>Act 1</L></p>
                <h2><L>We gave a model {fmt(m?.counts?.train)} asteroids</L><L>and NASA’s labels.</L></h2>
                <p className="lede"><L>It worked out the rule on its own.</L></p>
              </div>
              <div className="tree-wrap">
                <div className="tree">
                  <div className="node"><b>H ≤ {tree.h}</b><span>bright, so probably 140 m or more</span></div>
                  <i className="conn" />
                  <div className="node"><b>MOID ≤ {tree.moid} AU</b><span>orbit passes close to Earth’s</span></div>
                  <i className="conn" />
                  <div className="node leaf"><b>Hazardous</b></div>
                </div>
                <p className="tree-caption"><L>NASA’s definition: MOID ≤ 0.05 AU and H ≤ 22.</L><L>Nobody told it.</L></p>
              </div>
            </div>
          </section>

          <section className="sec sec-act2 side" data-sec="act2">
            <div className="sec-body">
              <div className="copy">
                <p className="act"><L>Act 2</L></p>
                <h2><L>Then we took away</L><L>the answer key.</L></h2>
                <p className="lede"><L>No MOID, no brightness.</L><L>Only the shape of each orbit.</L></p>
              </div>
              <dl className="stats">
                <div className="stat"><dt>ROC AUC</dt><dd>{m ? m.B.roc_auc.toFixed(3) : '—'}</dd></div>
                <div className="stat"><dt>Hazards caught</dt><dd>{per100 ?? '—'} <small>of every 100</small></dd></div>
                <div className="stat"><dt>Tested on</dt><dd>{fmt(m?.counts?.test)} <small>asteroids it never saw</small></dd></div>
              </dl>
            </div>
          </section>

          <section className="sec sec-act4 side" data-sec="act4">
            <div className="sec-body">
              <p className="act"><L>Act 4 · Hidden hazards</L></p>
              <div className="beats">
                <div className="beat beat-a">
                  <h2><L>NASA judges size</L><L>by brightness.</L></h2>
                  <p className="lede"><L>But a dark asteroid can be big</L><L>and still look faint.</L></p>
                </div>
                <div className="beat beat-b">
                  <p className="big-num hot"><L>{fmt(hh?.count)}</L></p>
                  <p className="lede"><L>near-Earth asteroids our model sizes at 140 m</L><L>or more, yet too faint to count as hazardous.</L></p>
                </div>
                <div className="beat beat-c">
                  <p className="big-num hot"><L>{fmt(hh?.measured)}</L></p>
                  <p className="lede"><L>of them were already measured by NEOWISE</L><L>at 140 m or more.</L></p>
                  <div className="beat-d">
                    <p className="note"><L>Candidates to watch, not confirmed threats.</L></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="finale">
            <section className="sec sec-launch" data-sec="launch">
              <div className="sec-body">
                <h2 className="launch-title"><L>Now watch it learn.</L></h2>
                <div className="launch-cta">{launchCta}</div>
              </div>
            </section>

            <section className="sec sec-credits" data-sec="credits">
              <div className="credits-card">
                <p className="act">Made by</p>
                <ul className="names">{TEAM.map((n) => <li key={n} className="name">{n}</li>)}</ul>
                {STACK.map((row, k) => (
                  <ul key={k} className="chips">{row.map((t) => <li key={t}>{t}</li>)}</ul>
                ))}
                <div className="credits-foot">
                  <p>Data: NASA/JPL Small-Body Database and close-approach data.</p>
                  <p>Built for DATATHON 2026, Problem 2: Teach a Machine to See Space.</p>
                  <p className="links">
                    <a href={REPO_URL} target="_blank" rel="noreferrer">GitHub repo</a>
                    <span>Demo video: coming soon</span>
                  </p>
                  {launchCta}
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
