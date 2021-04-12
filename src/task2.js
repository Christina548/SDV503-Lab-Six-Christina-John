function filterArray (array) {
    let result = []
    array.forEach(x=>result.push(parseInt(x)))
    result.sort()
    return result.filter((item,index)=>result.indexOf(item)=== index)
}
console.log(filterArray([1,34, '99','a', '1']))
