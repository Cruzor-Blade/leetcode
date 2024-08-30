function minSubArrayLen(target: number, nums: number[]): number {
    let left=0, right=0;
    let current = nums[0];
    let minLen=Infinity;

    while (left <= right && right<nums.length) {
        if(current<target) {
            right+=1;
            current += nums[right];
        } else {
            minLen = Math.min(minLen, right-left+1);
            current -= nums[left]
            left+=1;
        }
    }  

    return minLen===Infinity?0:minLen;
};