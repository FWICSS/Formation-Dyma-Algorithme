function factorialIterative(n) {
    let result = 1
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

function factorielRecursive(n) {
    if (n === 0) {
        return 1;
    }
    if (n != 0) {
        return n * factorielRecursive(n - 1)
    }
}

console.log(factorialIterative(5))
console.log(factorialIterative(3))

console.log(factorialIterative(5) === factorielRecursive(5))

