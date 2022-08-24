let currentTotal = [];

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

// function sum(currentTotal) {
// let totalPoints = 0;
// for(let i=0, i < currentTotal.length; i++) {
//  totalPoints = totalPoints + currentTotal[i]
//  }
//  return totalPoints;
// }
//
//