function filterArray(array) {
    // create empty array
    let result = []
        //goes through each item in array and changes it into a number and pushes it into result
    array.forEach(x => result.push(parseInt(x)))
        //removes duplicate numbers and non value number
    return result.filter((item, index) => result.indexOf(item) === index)
}
console.log(filterArray(['100', 2.3, 1, 34, '99', 'anbs', '1', '2', 2, 2, 2]))