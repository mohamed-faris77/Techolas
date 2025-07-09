let morningbatch=["Alice", "Bob", "Charlie"];
let eveningbatch=["David", "Eva", "Frank"];
let waitinglist=["George", "Hannah"];

console.log(morningbatch,eveningbatch,waitinglist)

let allstudents=[...morningbatch,...eveningbatch]
console.log(allstudents);

let finallist=waitinglist.concat(allstudents);
console.log(finallist);


console.log(finallist.includes("Eva"))
console.log(finallist.includes("Isha"))

console.log(finallist.sort());

console.log(finallist.reverse())

console.log(finallist.indexOf("Eva"))

console.log(finallist.lastIndexOf("Eva"))


