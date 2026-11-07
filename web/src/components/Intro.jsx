// P3. Title card over the scene (PLAN.md section 7 step 8).
export default function Intro({ count, onClose }) {
  return (
    <div id="intro">
      <div className="card">
        <p className="kicker">Sheridan Datathon 2026 · Teach a Machine to See Space</p>
        <h2>{count ? count.toLocaleString() : 'Thousands of'} rocks cross near Earth's orbit. Which ones should we worry about?</h2>
        <p>We trained a model to spot potentially hazardous asteroids from their orbits, tested it on asteroids it never saw,
          and checked it against NASA's record of real close approaches.</p>
        <button id="explore" onClick={onClose}>Explore</button>
      </div>
    </div>
  );
}
