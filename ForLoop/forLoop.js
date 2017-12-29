//Print all numbers between -10 to 19
console.log("Print all numbers between -10 to 19");
for (var i = -10; i < 20; i += 1) {
    console.log(i);
}

//Print all  Even numbers between 10 to 40
console.log("Print all  Even numbers between 10 to 40");

for (var i = 10; i <= 40; i += 2) {
    console.log(i);
}

for (var i = 10; i <= 40; i += 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//Print all  Odd numbers between 300 to 333
console.log("Print all  Odd numbers between 300 to 333");

for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//Print all   numbers divisible by 5 and 3 between between 5 to 50
console.log("Print all   numbers divisible by 5 and 3 between between 5 to 50");

for (var i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

//i ++ ---it will added 1 
//i+1 -----it will add 1 
//i +2 ----it will added or increment 2