function rangeSum(nums: number[], n: number, left: number, right: number): number {
  const subarraySums:number[] = [];

  for (const numIndex in nums) {
      const subArray = nums.slice(Number(numIndex));
      let numsSum = 0;
      for (const num of subArray) {
          numsSum +=num;
          subarraySums.push(numsSum)
      }
  };
  
  subarraySums.sort((numA, numB) => numA-numB);
  const unmodularizedSum = subarraySums.slice(left-1, right).reduce((numA, numB) => numA+numB);
  return unmodularizedSum %(10**9+7);
};