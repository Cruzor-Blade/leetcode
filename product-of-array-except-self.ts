function productExceptSelf(nums: number[]): number[] {
    let result = [1]; // we initialize to `1` because `1` is the neutral element for multiplication
    
    for (let i = 1; i < nums.length; i++) {
        result.push(nums[i - 1] * result[i - 1]);
    };

    let rAcc = 1;

    for (let i = nums.length-2; i >= 0; i--) {
        rAcc *= nums[i + 1];
        result[i] *= rAcc;
    };

    return result;
};