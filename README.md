<!-- Describe- and Test-block templates. Do not delete -- copy paste please -->
<!-- 
Describe: 

Test: 
Code: 
Expected Result:  
-->


Describe: Player(); 

Test 1: It should store our players into 2 variables 
Code: 
  function Player(player1, variable)
  this.name = player1
  this.currentTotal = [];
  this.totalPoints = variable
Expected Result:

Describe: diceRoll();

Test 1: It should randomly generate a number between 1 - 6
Code: 
    let number = Math.floor((Math.random() * 6) + 1);
    return number;
Expected Result:  Return random number between 1- 6

Test 2: It should return when the number generator is equal to 1
Code: 
   let number = Math.floor((Math.random() * 6) + 1)
   if (number === 1) {
    return false;
   }
   return number
  }

Test 3: It will push number into total points array if not equal to 1
  Code: 
    let number = Math.floor((Math.random() * 6) + 1)
    if (number !== 1) {
      this.currentTotal.push(number);
    } else if (number === 1);
    return this.currentTotal = [];
  Expected Result:
  Erase the total of built up numbers when rolls a 1

