function singleNumber(nums: number[]): number {
    let ones = 0, twos = 0;

    for (let i = 0; i < nums.length; i++) {
        // First, update `ones` with bits that have appeared once (and not in `twos`)
        ones = (ones ^ nums[i]) & ~twos;

        // Then, update `twos` with bits that have appeared twice (and not in `ones`)
        twos = (twos ^ nums[i]) & ~ones;
    }

    return ones; // `ones` will hold the bits of the number that appears only once
    // `twos` will be zero because all bits that have appeared twice (through the process
    // of numbers appearing three times) will have been cleared out by the bitwise operations.
}