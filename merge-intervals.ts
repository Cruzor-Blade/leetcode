function merge(intervals: number[][]): number[][] {
    if (intervals.length === 1) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    let result: number[][] = [intervals[0]];
    let lastIndex = 0;

    for (let i = 1; i < intervals.length; i++) {
        if(result[lastIndex][1] < intervals[i][0]) {
            result.push(intervals[i]);
            lastIndex ++;
        } else {
            result[lastIndex][1] = Math.max(result[lastIndex][1], intervals[i][1]);
        };
    }

    return result;
};