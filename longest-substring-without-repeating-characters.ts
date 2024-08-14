function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  const set = new Set();

  for (const charIndex in [...s]) {
    for (const subChar of s.slice(Number(charIndex))) {
      if (set.has(subChar)) {
        set.clear();
        break;
      } else {
        set.add(subChar);
      }
      if (set.size > length) length = set.size;
    }
  }
  return length;
};
