// P3 owns this file. Mission Control Live: narration mute button + live subtitles (PLAN.md §8 step N4).
// Narration starts ON: clicking an asteroid is a user gesture, so the browser lets it speak.
import { useEffect, useState } from 'react';
import { getRate, isOn, onCaption, playAct, setOn, setRate, SPEEDS } from '../lib/narration.js';
import './MissionControl.css';

export default function MissionControl() {
  const [enabled, setEnabled] = useState(isOn());
  const [line, setLine] = useState(null);
  const [rate, setRateState] = useState(getRate());
  useEffect(() => onCaption(setLine), []);

  // Speed button: cycles 0.5x -> 0.75x -> 1x -> 1.25x -> 1.5x -> 2x -> back to 0.5x
  const cycleSpeed = () => {
    const next = SPEEDS[(SPEEDS.indexOf(rate) + 1) % SPEEDS.length];
    setRateState(next);
    setRate(next);
  };

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    setOn(next);
    if (next) playAct('intro');
  };

  return (
    <>
      <button type="button" className={`mc-toggle${enabled ? ' on' : ''}`} aria-pressed={enabled} onClick={toggle}
              title={enabled ? 'Mute the commentators' : 'Turn the commentators back on'}>
        {enabled ? '🔊 Mission Control Live' : '🔇 Mission Control Live'}
      </button>
      <button type="button" className={`mc-toggle mc-speed${rate !== 1 ? ' on' : ''}`} onClick={cycleSpeed}
              aria-label={`Narration speed ${rate}x. Click to change.`} title="Narration speed (click to change)">
        ⏩ {rate}×
      </button>
      {line && (
        <div className={`mc-caption ${line.who.toLowerCase()}${line.hero ? ' hero' : ''}`} role="status" aria-live="polite">
          <b>{line.hero ? '🦸 INTERN' : { CAPCOM: '🎙️ CAPCOM', INTERN: '😱 INTERN', RADIO: '📡', ALERT: '🚨' }[line.who] ?? line.who}</b> {line.text}
        </div>
      )}
    </>
  );
}
