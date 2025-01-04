function findGCD(nums: number[]): number {
  let sm = Math.min(...nums);
  let lg = Math.max(...nums);

  while (sm != 0) {
      let temp = sm;
      sm = lg % sm
      lg = temp;
  };

  return lg;
};