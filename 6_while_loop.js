//  while loop
const prompt = require("prompt-sync")();
let n = prompt("Enter the value of n: ")
n = Number.parseInt(n)

let i = 0;
while(i<n){
    console.log(i);
    i++;
}

// do while loop
let a = prompt("Enter the value of a: ")
a = Number.parseInt(a)
let j = 0;
do{
    console.log(j);
    j++;
}while(j<a)

