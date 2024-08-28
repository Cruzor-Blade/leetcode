function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let mostWater = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentWater = width * currentHeight;

        mostWater = Math.max(mostWater, currentWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return mostWater;
}
