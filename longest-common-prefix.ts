function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];

    let base = strs[0];
    let span = 0;

    for (let i = 0; i < base.length; i++) {
        let match = 0;

        for (let j = 1; j < strs.length; j++) {
            if(base[i] != strs[j][i]) return base.substring(0, span);
            match+=1;
        };

        if(match===strs.length-1) span++;
    };

    return base.substring(0, span);
};