function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let full = numBottles;
  let empty = 0;
  let res = 0;

  while (full != 0) {
      res += full;
      empty += full;
      full = 0;

      while (empty >= numExchange) {
          empty -= numExchange;
          full += 1;
          numExchange += 1;
      }

  }

  return res;
};