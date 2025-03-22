const prompt = require("prompt-sync")();

// Que-1
let age = prompt("Enter your age: ")
age = Number.parseInt(age)
if (age<18 && age>0){
    console.log("You can not drive")
}
else if(age>=18){
    console.log("You are allowed to drive")
}
else
{
    console.log("Please enter valid number")
}

// Que-2
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function canDrive(age1) {
  return age1 >= 18; // Adjusted logic for clarity
}

function askAgeAndCheckDriving() {
  rl.question('Enter your age: ', (ageInput) => {
    const age1 = Number.parseInt(ageInput, 10);
    if (isNaN(age1)) {
      console.log('Please enter a valid number.');
    } else if (canDrive(age1)) {
      console.log('Yes, you can drive.');
    } else {
      console.log('No, you cannot drive.');
    }
    askToPlayAgain();
  });
}

function askToPlayAgain() {
  rl.question('Do you want to play again? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      askAgeAndCheckDriving(); // Start over
    } else {
      console.log('Exiting the game. Bye!');
      rl.close();
    }
  });
}

// Start the program
askAgeAndCheckDriving();


// Que-4 this code is run in browser
// let number = prompt("Enter your number")
// number = Number.parseInt(number)

// if(number > 4){
//     location.href = "https://www.google.com"
// }