function numWaterBottles(numBottles: number, numExchange: number): number {
  let empty = numBottles;
  let res = numBottles;

  while (empty >= numExchange) {
      let drinks = Math.floor(empty / numExchange);
      empty %= numExchange;
      empty += drinks;
      res += drinks;
  };

  return res;
};