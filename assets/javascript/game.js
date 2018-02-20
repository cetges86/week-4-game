//generates random number for user to guess (19-120)
var numToGuess = Math.floor(Math.random() * 100)+20;
console.log(numToGuess);

//generates 4 random numbers to correspond with crystals (1-12)
var crys1 = Math.floor(Math.random() * 12)+1;
var crys2 = Math.floor(Math.random() * 12)+1;
var crys3 = Math.floor(Math.random() * 12)+1;
var crys4 = Math.floor(Math.random() * 12)+1;

console.log(crys1);
console.log(crys2);
console.log(crys3);
console.log(crys4);

//display random number
$('#randomNum').html("<h1>" + numToGuess + "</h1>");

//waits for user to click on crystals
    //on click events

//depending on which crystal the user clicks on, the random number is added to the user's score
    //score is displayed after each click

//if statement - if score = number, then you win, if score is above, you lose, if score is less than, loop back to top (or do nothing)