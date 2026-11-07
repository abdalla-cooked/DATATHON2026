// One fetch per JSON file for the whole page. The intro starts these on mount so the
// live app finds everything already downloaded when it opens.
// Paths are relative (no leading slash) so they work on GitHub Pages.
const cache = {};

export function getData(file) {
  if (!cache[file]) {
    cache[file] = fetch(`data/${file}`).then((r) => {
      if (!r.ok) throw new Error(`${file}: ${r.status}`);
      return r.json();
    });
    cache[file].catch(() => { delete cache[file]; }); // let a later call retry after a failure
  }
  return cache[file];
}

export const getMetrics = () => getData('metrics.json');
export const getAsteroids = () => getData('asteroids.json');
export const getApproaches = () => getData('approaches.json');

export function preloadAll() {
  return Promise.allSettled([getMetrics(), getAsteroids(), getApproaches()]);
}
