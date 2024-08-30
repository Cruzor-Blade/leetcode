function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const seen = new Map();
    
    for (let i=0; i<nums.length; i++) {
        if(!seen.has(nums[i])) {
            seen.set(nums[i], i);
            continue;
        }

        const lastIndex = seen.get(nums[i]);
        if(Math.abs(i-lastIndex)<=k) {
            return true;
        } else {
            seen.set(nums[i], i);
        };

    };

    return false;
};