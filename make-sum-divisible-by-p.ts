function minSubarray(nums: number[], p: number): number {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  const target = sum % p;
  if (target === 0) return 0; // No need to remove any subarray.

  const recents = new Map<number, number>();
  recents.set(0, -1); // Prefix sum of 0 exists before the array starts.

  let prefix = 0;
  let res = Infinity;

  for (let i = 0; i < nums.length; i++) {
      prefix = (prefix + nums[i]) % p;

      // Calculate the required complement
      const complement = (prefix - target + p) % p;

      if (recents.has(complement)) {
          res = Math.min(res, i - recents.get(complement)!);
      }

      // Update the map with the current prefix sum
      recents.set(prefix, i);
  }

  return res === Infinity || res === nums.length ? -1 : res;
}