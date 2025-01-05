function isCircularSentence(sentence: string): boolean {
  // plan: since we know a sentence has words separated by a single space, and that there
  // is no leading or trailing spaces, we can iterate on every character and check only the character coming just before and after every space. We can also check the first and last characters prematurely

  if (sentence[0] != sentence[sentence.length - 1]) return false;

  for (let i = 0; i < sentence.length; i ++) {
    if(sentence[i] === ' ' && sentence[i - 1] !== sentence[i + 1]) return false;
  };

  return true;
};