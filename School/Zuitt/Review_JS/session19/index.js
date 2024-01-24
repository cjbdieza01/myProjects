////////Selection Control Structures
/*
JavaScript provides several selection control structures that allow you to make decisions and execute different blocks of code based on certain conditions. The main selection control structures in JavaScript are:

 1. if statement: The if statement is used to execute a block of code if a specified condition is true. It has the following syntax:
*/
if (condition) {
    // code to be executed if the condition is true
  }
   // Example
  var age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
 /*
 2. if...else statement: The if...else statement allows you to execute one block of code if the condition is true and another block of code if the condition is false. It has the following syntax:
 */
 if (condition) {
    // code to be executed if the condition is true
  } else {
    // code to be executed if the condition is false
  }

  // Example
  var age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

/*
    3. else if statement: The else if statement allows you to specify multiple conditions to be checked in sequence. It is used when you have more than two possible outcomes. It has the following syntax:
*/
if (condition1) {
    // code to be executed if condition1 is true
  } else if (condition2) {
    // code to be executed if condition2 is true
  } else {
    // code to be executed if all conditions are false
  }
 // Example
 var num = 0;
 if (num > 0) {
   console.log("Number is positive.");
 } else if (num < 0) {
   console.log("Number is negative.");
 } else {
   console.log("Number is zero.");
 }


 // Another EXAMPLE of Else-If statement
 function checkAverage(a1, a2, a3, a4, a5) {
    if (arguments.length < 5) {
      console.log("Incomplete Grades");
      return; // Exit the function if grades are incomplete
    }
    
    let grade = (a1 + a2 + a3 + a4 + a5) / 5;
    grade = Math.round(grade);
    console.log(grade);
    
    if (grade <= 74) {
      console.log(`Your average score is ${grade}! Sorry! You failed`);
    } else if (grade >= 75 && grade <= 79) {
      console.log(`Congratulations! You passed. Your average score is ${grade}`);
    } else if (grade >= 80 && grade <= 84) {
      console.log(`Your score is ${grade}, Good`);
    } else if (grade >= 85 && grade <= 94) {
      console.log(`Your grade is ${grade}, Very Good`);
    } else {
      console.log(`Outstanding!! Your grade is ${grade}!! Good Job`);
    }
  }
  
  checkAverage(74, 74, 74, 74, 100);
  checkAverage(80, 85, 90, 88);
  
/*
 4. switch statement: The switch statement allows you to select one of many code blocks to be executed based on the value of an expression. It has the following syntax:
*/ 
switch (expression) {
    case value1:
      // code to be executed when the expression matches value1
      break;
    case value2:
      // code to be executed when the expression matches value2
      break;
    // more cases...
    default:
      // code to be executed when none of the cases match
  }
 // Example  
 var day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the beginning of the week.");
    break;
  case "Friday":
    console.log("It's the end of the week.");
    break;
  default:
    console.log("It's a regular day.");
}
 // These selection control structures allow you to control the flow of your code based on conditions, making your JavaScript programs more flexible and responsive.

/*
The switch statement is a control flow statement in JavaScript that allows you to select one of many code blocks to be executed based on the value of an expression. It provides a way to write more concise code when you have multiple possible conditions to check against.

Here's the basic syntax of the switch statement:
*/
switch (expression) {
    case value1:
      // code to be executed when the expression matches value1
      break;
    case value2:
      // code to be executed when the expression matches value2
      break;
    // more cases...
    default:
      // code to be executed when none of the cases match
  }
/*
Let's break down the components:

expression: This is the value or variable that you want to compare against different cases. It can be a variable, a literal value, or an expression.

case valueX: Each case statement represents a possible value that the expression might match. If the expression matches a case value, the code block following that case will be executed. The case statement can be followed by a colon (:).

// code to be executed: This is the block of code that will be executed if the expression matches the corresponding case value.

break: The break statement is used to exit the switch statement after a case is matched and executed. It ensures that the execution doesn't "fall through" to the next case block. If break is not used, the code execution will continue to the next case until a break or the end of the switch statement is reached.

default: This is an optional case that is executed when none of the previous cases match the expression. It is similar to an "else" statement in an if-else structure. The default case is executed only if no other case matches the expression.

Here's an example to illustrate the usage of the switch statement:  
*/
var day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the beginning of the week.");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("It's a regular weekday.");
    break;
  case "Friday":
    console.log("It's the end of the week.");
    break;
  default:
    console.log("It's a weekend day.");
}
/*
In this example, based on the value of the day variable, different code blocks will be executed. If day is "Monday", it will output "It's the beginning of the week." If day is "Tuesday", "Wednesday", or "Thursday", it will output "It's a regular weekday." If day is "Friday", it will output "It's the end of the week." For any other value, it will output "It's a weekend day."

The switch statement is useful when you have multiple conditions to check against a single expression and provides a more concise and readable alternative to using multiple if-else statements.
*/

////Sample Else-if with Switch
let number = prompt("Enter a number: ");
number = parseInt(number);

if (number % 2 === 0) {
  switch (number) {
    case 2:
      console.log("It's an even number");
      break;
    case 4:
    case 6:
      console.log("Another even number");
      break;
    default:
      console.log("It's an even number");
  }
} else {
  switch (number) {
    case 3:
    case 5:
    case 7:
      console.log("It's an odd number");
      break;
    default:
      console.log("It's a number");
  }
}
/*
The let number = prompt("Enter a number: "); line prompts the user to enter a number through a dialog box and assigns the entered value to the number variable.

The number = parseInt(number); line converts the input from a string to an integer using the parseInt() function. This is necessary to ensure that the subsequent comparisons work correctly.

The if (number % 2 === 0) { ... } statement checks if the number is even by performing the modulus operation (%) on the number and checking if the result is equal to 0. If the condition is true (i.e., the number is even), the code block within the if statement is executed.

Inside the if block, we have a switch statement: switch (number) { ... }. The switch statement evaluates the number variable and executes different code blocks based on its value.

If the value of number matches any of the cases, the corresponding code block is executed. In this case, if number is equal to 2, the code block case 2: console.log("It's an even number"); break; is executed, and it logs "It's an even number" to the console. If number is 4 or 6, the code block case 4: case 6: console.log("Another even number"); break; is executed and logs "Another even number" to the console. If number does not match any of the cases, the default case default: console.log("It's an even number"); is executed, and it logs "It's an even number" to the console.

If the condition in the if statement (number % 2 === 0) is false, meaning the number is odd, the code block within the else statement is executed.

Inside the else block, we have another switch statement: switch (number) { ... }. This switch statement evaluates the number variable, just like before.

If number matches any of the cases (3, 5, or 7), the corresponding code block is executed. In this case, the code block case 3: case 5: case 7: console.log("It's an odd number"); break; is executed, and it logs "It's an odd number" to the console. If number does not match any of the cases, the default case default: console.log("It's a number"); is executed, and it logs "It's a number" to the console.

Overall, the code prompts the user for a number, checks if it's even or odd, and provides appropriate output based on the number's parity (even or odd).
 */