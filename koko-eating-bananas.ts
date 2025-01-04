function minEatingSpeed(piles: number[], h: number): number {
  // plan: determine the minimum integer such that koko can eat all the bananas.
  // the minimum number of bananas she can eat per hour is 1, and the maximum she can
  // eat while realistically eating the slowest possible is max(piles) because any number higher
  // than the maximum would not make any more difference

  let l = 1, r = Math.max(...piles);

  // we will calculate the middle value between the left and the right:
  // - if the middle value allows to finish within h hours, then we will consider its value,  and we will scan left to see if there is a lower and valid speed
  // - if the middle value does not allow to finish within h hours, then we will ignore its value and consider the right sub interval to see if we can find a higher value that satisfies the constraint

  const eat = (speed: number): number => {
    let res = 0;

    for (let i = 0; i < piles.length; i++) {
      res += Math.ceil(piles[i] / speed);
    };

    return res;
  }

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    let duration = eat(mid);
    if (duration <= h) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l;
};