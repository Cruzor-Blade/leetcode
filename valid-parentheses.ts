function isValid(s:string):boolean {
    if(s.length%2) return false;
    
    const stack:string[] = [];
    let pairs = {'(':')', '{':'}', '[':']'};

    for (let i=0; i<s.length; i++) {
        if(s[i] in pairs) {
            stack.push(s[i]);
        } else {
            let last = stack.pop(); 
            if(last===undefined || pairs[last] !=s[i]) {
                return false;
            }
        }
    };

    return stack.length === 0;
};