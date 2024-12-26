function clearStars(s: string): string {
  // Plan: Since we know that for each star (*) character, we are trying to delete the lexicographically smallest character,
  // and also, for each instance of that lexicographically smaller character, we want to delete the one that will lead to a 
  // lower lexicographical value, the intuition is to delete each time the instance at the rightmost index.
  // to have the weakest characters come first and thus, have less weight on the final string.
  
  let map:{[key: string]: number[]} = {};
  for (let i = 0; i < 26; i ++) {
    map[String.fromCharCode('a'.charCodeAt(0) + i)] = [];
  };

  for (let i = 0; i < s.length; i ++) {
    if(s[i] !== '*') {
      map[s[i]].push(i);
    } else {
      for (let i = 0; i < 26; i ++) {
        if (typeof map[String.fromCharCode('a'.charCodeAt(0) + i)].pop() === 'number') {
          break;
        }
      }
    };


  };

  const res = new Array(s.length).fill('');

  for (let char in map) {
    for (let index of map[char]) {
      res[index] = char;
    }
  };

  return  res.join("");
};


console.log(clearStars("abc"))