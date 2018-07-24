// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue){
  distanceFromHqInBlocks(someValue);
  return (distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(x,y){
  return ((Math.abs(x-y))* 264);
}
function calculatesFarePrice(x,y) {
  
  if (((Math.abs(x-y))* 264) <= 400){
    return 0;
 } 
  if (((Math.abs(x-y))* 264) >= 401 && ((Math.abs(x-y))* 264) <= 2000) {
    
    return (((Math.abs(x-y)) * 264) * 2);
  }
  if (((Math.abs(x-y))* 264) >= 2001 && ((Math.abs(x-y))* 264) <= 2500) {
    return "No can do.";
  }
}
}