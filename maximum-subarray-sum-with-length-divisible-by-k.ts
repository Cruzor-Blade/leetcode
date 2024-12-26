function maxSubarraySum(nums: number[], k: number) {
  // Plan: For each index, we will determine the maximum subarray sum, ending at that index and so that 
  // the subarray length is divisible by k.
  // For that, for each index, we will determine the smallest prefix sum value so that the length of the 
  // array ending at current - the length of the prefix array is divisible by k. We will use the modulo
  // operator for that purpose

  const prefix = new Array(k).fill(Infinity); // initialize prefix sums to positive infinity
  prefix[0] = 0; // base case for first iteration

  let sum = 0;
  let res = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let mod = (i + 1) % k; // to correctly handle subarrays of length divisible by k
    res = Math.max(res, sum - prefix[mod]);
    // we want to maximize the sum, hence, minimize the prefix sum
    prefix[mod] = Math.min(prefix[mod], sum);
  };

  return res;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5, 6], 4));
