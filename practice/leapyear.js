let year=2100;

if(year%4==0){
  if(year%100==0){
    if(year%400==0){
    console.log(" leap year");
  }
  else{
    console.log("Not a Leap Year");
  }
}
else{
  console.log(" Leap year ");
}
}
else{
  console.log("Not a leap year");
  
}