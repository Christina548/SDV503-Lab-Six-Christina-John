function addOddNumbers(number) {
    let result = 0
    for (let i = 1; i <= number; i += 2) {
        result += i;
    }
    return result;
}
console.log(addOddNumbers(13))