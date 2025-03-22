let marks = [91, 82, 53, 74]
console.log("marks>>",marks)
console.log(marks[0])
console.log(marks[6])

marks[2] = 98 // it is mutable we can change the valuef of it.
console.log("Updated Marks array>>",marks)

for(let i =0;i<marks.length;i++){
    console.log("marks of "+ i + " th index ",marks[i])
}
