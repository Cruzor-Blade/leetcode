function longestSubstring(s: string, k: number): number {
    if (s.length === 0) return 0;

    let left:number, right:number;
    // Frequency map of characters in the string
    const freq: { [key: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = (freq[s[i]] || 0) + 1;
    }

    // Find the first character that doesn't meet the requirement
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] < k) {
            // Split the string and apply the function recursively
            const left = longestSubstring(s.slice(0, i), k);
            const right = longestSubstring(s.slice(i + 1), k);
            return Math.max(left, right);
        }
    }

    // If every character in the string meets the requirement, return the string's length
    return s.length;
}
