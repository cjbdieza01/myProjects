// Repetition Control Structures

// While Loop
/*
	- it evaluates a condition, if returned true, it will execute statements as long as the condition is satisfied. If at first the condition is not satisfied, no statement will be executed.
	Syntax:
		while(expression/condition){
			statement/s;
		}
*/
console.log("While loop");
let count = 5;

while(count !== 0) {
	console.log("While: " + count);
	count--;
}
/*
	count: 5, 4, 3, 2, 1, 0
	Console:
		While: 5
		While: 4
		While: 3
		While: 2
		While: 1
		
*/

// Mini activity: Using while loop, display numbers 1-5.

let count2 = 1;

while(count2 <= 5){
	console.log("While: " + count2);
	count2++;
}

// Do-while loop
/*
	- iterates statements within a number of times based on a condition. However, if the condition was not satisfied at first, one statement will be executed.
	Syntax:
		do{
			statement/s;
		} while(expression/condition);
*/
/*
let number = Number(prompt("Give me a number"));

do{
	console.log("Do while: " + number);

	number += 1;
	// number = number + 1;
}while(number < 10);
*/

console.log("Do while loop");

let even = 2;

do{
	console.log(even);
	even += 2;
}while(even <= 10);

// For Loop
/*
	- a looping construct that is more flexible than other loops. It consists of three parts:
		1. Initialization
		2. Expression/condition
		3. final expression/step expression

	Syntax:
		for(initialization; expression/condition; finalExpression){
			Statement/s;
		}
*/

console.log("For Loop")
for(let count = 0; count <= 20; count++){
	console.log(count);
}
/*
	count = 0, 1, 2, ..., 19, 20, 21
	Console:
		0
		1
		2
		.
		.
		19
		20
*/

let myString = "alex";

console.log(myString.length);

// Accessing elements of a string
console.log(myString[0]);
console.log(myString[2]);
console.log(myString[3]);

console.log("Looping through array index")
for(let x = 0;x < myString.length;x++){
	console.log(myString[x]);
}

let myName = "AlExIs";

console.log("Looping through vowels and consonants")

for(let i = 0; i < myName.length; i++){
	if(
		myName[i].toLowerCase() == "a" ||
		myName[i].toLowerCase() == "e" ||
		myName[i].toLowerCase() == "i" ||
		myName[i].toLowerCase() == "o" ||
		myName[i].toLowerCase() == "u"	
	){
		console.log(3);
	}
	else{
		console.log(myName[i]);
	}
}

// Continue and Break Statements
console.log("Continue and Break Statements");
for(let count = 0; count <= 20; count++){
	if(count % 2 === 0){
		// Tells the code to continue to the next iteration of the loop
		continue;
	}

	console.log("Continue and Break: " + count);

	// If the current value of count is greater than 10, stops the loop
	if(count > 10){
		// tells the code to terminate/stop the loop even if the condition of the loop defines that it should execute
		break;
	}
}
// count: 10, 11

let name = "alexandro"

for (let i = 0; i < name.length; i++){
	console.log(name[i]);

	// If the character is equal to 'a', continue to the next iteration
	if(name[i].toLowerCase() === "a"){
		console.log("Continue to the next iteration");
		continue;
	}

	// If the current letter is equal to 'd', stop the loop
	if(name[i] == "d"){
		break;
	}
}

/*
 In JavaScript, repetition control structures are used to repeat a certain block of code multiple times. There are mainly two types of repetition control structures in JavaScript: for loops and while loops. Let's go through each one of them:
*/
/*
    1. for loop: A for loop is used when you know in advance how many times you want to repeat a certain block of code. It consists of three parts: initialization, condition, and increment/decrement.
*/
for (initialization; condition; increment/decrement) {
    // code to be repeated
  }
/*
  Here's a breakdown of each part:

Initialization: Initializes a counter variable before the loop starts.
Condition: Defines the condition that must be true for the loop to continue executing.
Increment/Decrement: Updates the counter variable after each iteration.
Example:
*/
for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
  }
// This for loop will execute the code block five times, printing the iteration number from 0 to 4.

/*
  2. while loop: A while loop is used when you want to repeat a block of code as long as a certain condition is true. It consists of a condition that is evaluated before each iteration.
*/
while (condition) {
    // code to be repeated
  }
/*
The loop will continue executing as long as the condition evaluates to true. It's important to ensure that the condition eventually becomes false to avoid an infinite loop.

Example:  
*/
let i = 0;
while (i < 5) {
  console.log("Iteration", i);
  i++;
}
/*
This while loop will execute the code block as long as i is less than 5, printing the iteration number from 0 to 4.

These repetition control structures allow you to automate repetitive tasks and iterate over data structures like arrays. It's important to keep track of loop variables and conditions to avoid infinite loops or unexpected behavior.

I hope this explanation helps! Let me know if you have any further questions.
*/

//// Do-While/ Else-If Example////
let userInput;
do{
  userInput = prompt("Enter a number greater than 10:");
  if (Number(userInput) <= 10)  {
    alert("The number you entered is less than 10");
  } else if (isNaN(Number(userInput))) {
    alert("Please enter a valid number");
  }
} while (Number(userInput) <= 10 || isNaN(Number(userInput)));
alert(`User entered ${userInput}`);
/*
	1. `let userInput;: This line declares a variable called userInput without assigning it any value initially.
	2. `do {: This initiates a do-while loop, which means the code block following this line will be executed at least once and then repeatedly executed as long as the specified condition is true.
	3. `userInput = prompt("Enter a number greater than 10:");: Inside the loop, the code prompts the user to enter a number greater than 10 and assigns the user's input to the userInput variable.
	4. `if (Number(userInput) <= 10) {: This condition checks if the value entered by the user, converted to a number using Number(), is less than or equal to 10.
	5. `alert("The number you entered is less than 10");: If the user's input is less than or equal to 10, an alert message is displayed to notify the user that the entered number is too small.
	6. `else if (isNaN(Number(userInput))) {: If the previous condition is false, this condition checks whether the user's input, converted to a number, is not a valid number (isNaN stands for "is not a number").
	7. `alert("Please enter a valid number");: If the user's input is not a valid number, an alert message is displayed to inform the user to enter a valid number.
	8. `} while (Number(userInput) <= 10 || isNaN(Number(userInput)));: This line closes the do-while loop. It specifies the loop will continue executing if the user's input is less than or equal to 10 or if the input is not a valid number.
	9. `alert(User entered ${userInput});: Once the loop is exited, this line displays an alert message that includes the value of userInput, indicating the number entered by the user.

	To summarize, this code repeatedly prompts the user to enter a number greater than 10 until a valid number greater than 10 is provided. If the entered number is less than or equal to 10 or not a valid number, alert messages are displayed accordingly. Finally, the code displays the number entered by the user.
*/
/*Iteration - , the term "iteration" refers to the process of repeatedly executing a block of code or performing a specific task multiple times. It allows you to perform operations on a set of values or elements, such as iterating over an array or looping through an object's properties.
There are several ways to perform iteration in JavaScript:

	1. for loop: It is the most common way to perform iteration. You can define a variable, set a condition for the loop to continue executing, and specify how the variable should be updated after each iteration. For example:
*/
for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*
	2. while loop: It executes a block of code as long as a specified condition evaluates to true. For example:
*/
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
/*
	3. do...while loop: Similar to the while loop, but it always executes the code block at least once before checking the condition. For example:
*/
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
/*
	4. for...in loop: It iterates over the enumerable properties of an object. For example:
*/
const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(prop + ": " + obj[prop]);
}
/*
	5. for...of loop: Introduced in ECMAScript 2015 (ES6), it allows iteration over iterable objects such as arrays, strings, maps, sets, etc. For example:
*/
const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}
