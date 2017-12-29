//Is Even 

function isEven(even) {
    return even % 2 === 0
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

//fractional
/*var f = [];

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return f[n] = factorial(n - 1) * n;
    }
}*/

function factorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

factorial(5);
factorial(2);
factorial(10);
factorial(0);


//replace string

function kebabToSnake(str) {
    return str.replace(/-/gi, "_");
}

kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah-blah");