//first version
function filter(array) {
    let result = []
        //check if the element is number then add it to result
    array.forEach(i => {
            if (typeof i === 'number')
                result.push(i)
        })
        //filter the result to remove the duplicate elements by making sure each item only have 1 index with filter and indexOf method
    let finalAnswer = result.filter((item, index) => result.indexOf(item) === index)
    return finalAnswer //return the data stored in the finalAnswer
}
console.log(filter([2, 16, 16, 2, 988, 72, 'aaaa', '123']))

// second version accept number string such as '1000' and display the result the
// function filterArray(array) {
//     // create empty array
//     let result = []
//         //goes through each item in array and changes it into a number and pushes it into result
//     array.forEach(x => result.push(parseInt(x)))
//         //removes duplicate numbers and non value number
//     return result.filter((item, index) => result.indexOf(item) === index)
// }
// console.log(filterArray(['100', 2.3, 1, 34, '99', 'anbs', '1', '2', 2, 2, 2]))