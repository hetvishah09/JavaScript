const prompt = require("prompt-sync")();

// GUESS THE NUMBER
let x = Math.random() *100 +1
// console.log("X a random number: ",x)
let random_number= Math.round(x)
console.log("y rounded number: ",random_number)


let chances = 0

for(let i=1; i<=100; i++){
    let guess_number = prompt("Guess a random number:")
    if(random_number<guess_number){
        console.log(`random number is less then ${guess_number}`)
        chances +=1;
    }
    else if(random_number>guess_number){
        console.log(`random number is greater then ${guess_number}`)
        chances +=1;
    }
    else{
        console.log(`you guess the correct number which is ${guess_number}`)
        chances +=1;
        break;
    }
}

let score =(100-chances);
console.log("Score: ",score)