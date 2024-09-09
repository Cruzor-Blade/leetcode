function maxSubArray(nums: number[]): number {
    let max = -Infinity;
    let localMax = 0;
    
    for (let i = 0; i < nums.length; i++) {
        localMax = Math.max(nums[i], localMax+nums[i]);
        max = Math.max(max, localMax);
    };

    return max;
};