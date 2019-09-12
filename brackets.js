function checkBrackets(value) {
    const stack = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i] === '(' ) 
            stack.push(value[i]);
        else
            stack.pop();
    }
    if (stack.length !== 0) return 'NO';
    return 'YES';
}

console.log(checkBrackets(')(')) // 'NO'
console.log(checkBrackets('(()(()')) // 'NO'
console.log(checkBrackets('()()')) // 'YES'
console.log(checkBrackets('(()())')) // 'YES'