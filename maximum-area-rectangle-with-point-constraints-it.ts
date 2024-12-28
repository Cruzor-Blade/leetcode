function maxRectangleArea(points: number[][]): number {
  let maxArea = -1;

  // Store points in a Set for quick lookup
  const pool = new Set<string>();
  for (let i = 0; i < points.length; i++) {
    pool.add(`${points[i][0]}-${points[i][1]}`);
  }

  // Check if the rectangle is valid, calculate its area, and ensure no other points inside
  const checkValidity = (bl: number[], tr: number[]): number => {
    let br = [tr[0], bl[1]]; // Bottom-right corner
    let tl = [bl[0], tr[1]]; // Top-left corner

    // Check if both calculated corners exist in the pool
    if (!pool.has(`${br[0]}-${br[1]}`) || !pool.has(`${tl[0]}-${tl[1]}`)) {
      return -1; // Not a valid rectangle
    }

    // Check for points inside or on the edges of the rectangle
    for (const [x, y] of points) {
      // Skip the four corners
      if (
        (x === bl[0] && y === bl[1]) || // Bottom-left
        (x === br[0] && y === br[1]) || // Bottom-right
        (x === tr[0] && y === tr[1]) || // Top-right
        (x === tl[0] && y === tl[1])    // Top-left
      ) {
        continue;
      }

      // Check if the point lies inside or on the edges of the rectangle
      if (x >= bl[0] && x <= tr[0] && y >= bl[1] && y <= tr[1]) {
        return -1; // Invalid rectangle due to a point inside
      }
    }

    // Calculate and return the area of the rectangle
    let width = tr[0] - bl[0];
    let height = tr[1] - bl[1];
    return width * height;
  };

  // Iterate through all pairs of points
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      // Points cannot be the same
      if (i === j) continue;

      // Opposite corners should not be aligned horizontally or vertically
      if (points[i][0] === points[j][0] || points[i][1] === points[j][1]) continue;

      // Ensure point[i] is the bottom-left corner and point[j] is the top-right corner
      if (points[i][0] > points[j][0] || points[i][1] > points[j][1]) continue;

      let bl = points[i];
      let tr = points[j];

      // Update maxArea if a valid rectangle is found
      maxArea = Math.max(maxArea, checkValidity(bl, tr));
    }
  }

  return maxArea;
};