function checkPalindrome(value) {
    value = value + ''
    if(value.split('').reverse().join('') === value)
        return `Yes. Reverse of '${value}' is also '${value}'`
    return `No. Reverse of '${value}' is not '${value}'`
}

console.log(checkPalindrome('test is a si tset')) // 'Yes. Reverse of 'test is a si tset' is also 'test is a si tset''
console.log(checkPalindrome('test')) // 'No. Reverse of 'test' is not 'test''
