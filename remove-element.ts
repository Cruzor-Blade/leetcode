function removeElement(nums: number[], val: number): number {
    let shift = 0;
    
    for (let i=0; i<nums.length; i++) {
        if(nums[i] === val) {
            shift += 1;
        } else {
            nums[i-shift] = nums[i];
        };
    };

    return nums.length-shift;
};