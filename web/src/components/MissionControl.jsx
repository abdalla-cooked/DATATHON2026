// P3 owns this file. Mission Control Live: narration mute button + live subtitles (PLAN.md §8 step N4).
// Narration starts ON: clicking an asteroid is a user gesture, so the browser lets it speak.
import { useEffect, useState } from 'react';
import { isOn, onCaption, playAct, setOn } from '../lib/narration.js';
import './MissionControl.css';

export default function MissionControl() {
  const [enabled, setEnabled] = useState(isOn());
  const [line, setLine] = useState(null);
  useEffect(() => onCaption(setLine), []);

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
      {line && (
        <div className={`mc-caption ${line.who.toLowerCase()}`} role="status" aria-live="polite">
          <b>{line.who === 'CAPCOM' ? '🎙️ CAPCOM' : '😱 INTERN'}</b> {line.text}
        </div>
      )}
    </>
  );
}
