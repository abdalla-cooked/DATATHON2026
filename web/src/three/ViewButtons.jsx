// P2 owns this file. Camera preset buttons: glide between Earth's neighborhood and the whole solar system.
import { useState } from 'react';
import './ViewButtons.css';

export default function ViewButtons({ views, initial, onView }) {
  const [active, setActive] = useState(initial);
  return (
    <div className="view-buttons" role="group" aria-label="Camera view">
      {Object.entries(views).map(([key, v]) => (
        <button
          key={key} type="button" aria-pressed={active === key} className={active === key ? 'on' : ''}
          onClick={() => { setActive(key); onView(key); }}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}
