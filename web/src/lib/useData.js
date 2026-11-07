import { useEffect, useState } from 'react';

// Loads the JSON contracts from public/data/ (mock now, P1's real exports later — same shape).
// Paths are relative (no leading slash) so they work on GitHub Pages.
export function useData() {
  const [data, setData] = useState({ asteroids: null, metrics: null, approaches: null, error: null });
  useEffect(() => {
    const get = (f) => fetch(`data/${f}`).then((r) => { if (!r.ok) throw new Error(`${f}: ${r.status}`); return r.json(); });
    Promise.all([get('asteroids.json'), get('metrics.json'), get('approaches.json')])
      .then(([asteroids, metrics, approaches]) => setData({ asteroids, metrics, approaches, error: null }))
      .catch((error) => setData((d) => ({ ...d, error })));
  }, []);
  return data;
}
