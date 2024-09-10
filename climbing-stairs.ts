function climbStairs(n: number): number {
    let result = 0;

    if(n < 3) return n;
    
    let acc1 = 1; // 1 step
    let acc2 = 2; // 2 steps

    for (let i = n - 3; i >= 0; i--) {
        result = acc1 + acc2;
        acc1 = acc2;
        acc2 = result;
    };

    return result;
};