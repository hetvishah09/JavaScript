// // SNAKE WATER GUN

// const prompt = require("prompt-sync")();
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// function getRandom(){
//     return x[Math.floor(Math.random() * x.length)]
// }

// let x = ['s','w','g']
// // rl.question("Choose one: 's' for Snake, 'w' for Water, 'g' for Gun")
// console.log("Choose one: 's' for Snake, 'w' for Water, 'g' for Gun")
// let attempts = 0;
// let user_1;

// const gameOn = (a, b) => {
//     if (a === b) {
//         return "Nobody"; // It's a tie
//     } else if (a === 's' && b === 'w') {
//         return "User_1"; // Snake drinks Water
//     } else if (a === 's' && b === 'g') {
//         return "User_2"; // Gun kills Snake
//     } else if (a === 'w' && b === 's') {
//         return "User_2"; // Snake drinks Water
//     } else if (a === 'w' && b === 'g') {
//         return "User_1"; // Water rusts Gun
//     } else if (a === 'g' && b === 's') {
//         return "User_1"; // Gun kills Snake
//     } else if (a === 'g' && b === 'w') {
//         return "User_2"; // Water rusts Gun
//     }
// };

// do{
//     let user_1 = prompt("Enter your choice: ")
//     if(x.includes(user_1)){
//         let user_2 = getRandom();
//         console.log("user_2 choice: ",user_2)
//         let winner = gameOn(user_1,user_2);
//         console.log("The winner is: "+ winner)
//     }else{
//         attempts++;
//         if(attempts < 3){
//             console.log("Please Enter a proper word")
//         }
//         else{
//             console.log("please start again the game")
//             break;
//         }
//     }
// }while(attempts <3);


const prompt = require("prompt-sync")();

function getRandom() {
    return x[Math.floor(Math.random() * x.length)];
}

let x = ['s', 'w', 'g'];
console.log("Welcome to Snake-Water-Gun Game!");
console.log("Instructions: Choose 's' for Snake, 'w' for Water, 'g' for Gun.");

let user_1_score = 0;
let user_2_score = 0;
let round = 1;

const gameOn = (a, b) => {
    if (a === b) {
        return "Nobody"; // It's a tie
    } else if (a === 's' && b === 'w') {
        return "User_1"; // Snake drinks Water
    } else if (a === 's' && b === 'g') {
        return "User_2"; // Gun kills Snake
    } else if (a === 'w' && b === 's') {
        return "User_2"; // Snake drinks Water
    } else if (a === 'w' && b === 'g') {
        return "User_1"; // Water rusts Gun
    } else if (a === 'g' && b === 's') {
        return "User_1"; // Gun kills Snake
    } else if (a === 'g' && b === 'w') {
        return "User_2"; // Water rusts Gun
    }
};

while (round <= 5) {
    console.log(`\nRound ${round}:`);
    let user_1 = prompt("Enter your choice ('s', 'w', 'g'): ");

    if (x.includes(user_1)) {
        let user_2 = getRandom();
        console.log("User_2 choice: ", user_2);
        let winner = gameOn(user_1, user_2);

        if (winner === "User_1") {
            user_1_score++;
            console.log("User_1 wins this round!");
        } else if (winner === "User_2") {
            user_2_score++;
            console.log("User_2 wins this round!");
        } else {
            console.log("It's a tie!");
        }

        console.log(`Score: User_1 = ${user_1_score}, User_2 = ${user_2_score}`);
        round++;
    } else {
        console.log("Invalid input. Please choose 's', 'w', or 'g'.");
    }
}

console.log("\nFinal Results:");
console.log(`User_1 Score: ${user_1_score}`);
console.log(`User_2 Score: ${user_2_score}`);

if (user_1_score > user_2_score) {
    console.log("Congratulations! User_1 is the overall winner!");
} else if (user_2_score > user_1_score) {
    console.log("Better luck next time! User_2 is the overall winner!");
} else {
    console.log("It's a tie! Nobody wins the game.");
}
