function maxDistinctElements(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const distinct = new Set();
  let prev = nums[0] - k; // we allow the biggest distance for the first number
  distinct.add(prev);
  
  for (let i = 1; i < nums.length; i ++) {
    console.log('Prev: ', prev)
    if(prev < nums[i] - k) {
      prev = nums[i] - k;
      distinct.add(prev);
    } else {
      prev = Math.max(Math.min(prev + 1, nums[i] + k), nums[i] - k);
      distinct.add(prev);
    }
  };

  return distinct.size
};

console.log(maxDistinctElements([7, 10, 10], 2));