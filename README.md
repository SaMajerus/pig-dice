<!-- Describe- and Test-block templates. Do not delete -- copy paste please -->
<!-- 
Describe: 

Test: 
Code: 
Expected Result:  
-->


Describe: Player(); 

Test 1:
Code:
Expected Result



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

  Describe: sum();
  Test 1: It should add all the numbers in currentPoints array to totalPoints array
  Code:
    sum(currentTotal)
