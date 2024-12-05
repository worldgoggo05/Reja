//G-Task

function indexFind(arr){
    let bigIndx = Math.max(...arr)
    return arr.indexOf(bigIndx)
}

console.log(indexFind([5,21,12,21,8]))