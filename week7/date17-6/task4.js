let setA=["red", "blue", "green"];
let setB=["yellow", "blue", "orange"];
let setC=["purple", "red"];

console.log(setA,setB,setC)

let combinedColors=[...setA,...setB]
console.log(combinedColors);

let allColors=setC.concat(combinedColors);
console.log(allColors);


console.log(allColors.push("black", "white"))

console.log(allColors.pop())

console.log(allColors.unshift("gray"));

console.log(allColors.shift())

console.log(allColors.splice(2,2))

console.log(allColors.sort())

console.log(allColors.reverse())

console.log(allColors.indexOf("blue"))

console.log(allColors.lastIndexOf("blue"))



