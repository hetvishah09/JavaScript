console.log("hello");

// js is a dynamically typed language
// we can change the value of a variable at any time
// we can use let to declare a variable that can be changed
// we can use const to declare a variable that cannot be changed
// we can use var to declare a variable that can be changed

// Var is a global variable
// let and const are block scoped
var a = 5;
var b = "hello";
var c = null;
var d = undefined;
let e = "world";
// no need to declare the type of a variable we can changet it at any time
e = "change value of e";
console.log("e: ", e);
{
  // var b = "this";
  let b = "that";
  console.log(b);
}
console.log(b);

//  let a = "hello";
// console.log(a);
// a = 20;
// console.log(a);
