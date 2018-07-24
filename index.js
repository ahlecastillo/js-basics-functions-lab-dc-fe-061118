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
  
  if (someValue <= 400){
    return 0;
 } 
  if (someValue >= 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
    else if (someValue > 2500); {
    return "No can do.";
  }
}
}