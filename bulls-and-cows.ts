/**
** # Plan: Count the frequencies of the characters in the friends guess.
** This solution will be a two pass solution. For the first pass, determine the bulls.
** all the characters that matches in position and values will be counted as bulls.
** for the second pass, for each character we see, we check if it is in the friends guess and if
** it is not already a bull, and count it
*/

function getHint(secret: string, guess: string): string {
  let bulls = 0;
  let cows = 0;
  const chars = new Map();

  for (let i = 0; i < secret.length; i ++) {
      if(secret[i] === guess[i]) {
          bulls += 1;

      } else { // count only the characters that are not already bulls
          chars.set(guess[i], (chars.get(guess[i]) || 0) + 1);
      }
  };

  for (let i = 0; i < secret.length; i ++ ) {
      // for each character in the secret, check if is not already a bull, then:
      if (secret[i] != guess[i] && chars.get(secret[i])) {
          // if there was already another non bull character in the guess that matches
          // the secret character but was not a bull, count it as a cow, and remove it from
          // the frequencies
          cows += 1;
          chars.set(secret[i], chars.get(secret[i]) - 1);
      }
  }

  return `${bulls}A${cows}B`;
};