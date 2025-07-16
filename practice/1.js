let cities =['Delhi','Mumbai','Chennai']
cities.push("Kolkata");
console.log(cities);
cities.shift();
console.log(cities);
cities.unshift("Bangalore", "Hyderabad")
console.log(cities);
cities.pop();
console.log(cities);
cities.splice(2,0,"Pune");
console.log(cities);
cities.splice(1,1);
console.log(cities);