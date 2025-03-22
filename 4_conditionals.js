const prompt = require("prompt-sync")();
let a = prompt(" What's your age?")
console.log("a>>",a)
a = Number.parseInt(a)
if(a<0){
    console.log("this is an invalid age")
}
else if(a<9){
    console.log("You are still kid you can't drive")
}
else if(a<18 && a>=9){
    console.log("you can drive after 18 years")
}
else{
    console.log("you can drive now!!")
}
console.log("done...!")