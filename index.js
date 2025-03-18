// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // $0.02 per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25
    } else {
      return "cannot travel that far"; // Over 2500 feet is not allowed
    }
  }
        