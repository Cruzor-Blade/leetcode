function findSubstring(s: string, words: string[]): number[] {
    words.sort()
    const wlen = words[0].length;
    const winSpan = words.length*wlen;
    const indices:number[] = [];
    let matches:number;
    let subs:string[] = [];

    for (let left = 0; left <=s.length-winSpan; left++) {
        matches = 0;
        subs.length=0;

        for (let i=0; i<words.length; i++) {
            subs.push(s.substring(left+i*wlen, left+(i+1)*wlen));
        };

        subs.sort();

        for (let i=0; i<words.length; i++) {
            if(words[i] !== subs[i]) break;
            matches+=1;
        };

        if(matches===words.length) indices.push(left);
    };

    return indices;
};