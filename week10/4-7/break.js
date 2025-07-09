console.log("Break Statement");
for(let i=1;i<=10;i++){
  if( i==9 )
    break;
  console.log(i)
}

console.log("Continue Statement");
for(let j=1;j<=10;j++){
  if(j == 8)
    continue;
  console.log(j);
}

console.log("Continue in Array");
let arr=["apple", " ", "orange", " ", "pineapple", " ", "mango"]
for(let k=0;k<arr.length;k++){
  if(arr[k] === " "){
    continue;
  }
console.log(arr[k]);
}

