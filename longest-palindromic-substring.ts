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


function longestPalindrome2(s: string): string {
    let longest = s[0]; // s has a length of at least one
    
    //sliding window from indice `left` to indice `right`
    for (let left = 0; left+longest.length <s.length; left++) {
        for (let right = left+longest.length+1; right<=s.length; right++ ) {
            let ssl=Math.floor((left+right)/2), ssr=Math.ceil((left+right)/2);
            let ssIsPalindrome=true;

            // check if the substring from `ssl` to `ssr` indexes if it is a palindrome
            while (ssl>=left && ssr<=right) {
                if(s[ssl] != s[ssr-1]) {
                    ssIsPalindrome=false;
                    break;
                };
                ssl--, ssr++;
            };

            if(ssIsPalindrome) {
                // the inner `for` loop garantees that the current substring is longer than `longest`
                longest = s.slice(left, right);
            }
        };
    };

    return longest;
};

// Test cases
console.assert(longestPalindrome2("babad") === "bab" || longestPalindrome("babad") === "aba", "Test case 1 failed");
console.assert(longestPalindrome2("cbbd") === "bb", "Test case 2 failed");
