function getCount (object) { 
    if (typeof object.likes!=='number'||typeof object.dislikes!=='number'){
        return 'not a number'
    }
    let difference = object.likes-object.dislikes;
    if (difference>0){
        return difference+' likes'
    } else {
        return Math.abs(difference)+' dislikes'
    }
}
console.log(getCount({likes: 100, dislikes: 900}))