function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++ ){
        result *= i;
    }
    return result;
}

console.info(factorial(1));