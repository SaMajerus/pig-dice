/*   Business Logic   */
Player.prototype.diceRoll = function() {
  const min = Math.ceil(1);  
  let number = Math.floor((Math.random() * 6) + min);  //Both max and min are inclusive. [See last example on MDN's 'Math.random()' page for reference. -SM]
  // let numInner = (Math.random() * 6) + 1;
  // console.log("(Math.random * 6)+1 = " + numInner); 
  // console.log("Applying 'Math.floor' on 'numInner', we get:  " + Math.floor(numInner)); 
  if (number !== 1) { 
    this.currentTotal.push(number);
  } else {  //(If 'number === 1')
    return this.currentTotal = [0];
  }
  console.log(this.currentTotal);
}

Player.prototype.currentSum = function() {
  this.currentPoints = 0;
  for (let i=0; i < this.currentTotal.length; i++) {
    this.currentPoints += this.currentTotal[i];
  } if (this.totalPts >= 100) {
    this.winner();
  } else {
    return this.currentPoints;
  } 
}

Player.prototype.sum = function() {  //(Local-var 'totalPoints' modified to 'totalPts' for revision/clarification of Test 1.)
 this.totalPts = this.totalPts;
  for (let i = 0; i < this.currentTotal.length; i++) {
    this.totalPts += this.currentTotal[i];
  }
  this.currentTotal = [];
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

function handleGameStart(event) {
  event.preventDefault();
  const inputPlayer1 = document.querySelector("input#player1").value;
  const inputPlayer2 = document.querySelector("input#player2").value;
  let player1 = new Player(inputPlayer1, 0);
  let player2 = new Player(inputPlayer2, 0);
  document.querySelector("div#game").removeAttribute("class");
  document.querySelector("span#player1").innerText = player1.name;
  document.querySelector("span#player2").innerText = player2.name;
  document.querySelector("div#p1Buttons").removeAttribute("class");
  document.getElementById("roll1").addEventListener("click",function() {
    player1.diceRoll();
    document.querySelector("span#currpts1").innerHTML = player1.currentSum();
  });
  document.getElementById("roll2").addEventListener("click",function() {
    player2.diceRoll();
    document.querySelector("span#currpts2").innerHTML = player2.currentSum();
  });
  document.querySelector("#hold1").addEventListener("click", function(){
    player1.sum();
    document.querySelector("span#totalpts1").innerHTML = player1.totalPts;
    document.querySelector("div#p1Buttons").setAttribute("class", "hidden");
    document.querySelector("div#p2Buttons").removeAttribute("class");
  });
  document.querySelector("#hold2").addEventListener("click", function(){
    player2.sum();
    document.querySelector("span#totalpts2").innerHTML = player2.totalPts;
    document.querySelector("div#p2Buttons").setAttribute("class", "hidden");
    document.querySelector("div#p1Buttons").removeAttribute("class");
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#nameInput").addEventListener("submit", handleGameStart);
  // document.querySelector("form#gameboard").addEventListener("submit", handleGameRoll);
}); 
