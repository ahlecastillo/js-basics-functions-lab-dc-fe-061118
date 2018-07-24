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
function calculatesFarePrice() {
  
}