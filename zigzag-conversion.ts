function convert(s: string, numRows: number): string {
    if(numRows===1 || numRows>s.length) return s;

    
    let glyph = new Array(numRows).fill("");
    let goingDown = false;
    
    let row = 0;
    for (let i=0; i<s.length; i++) {
        glyph[row] += s[i];
        if(row===0 || row===numRows-1) goingDown = !goingDown;
        row += goingDown? 1 :-1;
    }
    
    return glyph.join("");
};