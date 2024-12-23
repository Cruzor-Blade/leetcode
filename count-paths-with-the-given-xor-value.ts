function countPathsWithXorValue(grid: number[][], k: number): number {
  const ROWS = grid.length, COLS = grid[0].length;
  const cache = new Map<string, number>();

  const dfs = (r: number, c: number, acc: number): number => {
    // Out of bounds check
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS) return 0;

    // Compute current XOR value
    const current = acc ^ grid[r][c];

    // Check if we're at the bottom-right corner
    if (r === ROWS - 1 && c === COLS - 1) return current === k ? 1 : 0;

    // Use a cache to avoid redundant calculations
    const cacheKey = `${r}-${c}-${current}`;
    if (cache.has(cacheKey)) return cache.get(cacheKey)!;

    // Explore both possible directions (right and down)
    const result = (dfs(r + 1, c, current) + dfs(r, c + 1, current)) % (10 ** 9 + 7);
    cache.set(cacheKey, result);
    
    return result;
  };

  return dfs(0, 0, 0);
};