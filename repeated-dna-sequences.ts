function findRepeatedDnaSequences(s: string): string[] {
    let winSpan = 10;
    const seen = new Map<string, number>();
    const repeated:string[] = [];
    let current:string, repeats:number|undefined;

    for (let left=0; left <s.length-winSpan; left++) {
        current = s.substring(left, left+winSpan);
        repeats = seen.get(current);

        if(repeats != undefined) {
            if(repeats===1) repeated.push(current);
            seen.set(current, repeats+1);
        } else {
            seen.set(current, 1);
        }
    };

    return repeated;
};