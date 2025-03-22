const prompt = require("prompt-sync")();

// Que-1
let marks = {
    priya: 90,
    kajal: 50,
    neha: 40,
    riya: 60
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("Marks of "+ Object.keys(marks)[i] + "are "+ marks[Object.keys(marks)[i]])
}

// Que-2
console.log("using for loop")
for (let key in marks){
    console.log("Marks of "+ key + " are " + marks[key])
}

// Que-3
let correct_number = 4
let i
while(i!=correct_number){
    console.log("Try again")
    i = prompt("Enter a number: ")
}
console.log("You have entered correct number !!")

// Que-4
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log("mean of four number is: ", mean(4,5,6,7))