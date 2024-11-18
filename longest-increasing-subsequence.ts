function lengthOfLIS(nums: number[]): number {
  let res = 0;
  const cache = {};

  const dfs = (index: number):number => {
      if(index in cache) return cache[index];
      
      let longest = 1
      for (let i = index + 1; i < nums.length; i ++) {
          if(nums[i] > nums[index]) {
              longest = Math.max(longest, 1 + dfs(i));
          }
      };
      cache[index] = longest;
      return cache[index];
  };

  for (let i = 0; i < nums.length; i ++) {
      res = Math.max(res, dfs(i));
  };

  return res;
};