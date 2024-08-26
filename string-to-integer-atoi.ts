function myAtoi(s: string): number {
    s = s.trimStart();
    
    if (s.length === 0) return 0;
    
    let sign = 1;
    let i = 0;
    let result = 0;

    if (s[0] === '-' || s[0] === '+') {
        sign = s[0] === '-' ? -1 : 1;
        i++;
    }
    
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + Number(s[i]);
        i++;
    }

    result *= sign;

    const intMin = -(2 ** 31);
    const intMax = 2 ** 31 - 1;
    if (result < intMin) return intMin;
    if (result > intMax) return intMax;

    return result;
}