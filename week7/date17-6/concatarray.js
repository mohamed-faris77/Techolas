let array1=["Apple", "Mango"]
console.log(array1);

let array2=["Orange", "Banana"]
console.log(array2);

let combine= array1.concat(array2);
console.log(combine);

let combined=[...array1,...array2]
console.log(combined);

console.log(array1.includes("Apple"))
console.log(array2.includes("Apple"))