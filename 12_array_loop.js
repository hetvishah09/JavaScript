let num = [3,4,5,6]

// For loop
for(let i=0; i< num.length; i++){
    console.log(i)
}

// For Each loop
num.forEach((element) => {
    console.log("element>>",element)
})

// Array.from
let name = "hello"
let arr = Array.from(name)
console.log(arr)

// for..of [MOST USEDDDDDDD]
for(let i of num){
    console.log("For..if_loop>>>",i)
}

// for..in
for(let i in num){
    console.log(num[i])
}