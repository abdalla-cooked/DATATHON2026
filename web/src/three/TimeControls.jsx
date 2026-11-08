// P2 owns this file. Time slider for the 3D scene: drag through 2000–2050, or press play.
// It talks to SolarSystem through `time` (a shared mutable ref, so the animation loop never waits on React):
//   time.jd       current Julian Date shown in the scene
//   time.playing  whether the clock runs
//   time.speed    simulated days per real second
//   time.dirty    set to true to make the scene recompute positions
//   time.onTick   the scene calls this with the new jd while playing
import { useEffect, useState } from 'react';
import { MIN_JD, MAX_JD, dateFromJd, jdFromDate } from './time.js';
import './TimeControls.css';

const SPEEDS = [
  { label: '1 day/s', days: 1 },
  { label: '1 week/s', days: 7 },
  { label: '1 month/s', days: 30 },
  { label: '1 year/s', days: 365.25 },
];
const fmt = (jd) => dateFromJd(jd).toISOString().slice(0, 10);

export default function TimeControls({ time }) {
  const t = time.current;
  const [jd, setJd] = useState(t.jd);
  const [playing, setPlaying] = useState(t.playing);
  const [speed, setSpeed] = useState(t.speed);

  useEffect(() => {
    t.onTick = (newJd, stillPlaying) => { setJd(newJd); setPlaying(stillPlaying); }; // also picks up the scene's auto-start
    return () => { t.onTick = null; };
  }, [t]);

  const seek = (value) => { t.jd = value; t.dirty = true; setJd(value); };
  const togglePlay = () => {
    if (!t.playing && t.jd >= MAX_JD) seek(MIN_JD); // at the end → restart from the beginning
    t.playing = !t.playing; setPlaying(t.playing);
  };
  const changeSpeed = (days) => { t.speed = days; setSpeed(days); };

  return (
    <div className="time-controls" role="group" aria-label="Time">
      <button type="button" className="tc-play" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
        {playing ? '❚❚' : '▶'}
      </button>
      <label className="tc-date" htmlFor="tc-slider">{fmt(jd)}</label>
      <input
        id="tc-slider" type="range" min={MIN_JD} max={MAX_JD} step={1} value={jd}
        onChange={(e) => seek(Number(e.target.value))}
      />
      <select id="tc-speed" value={speed} onChange={(e) => changeSpeed(Number(e.target.value))} aria-label="Speed">
        {SPEEDS.map((s) => <option key={s.days} value={s.days}>{s.label}</option>)}
      </select>
      <button type="button" className="tc-today" onClick={() => seek(jdFromDate(new Date()))}>Today</button>
    </div>
  );
}
