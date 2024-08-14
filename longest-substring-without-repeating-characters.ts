function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  const set = new Set();

  for (let charIndex=0; charIndex<s.length; charIndex++) {
    const subCharLength = s.length-charIndex;
    for (let subCharIndex=0; subCharIndex<subCharLength; subCharIndex++) {
        const subChar = s[charIndex+subCharIndex];
        if(set.has(subChar)) {
            set.clear();
            break;
        } else {
            set.add(subChar);
            length = Math.max(set.size, length);
        }
    }
  }
  return length;
};
