//ask user for guess
var stringGuess = prompt("Guess a Number");
var guess = Number(stringGuess);
//create secretNumber
var secretNumber = 4;
//check if guess is right
if (guess === secretNumber) {
    alert("You Got it Right!!")
    console.log("You Got it Right");
} else if (guess > secretNumber) {
    alert("You  Gussed is Higher!!");
    console.log("You  Gussed is Higher");
} else {
    alert("You  Gussed is Lower!!");
    console.log("You  Gussed is Lower");
}