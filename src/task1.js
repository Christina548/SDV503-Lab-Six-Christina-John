function addOddNumbers(number) {
    if (typeof number !== 'number') {
        return 'not a number'
    }
    let arr = []
    for (let i = 0; i <= number; i++) {
        if (i % 2 !== 0) arr.push(i)
    }
    let result = arr.reduce((a, b) => a + b)
    return result
}
console.log(addOddNumbers(13))

// one line code 
// const addOddNumbers = (number) => typeof number !== 'number' ? 'not a number' : number % 2 == 0 ? addOddNumbers(number - 1) : number < 2 ? number : addOddNumbers(number - 2) + number
// console.log(addOddNumbers(5))