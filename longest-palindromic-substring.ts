function longestPalindrome(s: string): string {
    let longest = s[0];

    // Expand around the center
    const expandAroundCenter = (left: number, right: number) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    };

    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        const oddPalindrome = expandAroundCenter(i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Even length palindromes
        const evenPalindrome = expandAroundCenter(i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

// Test cases
console.assert(longestPalindrome("babad") === "bab" || longestPalindrome("babad") === "aba", "Test case 1 failed");
console.assert(longestPalindrome("cbbd") === "bb", "Test case 2 failed");
