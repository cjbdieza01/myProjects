// Data types
/*
document.getElementsByTagName("h1")[4].style.color = "#ff0000";
console.log(3);
console.log(3 + 2.1);
console.log("This is exercise in Arithmetic Operations");
console.log(2 + 10 - 19 + 4 - 90 + 1);
console.log(-20 + -19 - (-10) - (-1) + 24);
console.log((10 / 5) * 4 - 20);
console.log(4096 % 12);
console.log("This is excercise in Comparing Numbers");
console.log(5 > 10);
console.log(5 < 10);
console.log(5 == 10);
console.log("This is quiz in Comparng Numbers");
console.log(43 > 47);
console.log(12 == 17);
console.log(3 <= 3);
console.log(1 != 0);
console.log(12 - (-5) * 5);



// Comments
// Function reverses the order of characters in a word
function rev(w) {
    let revw = "";
    // loops over the characters in reverse order
    for (let i = w.length - 1; i >= 0; i--) {
        // adds characters to a new word
        revw = revw.concat(w[i]);
    }
    return revw;
}
// comments help to explain your code and make thing clearer, In javascript, comments are marked with double forward slash '//'. Anything writen on the same line after the '//' woll not be executed or displayed. To have the comment to span to multiple lines, mark the start of your comment with a forward-slash and star, and then enclose your comment inside a star and forward slash '
// This is a single line comment
And this
 is
  a
multiple line 
comment. 



Programming quiz: First Expression (2-1)
Write an Expression that uses at least three, distinct, arithmetic operators to log the number 42 to the console.

Quiz requirements
1. Your code should print the value '42'
2. You should use at least three distinct operators. ('+', '-', '*', '/' or '%')
Your code should not be empty

// This Expresion equals 4, change it to equal 42
console.log(80 % 30 - 25 + 47);

// String
// String Concatination
//Quiz

// Converting Temperatures Celsius to fahrenheight
let celsius = 12;
let fahrenheight = celsius * 1.8 + 32;
console.log(fahrenheight);

// String Index/ Indexing
let quote = "Stay awhile and listen";
console.log(quote[6])
console.log(quote.charAt(6));

//Comparing strings
// Pick a string. Your string can have any number of characters.
var my_string = 'a';
// Calculate the ASCII valueof the first character, i.e. the first character at the position 0.
var ASCII_value = my_string.charCodeAt(0);
// Let us print 
console.log(ASCII_value);
// In the example above, if you wish to print all the ASCII values of all the string, you would have to use loops that we will study in later part of the course. Just for reference, here is how you can use a loop to print the ASCII valie of all characters in a string.
var my_string = "blue";
// Iterate using a loop
for (var i = 0; i < my_string.length; i++) {
    console.log(my_string.charCodeAt(i));
}
// The ASCII values of [A-Z] fall in the range [97-122]. Therefore, when we compare strings, the comparison happens character-by-character for the ASCII values.
let joke = "Why don't scientists trust atoms? Because they make up everything!";
console.log("Question: " + joke.split("?")[0] + "?");
console.log("Answer: " + joke.split("?")[1]);

// Concatination
let haiku = "Blowing from the west\n" + "Fallen leaves gather\n" + "In the east.";
console.log(haiku);

// Booleans
var studentName = "John";
var haveEnrolledInCourse = true;
var haveCompletedTheCourse = false;
if (haveEnrolledInCourse) {
    console.log("Welcome " + studentName + " to Udacity!");
}
var a = 10;
var b = 20;
// a comparison - we will study this in detail in upcoming lesson
if (a > b) // The outcome of a>b will be bollean
    console.log("Variable `a` has higher value");
else
    console.log("Variable `b` has higher value");

// Another Example
if (1) {
    console.log("This statement will always execute because conditional is set to 1 i.e. true");
    if (0) {
        console.log("This statement will never be execute bacause conditional is set to 0 i.e. false");
    }
}

// Null and Undefined
var x = null;
var y;
console.log(x);
console.log(y);
// NaN stands for 'Not-A-Number
Math.sqrt(-10);
console.log(Math.sqrt(-10));
console.log('hello' / 5);
var signedIn;
console.log(signedIn);

//Equality
console.log("1" == 1);
console.log(0 == false);
console.log(' ' == false);
// All of the above three evaluate to true. The reason for such interesting outcomes is Type Conversion. In the case of regular comparison, the operands on either side of the == operator are first converted to numbers, before comparison. Therefore, a ' ', false, and 0 are all considered equal. similarly, a '1' and 1 are also considered equal. If we don't want to convert the operands, before comparison, wew have to use the strict comparison ===, that is explained below.
// Implicit type coercion
// Basically this means that when you're writing javascript code. you do not need to sppecify data types. Instead, when you're code is interpreted by the favasript engine it will automatically be converted into the "appropriate" data type. This is called implicit type coercion and you've already seen examples like this before when you tried to concatenate strings with numbers.
console.log("Julia" + 1);
console.log("Hello" % 10);

// Strongly typed language is a programming language that is more likely to generate errors if data does not closely match an expected type. Because Javascript is loosely typed, you don't need to specify data types; however, this can lead to errors that are hard to diagnose due to implicit type coercion.
// Example of strongly typed programming language code.
//int count = 1; string name = "Julia"; double num = 1.2932; Float price = 2..99;
// Equivalet code in javascript
var count = 1;
var name = "Julia";
var num = 1.2932;
var price = 2.99;
// In the example below, Javascript takes the string "1", converts it to true, and compares it to the boolean true.
console.log("1" == true);
// When you use the == and != operators, Javascript first converts each value to the same type (if they're not already the same type); this is why its called "type coercion"! This is often not the behavior you want, and it's actually considered bad practice to use the == and != operators when comparing values for equality.

// Strict Equality - Instead, in Javascript it's better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first. To perform strict comparison
console.log("3" > 1);


*/

/*
let thingOne = "red";
let thingTwo = "blue";
console.log(thingOne + thingTwo);


var bill = 10.25 + 3.99 + 7.15;
let tip = bill * .15;
var total = bill + tip;
console.log(total);

let firstName = "Julia";
let interest = "cats";
let hobby = "video games";
let awesomeMessage = ("Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to play " + hobby + ".");
console.log(awesomeMessage);
*/
/*
//Conditionals
let weather = "rain";

if (weather === "snow") {
    console.log("Bring a coat");
} else if (weather === "rain") {
    console.log("Bring a Jacket");
} else {
    console.log("Wear what you have on");
}

let money = 150.50;
let price = 150.50;
if (money > price)  {
    console.log("You paid extra, heres your change");
} else if (money === price) {
    console.log("You paid the exact amount,, have a nice day");
}   else {
console.log(money === price);
}
*/

/*
let num1 = 13;
let num2 = 12;
if (num1 %2 === 0, num2%2 === 0)    {
    console.log("num1 is Even and num2 is Odd");
     
}   else {
    console.log("num2 is even and num1 is odd");
}
*/
/*
let musician = 0;
if(musician <= 0){console.log("not a group");
}
else if (musician == 1) {
    console.log("solo");
} else if (musician == 2) {
    console.log("duet");
} else if (musician == 3) {
    console.log("trio");
} else if(musician == 4) {
    console.log("quartet");
} else if (musician > 4)    {
    console.log("this is a large number")
}
*/
/*

let room = "billiards room";
var suspect = "Mr. Parks";
var weapon = "knife";
var solved = false;
if (weapon  === "poison")    {
    console.log("Mr. Kalehoff did it in the ballroom with a poison!");
} else if(weapon === "knife") {
    console.log("Mr. Parkes did it in the dining room with a knife!");
} else if (weapon === "pool stick") {
    console.log("Mr. Sparr did it in the billiards room with a pool stick!");
} else if(weapon === "trophy") {
    console.log("Mr. Van Cleve did it in the gallery with a trophy!");
}
*/
/*
var room = "billiards room";
var suspect = "Mr. Parkes";
var weapon = "trophy";  
var solved = false;

if (room === 'ballroom') {
    weapon = 'poison';
    
    if (suspect === "Mr. Kalehoff") 
        solved = true;
}
else if (room === 'gallery') {
    weapon = 'trophy';
    if (suspect === "Ms. Van Cleve") 
        solved = true;
}
else if (room === 'billiards room') {
    weapon = 'pool stick'; 
    if (suspect === "Mrs. Sparr") 
        solved = true;
} 
else if (room === 'dining room') {
    weapon = 'knife';
    if (suspect === "Mr. Parkes") 
        solved = true;
}   

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

*/
/*
let colt = "not busy";
weather = "4"
if (colt === "not busy" && weather === 4){
        console.log("go to the park");
    
} else {
    console.log("doon't go");
}

*/

//console.log(true || false);
//console.log(false && false);
//console.log(!true);
//console.log((13 > -7 ) || (false == 0));
//console.log((10 ==="10") && (1 <= 2));
//console.log((3 != 6 % 3) && !(24 > 45) && (!false));

// change the values of `balance`, `checkBalance`, and `isActive` to test your code

let balance = 999;
let isActive = true;
let checkbalance = false;
if (checkbalance === true){
    if(isActive === true && balance > 0){
        console.log("You're balance is $" + balance);
    }
    else if(isActive === false){
        console.log("You're account is no longer active.");
    }
    else if(isActive === true && balance === 0){
        console.log("You're account is empty.")
    }
    else if(isActive === true && balance < 0){
        console.log("You're balance is negative. Please contact bank.");
    }}
    else{
        console.log("Thank you. Have a nice day!");
    }
