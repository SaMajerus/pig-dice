let currentTotal = [];
let totalPoints = 0;

function diceRoll() {
  let number = Math.floor((Math.random() * 6) + 1); 
  // let numInner = (Math.random() * 6) + 1;
  // console.log("(Math.random * 6)+1 = " + numInner); 
  // console.log("Applying 'Math.floor' on 'numInner', we get:  " + Math.floor(numInner)); 
  if (number !== 1) {
    currentTotal.push(number);
  } else if (number === 1) {
    return currentTotal = [];
  }
  console.log(currentTotal);
}

function sum(currentTotal) {  //(Local-var 'totalPoints' modified to 'totalPts' for revision/clarification of Test 1.)
  let totalPts = totalPoints;
  for (let i = 0; i < currentTotal.length; i++) {
    totalPts += currentTotal[i];
  }
  return totalPts;
}

function Player(name, totalPoints) {
  this.name = name;
  this.currentTotal = [];
  this.totalPoints = 0; //Initializes this field to start at 0. 
} 

