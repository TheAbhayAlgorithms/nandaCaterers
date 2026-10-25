/**
 * Deterministic seeded generator for torn-paper SVG path.
 * Ensures consistent output between server and client without hydration mismatch.
 */

function seededRandom(seed: number) {
  let s = Math.sin(seed) * 10000;
  return s - Math.floor(s);
}

export function generateTornPath(variant: number = 0, isTop: boolean = false): string {
  const pointsCount = 48;
  const width = 1200;
  const height = 40;
  const points: { x: number; y: number }[] = [];

  // Base Y position depending on whether edge is at the top or bottom of container
  for (let i = 0; i <= pointsCount; i++) {
    const x = (i / pointsCount) * width;
    // Add controlled jaggedness using deterministic sine-based seed
    const seed = variant * 100 + i * 7.13;
    const offset1 = (seededRandom(seed) - 0.5) * 16;
    const offset2 = Math.sin(i * 0.45 + variant) * 6;
    const y = 20 + offset1 + offset2;
    points.push({ x: Number(x.toFixed(1)), y: Math.max(4, Math.min(36, Number(y.toFixed(1)))) });
  }

  if (!isTop) {
    // Bottom edge cut: fills down into next section
    // Starts at top-left (0,0), traces down to points, then down to bottom-right (1200, 40), then bottom-left (0, 40)
    let d = `M 0,${points[0].y} `;
    for (let i = 1; i < points.length; i++) {
      d += `L ${points[i].x},${points[i].y} `;
    }
    d += `L ${width},${height} L 0,${height} Z`;
    return d;
  } else {
    // Top edge cut: fills up into previous section
    let d = `M 0,0 L ${width},0 L ${width},${points[points.length - 1].y} `;
    for (let i = points.length - 2; i >= 0; i--) {
      d += `L ${points[i].x},${points[i].y} `;
    }
    d += `Z`;
    return d;
  }
}

export const tornVariants = {
  bottom0: generateTornPath(0, false),
  bottom1: generateTornPath(1, false),
  bottom2: generateTornPath(2, false),
  top0: generateTornPath(0, true),
  top1: generateTornPath(1, true),
};
