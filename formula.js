function calculateResult(x, mu, sigma) {
    return 1 / (sigma * Math.sqrt(2* Math.PI)) * Math.exp(-(Math.pow((x - mu),2)/(2* Math.pow(sigma, 2))))
}

console.log(calculateResult(1,1,0.25)) // 1.5957691216057308