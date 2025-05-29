export function findMaxIsland(land: number[][]) {
  let maxIslandSize = 0;
  const visited = new Set<string>();
  const rows = land.length;
  const cols = land[0]?.length ?? 0;

  function exploreIsland(x: number, y: number): number {
    let size = 0;
    const stack: [number, number][] = [[x, y]];
    while (stack.length) {
      const [cx, cy] = stack.pop()!;
      if (
        cx < 0 ||
        cy < 0 ||
        cx >= rows ||
        cy >= cols ||
        land[cx][cy] === 0 ||
        visited.has(`${cx},${cy}`)
      )
        continue;
      visited.add(`${cx},${cy}`);
      size++;
      stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]);
    }
    return size;
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
