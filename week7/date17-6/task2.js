let books=["Maths","Sceince","History","English"];

console.log(books);

books.push("Computer");
console.log(books);

books.shift()
console.log(books);

books.unshift("Physics")
console.log(books);

books.pop()
console.log(books);

books.splice(2,0,"Biology" , "Chemistry")
console.log(books);

books.splice(1,2)
console.log(books);