var age = Number(prompt("Enter Age"));
if (age === 21) {
    console.log("happy 21st birthday;");
} else {
    console.log("you are under 21");
}

var age1 = Number(prompt("Enter Age"));
if (age1 < 0) {
    console.log("you age is negative");
} else {
    console.log("you are under 21");
}

var age2 = Number(prompt("Enter Age"));
var odd = age2 % 2 !== 0;
if (odd) {
    console.log("Your age is odd");
} else {
    console.log("you age is even");
}

var age3 = Number(prompt("Enter square Age"));
var square = age3 % Math.sqrt(age3) === 0;
if (square) {
    console.log("Your age is perfect square");
} else {
    console.log("you are not Perfect square");
}