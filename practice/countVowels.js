let str="mohamed faris";
let vowels="aeiouAEIOU";
let count=0;
let found='';

for(i=0;i<str.length;i++){
  if(vowels.includes(str[i])){
    count++;
    found+=str[i];
  }
}
console.log(count);
console.log(found);

