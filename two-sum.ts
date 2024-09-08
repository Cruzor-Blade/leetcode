function twoSum(nums: number[], target: number): number[] {
    const numSet = new Map<number, number>();
    
    for (let i=0; i<nums.length; i++) {
        numSet.set(nums[i], i)
    }

    for (let i=0; i<nums.length; i++) {
        let index = numSet.get(target - nums[i]);
        if(index !=undefined && index !=i) {
            return [i, index];
        }
    }

    return [] //typescript compliance
};