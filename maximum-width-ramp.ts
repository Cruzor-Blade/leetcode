function maxWidthRamp(nums: number[]): number {
  // array containing the maximum up to each indice, coming from the right
  const maxRight = [nums[nums.length -1]];
  for (let i = nums.length - 2; i >= 0; i -- ) {
      maxRight.unshift(Math.max(nums[i], maxRight[0]));
  }
  
  // array containing the minimum up to each indice, coming from the left
  const minLeft = [nums[0]];
  for (let i = 1; i < nums.length; i ++) {
    minLeft.push(Math.min(minLeft[minLeft.length -1], nums[i]));
  }
  let res = 0;

  for (let j = nums.length - 1; j >= 0; j --) {
    while (minLeft.length != 0 && maxRight[j] >= minLeft[minLeft.length - 1]) {
      if(j < res) return res; // we cannot gat any larger ramp larger starting from j

      let ramp = j - (minLeft.length - 1);
      res = Math.max(res, ramp);
      minLeft.pop();
    }
  }
  return res;
};

console.log(maxWidthRamp([6,0,8,2,1,5]))