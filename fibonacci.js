function fibonacciRecursive(value){
    if(value <= 2)
        return [1, 1].slice(0, value);
    const result = fibonacciRecursive(value - 1);
    result.push(result[result.length - 1] + result[result.length - 2])
    return result;
}

function fibonacciLoop(value){
    const fibArr = [1, 1].slice(0 , value);
    for(let i = 2; i < value; i++)
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    return fibArr;
}

console.log(fibonacciLoop(1)) // 1
console.log(fibonacciLoop(8)) // 1, 1, 2, 3, 5, 8, 13, 21
console.log(fibonacciRecursive(1)) // 1
console.log(fibonacciRecursive(8)) // 1, 1, 2, 3, 5, 8, 13, 21
