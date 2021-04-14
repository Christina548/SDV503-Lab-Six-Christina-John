let counts = {
        likes: 399,
        dislikes: 499
    }
    //advance version which will throw error or correct the input if the number is in string format
    // function getCount(object) {
    //     let likes = parseInt(object.likes)
    //     let dislikes = parseInt(object.dislikes)
    //     if (!Number.isInteger(likes) || !Number.isInteger(dislikes)) {
    //         return 'not a number'
    //     }
    //     let difference = likes - dislikes;
    //     if (difference > 0) {
    //         return difference + ' likes'
    //     } else {
    //         return Math.abs(difference) + ' dislikes'
    //     }
    //}
    //simpler version but answer the question and giving the same output
function getCount(obj) {
    let result = obj.likes - obj.dislikes
    return result
}

console.log(getCount(counts))