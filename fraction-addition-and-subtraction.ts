// plan: We will add the two first fractions, and then repeat the operation
// with a new string composed of the current result, and the rest of fractions
function fractionAddition(expression: string): string {
    
    // fractions.rest may include a "+" as its first character.
    // we use the loop to separate x'numerator, x'denominator;
    // y'numerator, y'denominator

    const fractions = {xn:"", xd:"", yn:"", yd:"", op:'', rest:""};
    let current:keyof typeof fractions ="xn"
    
    for (let i = 0; i<expression.length; i++) {
        if((expression[i]==='+'||expression[i]==='-') && i !=0) {
            if(current==='xd') {
                fractions.op=expression[i];
                current='yn';
                continue;
            };

            if(current==='yd') current='rest';
        };

        if(expression[i]==='/' && current!='rest') {
            if(current==='xn') current='xd';
            if(current==='yn') current='yd';
            continue;
        };

        fractions[current] +=expression[i];
    };

    if(fractions.yn==="") return fractions.xn+'/'+fractions.xd;

    const xn = parseInt(fractions.xn), xd = Number(fractions.xd);
    const yn = parseInt(fractions.yn), yd = Number(fractions.yd);

    // determine the (unreduced) numerator and denominator of the operation result
    let xOPyn = fractions.op==='+'? (xn*yd + yn*xd) : (xn*yd - yn*xd);
    let xOPyd = xd*yd;


    // reduce the numerator and denominator to prime numbers between them
    
    let divider = 2;
    while (divider <= Math.min(Math.abs(xOPyn), Math.abs(xOPyd))) {
        if(xOPyn % divider===0 && xOPyd % divider===0) {
            xOPyn /= divider;
            xOPyd /= divider;
        } else {
            divider++;
        }
    };
    
    if(xOPyn===0) xOPyd =1; // if the numerator is zero, the reducive loop won't work. handle manually
    
    return fractionAddition(xOPyn+'/'+xOPyd+fractions.rest);
};
