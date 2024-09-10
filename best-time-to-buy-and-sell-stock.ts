function maxProfit(prices: number[]): number {
    let best = 0;
    let localProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        localProfit = Math.max(localProfit + prices[i] - prices[i-1], 0); // holding (cumulating fluctuations) or selling
        best = Math.max(best, localProfit);
    };
    
    return best;
};