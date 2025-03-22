let num = [10,50,60,80,30]

let b = num.toString()
console.log(b, typeof b)

let c = num.join("_") // join method
console.log(c, typeof c)

let d = num.pop() // pop method
console.log("array after pop>>",num)
console.log("d>>",d)

let e = num.push(55) //push method
console.log("array after push>>",num)

let f = num.shift() // remove first element and returns it
console.log(f, num)

let h = num.unshift(44) // add first element and returns array length
console.log(h,num)

// delete is a operator not method
delete num[0]  // after a delete an element array length is not change it will remain same
console.log("num after delete num[0]: ",num)
console.log(num.length)

//  concate
let num_more = [1,2,3,4,5,6]
let num_add_more = [88,55,444,77,66]
let newArray = num.concat(num_more, num_add_more)
console.log(newArray)
console.log("num_more>> ",num_more,"num_add_more>> ", num_add_more)

// sort method
let compare = (a,b)=>{
    return a-b
} // for getting proper corting
let m = [88,57,68,25,49,38,11,1,111]
m.sort()
console.log("sorting>> ",m) //  sorting done on basis of letters
// m.sort(compare)  // calling function
// console.log("m>>",m)


// splice and slice
let n = [551,666,414,256,458]
n.splice(0,2,1022,1055,1066,1048)
console.log("splice>> ", n)

// let slice=n.slice(2)
let slice=n.slice(1,3)
console.log("slice>>>",slice)