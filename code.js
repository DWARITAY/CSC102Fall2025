// functions are a nice way to organize our code and make our code reusable
// use a descriptive function name - functions do something, so make it a verb/action
// () can hold funtion argument - if you need to pass in information to the function
function playCraps(){
// log that the funtion was called
console.log("playCraps() function was called"); 

// roll die 1
let roll1 = rollDice();

// roll die 2
let roll2 = rollDice();

console.log("roll1=" + roll1);
console.log("roll2=" + roll2);

let sum = roll1 + roll2;


// display roll 1 in the roll 1 div
document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;


document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;


document.getElementById("divSum").textContent = "Sum: " + sum;


let result = "";


// see if the loser lost - if they rolled a sum of 7 or 11
// || - means or
// && - means and
if (sum == 7 || sum == 11){
    console.log("you lost");
    result = "you suck!";
}
// check if we rolled an even number
// modulus - % - do a division problem and we get the remainder as the result
// 2/2 = 1 with no remainder = even number;
// 4/2 = 2 with no remainder = even number;
// 5/2 = 2 with a remainder of 1 = odd number
// roll1 % 2 == 0 - this will be true if we have an even number
// we also need to make sure that roll1 and roll2 resulted in the smae value
else if(roll1 % 2 == 0 && roll1 == roll2){
    console.log("you won")
    result = "Congrats! You won!";
    }
    else{
    console.log("you tied (pushed)");
    result = "You tied (you pushed)";
    }

    // show the result in the result div
    document.getElementById("divResult").textContent = result;


} 

// create a funtion to generate a random number
function rollDice(){
    // create a variable to hold a random number
    // Math.random() is a built in JavaScript funtion wich generates a random number
    let die = Math.random() * 6; // I want to replicate a 6 sided die

    // round the number and return the value
    return Math.ceil(die);
}