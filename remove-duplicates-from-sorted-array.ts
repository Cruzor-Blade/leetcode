function removeDuplicates(nums: number[]): number {
    let shift = 0;
    
    for (let i=1; i<nums.length; i++) {
        if(nums[i] === nums[i-shift-1]) shift += 1;

        nums[i - shift] = nums[i];
    };

    return nums.length - shift;
};