'use strict'
  //1.The conversion task
function convertFahrToCelsius(f) {
   if (isNaN(f) && !Array.isArray(f)) {
    return `${JSON.stringify(f)} is not a valid number but a/an ${typeof(f)}`;
  }
  if (Array.isArray(f)) {
    return `${JSON.stringify(f)} is not a valid number but a/an "Array"`;
  }
  let Celsius = (f - 32) * (5 / 9) ;
  return Celsius.toFixed(4);
  
}


console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));


//2.the second task


function checkYuGiOh(n){
    
let list = [];    
    
for(let i=1; i<= n; i++){
        

switch (true) {

  case  i % 2 === 0 && i % 3 === 0 && i % 5 === 0:
    list.push("yu-gi-oh");
    break;
    
  case i % 2 === 0 && i % 5 === 0:
    list.push("yu-oh");
    break;
    
  case i % 2 === 0 && i % 3 === 0:
    list.push("yu-gi");
    break;
    
  case i % 5 === 0:
    list.push("oh");
    break;
    
  case i % 3 === 0:
    list.push("gi");
    break;
    
  case i % 2 === 0:
    list.push("yu");
    break;
   
  default:
    list.push(i);
}
 }
if(Number(n)){     
  return list;
  } else{
      return `invalid parameter: ${JSON.stringify(n)}`;
    }
}
console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5));
console.log(checkYuGiOh("fizzbuzz is meh"));