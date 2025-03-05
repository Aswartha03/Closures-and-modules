let extractAndReverse=(arr)=> {
    let subarray=arr.slice(2,5)
    return subarray.reverse()
}
let a=[15,30,45,60,75,90]
console.log(extractAndReverse(a))