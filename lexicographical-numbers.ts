function lexicalOrder(n: number): number[] {
  const res: number[] = [];
  
  const generate = (root: number) => {
    res.push(root);
    let current = root * 10;
    
    for (let i = 0; i <= 9; i ++) {
      if(current + i > n) break;
      generate(current + i);
    }
  };

  for (let i = 1; i <= Math.min(9, n); i ++) {
    generate(i);
  }
  return res;
};

console.log(lexicalOrder(43));