function checkValidCuts(n: number, rectangles: number[][]): boolean {
  // we will first start by grouping the start_axis and end axis together.
  // then, sort them in ascending start value to make sure we are visiting in ascending order
  // now, for each start value (except the first one) and end value (except the last one), we will determine
  // if it is possible to get such a region.
  // to ease the determination process, we will merge the rectangles intersecting following each axis.
  
  const xAxis: number[][] = [];
  const yAxis: number[][] = [];

  for (let i = 0; i < rectangles.length; i ++) {
    xAxis.push([rectangles[i][0], rectangles[i][2]]);
    yAxis.push([rectangles[i][1], rectangles[i][3]]);
  };

  // sort according to their starting values
  xAxis.sort((a, b) => a[0] - b[0]);
  yAxis.sort((a, b) => a[0] - b[0]);

  const newXAxis: number[][] = [xAxis[0]];
  const newYAxis: number[][] = [yAxis[0]];

  // intersecting towards x axis
  for (let i = 1; i < xAxis.length; i ++) {
    // strictly superior
    if(newXAxis[newXAxis.length - 1][1] > xAxis[i][0]) { // if the previous interval finishes after the current interval has started
      newXAxis[newXAxis.length - 1][1] = Math.max(newXAxis[newXAxis.length - 1][1], xAxis[i][1]);
    } else {
      newXAxis.push(xAxis[i]);
    }
  };

  // intersecting towards y axis
  for (let j = 1; j < yAxis.length; j ++) {
    if(newYAxis[newYAxis.length - 1][1] > yAxis[j][0]) {
      newYAxis[newYAxis.length - 1][1] = Math.max(newYAxis[newYAxis.length - 1][1], yAxis[j][1]);
    } else {
      newYAxis.push(yAxis[j]);
    }
  };

  return (newXAxis.length >= 3 || newYAxis.length >= 3);
};