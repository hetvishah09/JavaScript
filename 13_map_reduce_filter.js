// Higher order Array

// Reduce return ===> value
// Map return ===> array
// Filter return ===> array


// MAP
let arr = [45,23,21]
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log("a new array:>>>",a)
console.log("arr<<<",arr)

// FILTER
let arr2 = [45,23,88,2,97,5,0]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log("a2 less then 10<<<",a2)

// REDUCE
let arr3 = [1,2,6,3,8,2,1,5,0]
let a3 = arr3.reduce((h1,h2)=>{
    return h1+ h2
})
console.log("a3<<<<",a3)
