export function findMaxIsland(land: number[][]) {
  let maxIslandSize = 0;
  const visited = new Set<string>();
  const rows = land.length;
  const cols = land[0]?.length ?? 0;

  function exploreIsland(x: number, y: number): number {
    if (
      x < 0 ||
      y < 0 ||
      x >= rows ||
      y >= cols ||
      land[x][y] === 0 ||
      visited.has(`${x},${y}`)
    )
      return 0;
    visited.add(`${x},${y}`);
    return (
      1 +
      exploreIsland(x + 1, y) +
      exploreIsland(x - 1, y) +
      exploreIsland(x, y + 1) +
      exploreIsland(x, y - 1)
    );
  }

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (land[x][y] === 1 && !visited.has(`${x},${y}`)) {
        maxIslandSize = Math.max(maxIslandSize, exploreIsland(x, y));
      }
    }
  }
  return maxIslandSize;
}
