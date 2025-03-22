const hello = ()=>{
    console.log("Hello, how are you???")
    return "hiii"
}
// hello();
let v = hello();
console.log(v);

function oneplus(x, y) {
    return 1+ (x+y) /2
}
let a = 3;
let b = 5;
console.log("average of a and b is: ",oneplus(a,b))

const sum = (p, q) => {
    return p + q
}
console.log("sum is: ",sum(4,5))
