// Que-1
let name = "har\""
console.log(name.length)

// Que-2
const sentence = 'The quick brown fox jumps over the lazy dog.'
const word = 'fox'
console.log(`The word "${word} ${sentence.includes(word) ? 'is':'is not'} in the sentence"`)

// Que-3
let str = "Hello MY NAME IS HETVI SHAH"
console.log(str.toLowerCase());

// Que-4
let str2 = "Please give rs 1000"
amount = Number.parseInt(str2.slice(15))
console.log(amount);
console.log(typeof amount);

// Que-5
let str3 = "Deepika"
str3[3] = 'z'
console.log(str3) // not change because string is immutable