// P3 owns this file.
export default function Legend() {
  return (
    <div id="legend">
      🔵 safe → 🔴 hazardous · <span className="mag">■</span> missed hazard · <span className="yel">■</span> false alarm · <span className="lime">■</span> hidden hazard
    </div>
  );
}
