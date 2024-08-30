function search(nums: number[], target: number): number {
    let left = 0, right = nums.length-1;  
    let mid:number;

    while (left <right) {
        mid=Math.floor((right+left)/2);

        if(nums[mid]===target) {
            return mid;
        } else if(nums[mid]>target) {
            right=mid-1;
        } else {
            left=mid+1;
        }
    };

    return -1;
};