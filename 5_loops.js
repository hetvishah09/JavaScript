const prompt = require("prompt-sync")();
let sum = 0
let n = prompt("Enter the value of n: ")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum+= (i+1)    
}
console.log("Sum of first " + n + " natural number is " + sum)

// for in loop
let obj = {
    harry:50,
    carry:40,
    ram:80,
    shiv:90
}

for(let a in obj){
    console.log("Marks of "+ a + " are "+ obj[a])
}

// for of loop
for(let b of "javascript"){
    console.log(b)
}