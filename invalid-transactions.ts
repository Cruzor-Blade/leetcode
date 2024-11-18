function invalidTransactions(transactions: string[]): string[] {
  const invalid:string[] = [];
  let added = new Set();

  for (let i = 0; i < transactions.length; i ++) {
      let [name1, time1, amount1, city1] = transactions[i].split(',');
      if(Number(amount1) > 1000 && !added.has(i)) {
          added.add(i);
          invalid.push(transactions[i]);
      };
      
      for (let j = i + 1; j < transactions.length; j ++) {
          let [name2, time2, amount2, city2] = transactions[j].split(',');
          
          if(name1 === name2 && city1 !== city2 && Math.abs(Number(time1) - Number(time2)) <= 60) {
              if(!added.has(i)) {
                  added.add(i);
                  invalid.push(transactions[i]);
              };
              if(!added.has(j)) {
                  added.add(j);
                  invalid.push(transactions[j]);
              }
          } else if(Number(amount2) > 1000 && !added.has(j)) {
              added.add(j);
              invalid.push(transactions[j]);
          };
      }
  };

  return invalid;
};