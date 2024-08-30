function maximumTastiness(price: number[], k: number): number {
    price.sort((a, b) => a - b);

    const canAchieveTastiness = (minDiff: number): boolean => {
        let count = 1;
        let lastPicked = price[0];

        for (let i = 1; i < price.length; i++) {
            if (price[i] - lastPicked >= minDiff) {
                count++;
                lastPicked = price[i];
                if (count === k) return true;
            }
        }

        return false;
    };

    let left = 0;
    let right = price[price.length - 1] - price[0];
    let maxTasty = 0;
    let mid:number;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (canAchieveTastiness(mid)) {
            maxTasty = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return maxTasty;
}
