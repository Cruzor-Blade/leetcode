function solveEquation(equation: string): string {
    const parts = equation.match(/([+-]?[0-9]*x?)/g);
    if(parts===null) return 'No solution'; //typescript compliance
    
    let lhsCoeffs=0;
    let rhsCoeffs=0;
    let side:'lhs'|'rhs' = 'lhs';

    for (let i = 0; i <parts.length; i++) {
        // equality sign matched
        if(parts[i]==='') side='rhs';

        const lastChar=parts[i][parts[i].length-1];
        if(lastChar==='x') {
            if(parts[i]==='x'||parts[i]==='+x') parts[i] = '+1x';
            if(parts[i]==='-x') parts[i] = '-1x';

            lhsCoeffs += (side==='lhs'?1:-1)*Number(parts[i].slice(0, -1));
        } else {
            rhsCoeffs += (side==='rhs'?1:-1)*Number(parts[i]);
        };
    };
    
    if(lhsCoeffs===0 && rhsCoeffs===0) return "Infinite solutions";
    if(lhsCoeffs===0) return "No solution"; // rhs could not be zero since we checked earlier for equality

    return "x="+(rhsCoeffs/lhsCoeffs);
};