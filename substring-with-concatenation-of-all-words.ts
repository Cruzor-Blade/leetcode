function findSubstring(s: string, words: string[]): number[] {
    const wlen = words[0].length;
    const winSpan = words.length*wlen;
    const indices:number[] = [];
    let matches:number;
    let currentMap:{ [key: string]: number }, word:string;

    let wordsMap: { [key: string]: number } = {};
    for (let word of words) {
        wordsMap[word] = (wordsMap[word] || 0) + 1;
    }

    for (let left = 0; left <=s.length-winSpan; left++) {
        matches = 0;
        currentMap ={};

        for (let i=0; i<words.length; i++) {
            word = s.substring(left+i*wlen, left+(i+1)*wlen);
            if(wordsMap[word]===undefined) break;

            currentMap[word] = (currentMap[word]||0)+1;
            if(currentMap[word]>wordsMap[word]) break;
            matches +=1;
        };

        if(matches===words.length) indices.push(left);
    };


    return indices;
};


console.assert(findSubstring("barfoothefoobarman", ["foo", "bar"]).every(value => [0, 9].includes(value)));
console.assert(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]).length===0);
console.assert(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]).every(value => [6,9,12].includes(value)));
