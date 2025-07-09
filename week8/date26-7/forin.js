 let student={name:"Faris", age:21, palce:"Gudalur", secondary:"Soldevanahalli"}

    for(let obj in student){
      console.log(obj + ":" + student[obj]); 
    }
//counting number of properties in an object
    let count=0;
    for (obj in student){
      count++;
    }
    console.log("Total properties " + count);
    