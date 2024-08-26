function reverse(x: number): number {
    const stringX = x.toString();
    let result = ''
    
    for (let i = stringX.length-1; i>=0; i--) {
        if(result.length===0 && stringX[i]==='0') continue;
        result +=stringX[i];
    };
    
    if(result[result.length-1]==='-') result = '-'+result.slice(0, -1);

    const min = ((-2)**31).toString();
    const max = (2**31-1).toString();

    
    if(result[0]==='-') {
        if(result.length>min.length) {
            result='0'
        } else if(result.length===min.length && result>min) {
            result='0'
        };
        
    } else {
        if(result.length>max.length) {
            result='0'
        } else if(result.length===max.length && result>max) {
            result='0'
        };
    };
    return Number(result);
};