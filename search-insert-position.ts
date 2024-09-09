function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    let middle: number;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            return middle;
        }
    }

    return left;
};
