import { useEffect, useState } from 'react';
import { getApproaches, getAsteroids, getMetrics } from './dataCache.js';

// Loads the JSON contracts from public/data/ through the shared cache (lib/dataCache.js),
// so files the intro already fetched are not downloaded twice.
export function useData() {
  const [data, setData] = useState({ asteroids: null, metrics: null, approaches: null, error: null });
  useEffect(() => {
    let live = true;
    Promise.all([getAsteroids(), getMetrics(), getApproaches()])
      .then(([asteroids, metrics, approaches]) => live && setData({ asteroids, metrics, approaches, error: null }))
      .catch((error) => live && setData((d) => ({ ...d, error })));
    return () => { live = false; };
  }, []);
  return data;
}
