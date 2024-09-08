function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    if (valueDiff === 0) {
        const map: {[key: number]: number} = {};
        for (let i=0; i < nums.length; i++) {
            if (map[nums[i]] !== undefined) {
                if (Math.abs(map[nums[i]] - i) <= indexDiff) return true;
            }
            map[nums[i]] = i;
        }
        return false;
    }

    for (let i=1; i<nums.length; i++) {

        let j = Math.max(i-indexDiff, 0);
        while (j < i) {
            if(Math.abs(nums[i] - nums[j]) <= valueDiff) return true;
            j++;
        }
    }

    return false;
};