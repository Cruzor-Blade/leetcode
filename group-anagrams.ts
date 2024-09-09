function groupAnagrams(strs: string[]):string[][] {
    const grouped = new Map<string, string[]>();

    for (let i=0; i<strs.length; i++) {
        let root = strs[i].split('').sort().join()
        grouped.set(root, (grouped.get(root)||[]).concat(strs[i]));
    };

    return [...grouped.values()];
}