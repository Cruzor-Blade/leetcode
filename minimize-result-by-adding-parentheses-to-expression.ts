function minimizeResult(expression: string): string {
    const [left, right] = expression.split('+');
    let minExpr = '';
    let minValue = Infinity;

    // Iterate through all possible positions to place parentheses
    for (let i = 0; i < left.length; i++) {
        for (let j = 1; j <= right.length; j++) {
            // Generate the expression with parentheses and explicit multiplication
            const num1 = i > 0 ? left.substring(0, i) : ''; // Part before left parentheses, if any
            const num2 = left.substring(i); // Part within left parentheses
            const num3 = right.substring(0, j); // Part within right parentheses
            const num4 = j < right.length ? right.substring(j) : ''; // Part after right parentheses, if any

            // Constructing the expression with explicit multiplication where needed
            const expr = `${num1 ? num1 + '*' : ''}(${num2}+${num3})${num4 ? '*' + num4 : ''}`;
            const value = eval(expr); // Evaluate the expression

            if (value < minValue) {
                minValue = value;
                minExpr = `${num1}(${num2}+${num3})${num4}`;
            }
        }
    }

    return minExpr;
};
