/*   Business Logic   */
Player.prototype.diceRoll = function() {
  let number = Math.floor((Math.random() * 6) + 1); 
  // let numInner = (Math.random() * 6) + 1;
  // console.log("(Math.random * 6)+1 = " + numInner); 
  // console.log("Applying 'Math.floor' on 'numInner', we get:  " + Math.floor(numInner)); 
  if (number !== 1) { 
    this.currentTotal.push(number);
  } else if (number === 1) {
    return currentTotal = [];
  }
  console.log(this.currentTotal);
}

Player.prototype.currentSum = function() {
  this.currentPoints = 0;
  for (let i=0; i < this.currentTotal.length; i++) {
    this.currentPoints += this.currentTotal[i];
  } if (this.totalPts >= 100) {
    this.winner();
  }
  return this.currentPoints;
}

Player.prototype.sum = function() {  //(Local-var 'totalPoints' modified to 'totalPts' for revision/clarification of Test 1.)
 this.totalPts = 0;
  for (let i = 0; i < this.currentTotal.length; i++) {
    this.totalPts += this.currentTotal[i];
  }
  return this.totalPts;
}

function Player(name, variable) {
  this.name = name;
  this.currentTotal = [];
  this.totalPts = variable; //Initializes this field to start at 0. 
} 

Player.prototype.winner = function() {
  document.querySelector("#youWin").removeAttribute("class");
  document.querySelector("#gameboard").setAttribute("class", "hidden");
  document.querySelector("#winner").innerText = this.name;

}

/*   UI Logic   */
