function getCount (object) { 
    let counts = object
    let likes = parseInt(counts.likes)
    let dislikes = parseInt(counts.dislikes)
    if (!Number.isInteger(likes)||!Number.isInteger(dislikes)){
        return 'not a number'
    }
    let difference = counts.likes-counts.dislikes;
    if (difference>0){
        return difference+' likes'
    } else {
        return Math.abs(difference)+' dislikes'
    }
}
console.log(getCount({likes: 1000, dislikes: 100}))