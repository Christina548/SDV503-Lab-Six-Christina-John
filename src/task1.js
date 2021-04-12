function addOddNumbers(number) {
    if (typeof number !== 'number') {
        return 'not a number'
    }
    let result = 0
    for (let i = 1; i <= number; i += 2) {
        result += i;
    }
    return result;
}
console.log(addOddNumbers('ie'))