function checkTriangle(a,b,c) {
    if (a + b > c && a + c > b && b + c > a)
        return 'triangle'
    return 'not triangle'
}

console.log(checkTriangle(10,20,30)) // not triangle
console.log(checkTriangle(1,1,1)) // triangle
