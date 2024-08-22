function maxPoints(points: number[][]): number {
  const m = points.length, n = points[0].length;
  let dp: number[] = points[0].slice();

  for (let r = 1; r < m; r++) {
      const leftToRight: number[] = new Array(n);
      const rightToLeft: number[] = new Array(n);

      leftToRight[0] = dp[0];
      for (let c = 1; c < n; c++) {
          leftToRight[c] = Math.max(leftToRight[c - 1] - 1, dp[c]);
      }

      rightToLeft[n - 1] = dp[n - 1];
      for (let c = n - 2; c >= 0; c--) {
          rightToLeft[c] = Math.max(rightToLeft[c + 1] - 1, dp[c]);
      }

      for (let c = 0; c < n; c++) {
          dp[c] = points[r][c] + Math.max(leftToRight[c], rightToLeft[c]);
      }
  }

  return Math.max(...dp);
};
