const prompt = require("prompt-sync")();

// QUE-1
let arr = [1,2,3,4,5,6,7,83]
let a = prompt("Enter a number: ")
a = Number.parseInt(a)
arr.push(a)
console.log("arr<<<",arr)

// Que-2
let arr2 = [1,2,3,4,5,6,7,83]
let a2;
do {
    a2 = prompt("Enter a number: ")
    a2 = Number.parseInt(a2)
    arr2.push(a2)
}while(a2 != 0);
console.log("arr2<<<",arr2)

// Que-3
let arr3 = [5,10,15,20,100,50]
let a3 = arr3.filter((a3)=>{
    return a3%10 ==0
})
console.log("a3>>>",a3)

// Que-4
let arr4 = [1,2,3,4,5]
let a4 = arr4.map((a4)=>{
    return a4*a4
})
console.log("a4<<<",a4)

// Que-5
let arr5 = [1,2,3,6]
let a5 = arr5.reduce((a,b)=>{
    return a*b
})
console.log("a5<<<",a5)