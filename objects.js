function sortObject(obj) {
    return Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
        if(obj[key] === Object(obj[key]))
            obj[key] = sortObject(obj[key])
        return {...acc, [key]: obj[key]}
        }, {});
}

function compareObjects(a, b) {
    if(JSON.stringify(sortObject(a)) === JSON.stringify(sortObject(b)))
        return 'YES';
    return 'NO'
};

console.log(compareObjects({a: 1, b: 2}, {b: 2, a: 1})) // 'YES'
console.log(compareObjects({a: 1, b: 2, c: 3}, {a: 1, b: 2, d: 4})) // 'NO'
console.log(compareObjects({a: 1, b: 2}, {b: 2, a: 1})) // 'YES'
console.log(compareObjects({a: 1, b: 2, c: {a: 1}}, {a: 1, b: 2, c: {a: 1}})) // 'YES'
