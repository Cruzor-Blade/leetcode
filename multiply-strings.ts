function multiply(num1: string, num2: string): string {
    const m = num1.length, n = num2.length;
    const results = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const product = parseInt(num1[i]) * parseInt(num2[j]);

            results[i + j + 1] += product;
            results[i + j] += Math.floor(results[i + j + 1] / 10);
            results[i + j + 1] %= 10;
        }
    };

    let result = '';
    for (let r = 0; r < m + n; r++) {
        // ignore leading zeroes
        if (result.length === 0 && results[r] === 0) continue;
        result += results[r];
    };

    //set result as zero, in case all leading digits were zeroes
    if(result.length===0) result+=0;
    
    return result;
};