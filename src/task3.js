function getCount(object) {
    let counts = object
    let likes = parseInt(counts.likes)
    let dislikes = parseInt(counts.dislikes)
    if (!Number.isInteger(likes) || !Number.isInteger(dislikes)) {
        return 'not a number'
    }
    let difference = likes - dislikes;
    if (difference > 0) {
        return difference + ' likes'
    } else {
        return Math.abs(difference) + ' dislikes'
    }
}
console.log(getCount({ likes: 900, dislikes: 99 }))