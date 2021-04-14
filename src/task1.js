function addOddNumbers(number) {
    //checking if the number is in correct input if not then exit the function with error message
    if (typeof number !== 'number') {
        return 'not a number'
    }
    //create an empty array
    let arr = []
    for (let i = 0; i <= number; i++) {
        //loop through all the number and any even odd number will be push in the empty array
        if (i % 2 !== 0) arr.push(i)
    }
    //store the final result in variable result and using reduce method to get the sum of the array
    let result = arr.reduce((a, b) => a + b)
    return result
}
console.log(addOddNumbers(13))
// one line code 
// const addOddNumbers = (number) => typeof number !== 'number' ? 'not a number' : number % 2 == 0 ? addOddNumbers(number - 1) : number < 2 ? number : addOddNumbers(number - 2) + number
// console.log(addOddNumbers(5))