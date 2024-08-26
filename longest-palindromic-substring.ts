function longestPalindrome(s: string): string {
    const longest = { length: 0, start: 0 };
  
    const expandAroundCenter = (left: number, right: number) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        const length = right - left + 1;
        if (length > longest.length) {
          longest.start = left;
          longest.length = length;
        }
        left--;
        right++;
      }
    };
  
    for (let middle = 0; middle < s.length; middle++) {
      // Check for odd-length palindromes
      expandAroundCenter(middle, middle);
      // Check for even-length palindromes
      expandAroundCenter(middle, middle + 1);
    }
  
    return s.substring(longest.start, longest.start + longest.length);
};