const prompt = require("prompt-sync")();
// Que-1

let age = prompt("What's your age?")
console.log("age>>",age)
if (age>10 && age<20){
console.log("age is between 10 and 20")
}
else{
    console.log("age doesn't lies between 10 and 20.")
}


// Que-2
let age_2 = prompt("What's your age for switch case?")
age_2 = Number.parseInt(age_2)
switch(age_2){
    case 12:
        console.log("your age is 12")
        break;
    case 15:
        console.log("your age is 15")
        break;
    default:
        console.log("your age is not special")
}


// Que -3
let num = prompt("enter your number: ")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("number is divided by 2 and 3")
}
else{
    console.log("number is not divide by 2 and 3")
}


// Que-5
drive_age = prompt("enter your age")
valid_age = drive_age>18? "you can drive" : "you can not drive"
console.log(valid_age)