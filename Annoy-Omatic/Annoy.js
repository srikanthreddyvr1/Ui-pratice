var user = prompt("Are We There Yet");

/*while (user !== "yes" && user !== "yeah") {
    user = prompt("Your answer was not correct");
}
alert("Yay, We Finally Made It!");
if (user === "yes" || user === "yeah") {
    alert("Yay, We Finally Made It!");
} else {

    prompt("Keep Asking again and again Until they enter Yes or Yeah");
}*/

while (user.indexOf("yes") === -1) {
    user = prompt("Your answer was not correct");
}
alert("Yay, We Finally Made It!");