////////Functions////////

/*
In JavaScript, there are two common ways to define functions: declared functions and function expressions. The main difference between them lies in how they are created and hoisted within the code.

    1. Declared Function:
A declared function is created using the function declaration syntax. It consists of the function keyword followed by the function name and a block of code enclosed in curly braces. Here's an example:
*/
function add(a, b) {
    return a + b;
  }
//let result = add(20, 30);
//console.log(add(2, 3));
/*
Characteristics of declared functions:
    They are hoisted: Declared functions are hoisted to the top of their scope. This means you can call the function before its actual declaration in the code.

    They have a named identifier: Declared functions have a name that can be used to reference the function itself or to call it recursively.
*/
/*
    2. Function Expression:
A function expression is created by assigning a function to a variable or a property of an object. It involves defining an anonymous function (a function without a name) and assigning it to a variable. Here's an example:
*/
const add2 = function(a, b) {
  return a + b;
};
//console.log(add2(10, -20));
//console.log(`The result is: ${add(2, 3)}`);


/*
Characteristics of function expressions:

    They are not hoisted: Function expressions are not hoisted like declared functions. They must be defined before they are called in the code.

    They can be anonymous: Function expressions can be anonymous, meaning they do not have a name. However, you can assign them to a variable and use that variable to invoke the function.
*/  
//Here's an example that illustrates the difference in behavior between a declared function and a function expression:
console.log(add3(2, 3)); // Output: 5
function add3(a, b) {
  return a + b;
}


// Cannot access `subtract` before initialization
console.log(subtract(5, 2)); // Output: Uncaught ReferenceError: subtract is not defined
const subtract = function(a, b) {
  return a - b;
};
/*
In the example above, the declared function add can be called before its actual declaration because it is hoisted. On the other hand, the function expression subtract raises a ReferenceError because it is not hoisted, and the variable subtract is not defined before the call.

Both declared functions and function expressions are powerful tools in JavaScript, and choosing one over the other depends on the specific use case and coding style preferences.
*/



////Scope is the accessibility (visibility) of variables////
/*
Function scoping in JavaScript refers to the accessibility and visibility of variables within functions. When you declare a variable inside a function, it has local scope, which means it is only accessible within that function and any nested functions.
Here's an example to illustrate function scoping:
*/
function myFunction() {
  var x = 10; // Local variable

  function innerFunction() {
    var y = 20; // Local variable
    console.log(x + y); // Accessible: x and y are within scope
  }

  innerFunction(); // Call the nested function
}

myFunction(); // Call the outer function

/* 
    In JavaScript, there are three types of scope based on the accessibility or visibility of variables:
  1. Global Scope: Variables declared outside any function or block have global scope. They are accessible from anywhere in the code, including other functions and blocks. Global variables can be accessed and modified from any part of the code.
Example:
*/
var globalVariable = 10; // Global variable

function myFunction() {
  console.log(globalVariable); // Accessible
}

myFunction(); // Output: 10
/*
  2. Function Scope: Variables declared within a function have function scope. They are only accessible within the function itself and any nested functions. Function-scoped variables are not accessible from outside the function.
Example:
*/
function myFunction() {
  var localVariable = 20; // Function-scoped variable
  console.log(localVariable); // Accessible
}

myFunction(); // Output: 20
console.log(localVariable); // Error: localVariable is not defined

/*
  3. Block Scope: Introduced in ECMAScript 6, variables declared with let and const keywords have block scope. They are accessible only within the block in which they are defined, such as loops, conditionals, and block-like structures. Block-scoped variables are not accessible from outside the block.
Example:
*/
if (true) {
  let blockVariable = 30; // Block-scoped variable
  console.log(blockVariable); // Accessible
}

console.log(blockVariable); // Error: blockVariable is not defined
/*
It's important to note that variables with the same name can exist in different scopes without conflicting with each other. Inner scopes can access variables from outer scopes, but the reverse is not true. Understanding the scope of variables helps in managing data and preventing unintended modifications or conflicts.
*/

////Nested Functions
/*
Nested functions in JavaScript refer to the concept of defining a function within another function. The inner function is called a nested or inner function, and the outer function is called the parent or outer function.

Here's an example to help illustrate nested functions:
*/
function outerFunction() {
  // Outer function code
  
  function innerFunction() {
    // Inner function code
  }
  
  // More outer function code
}
/*
In the example above, innerFunction is defined within outerFunction. This means that innerFunction is only accessible within the scope of outerFunction. It cannot be accessed or called from outside outerFunction.

The primary reason to use nested functions is to encapsulate functionality and control the scope of variables. The inner function has access to variables and parameters of the outer function, including any parameters passed to the outer function. This is known as closure. The outer function acts as a wrapper that encapsulates the inner function and any variables it needs.

Here's an example that demonstrates the concept of closure:
*/
function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  
  return innerFunction;
}

var inner = outerFunction(5);
console.log(inner(3)); // Output: 8
/*
In the example above, outerFunction takes a parameter x and defines innerFunction inside it. innerFunction takes another parameter y and returns the sum of x and y. When outerFunction(5) is called, it returns innerFunction, creating a closure where x is remembered. The returned innerFunction can then be assigned to a variable (inner in this case) and invoked with an argument (3 in this case). The result is 8 because innerFunction remembers the value of x from the outer scope.

Nested functions can be powerful tools for organizing and structuring code, as they allow you to group related functionality together and control variable access. However, it's important to use them judiciously and avoid excessive nesting to keep your code readable and maintainable.

I hope this explanation helps! Let me know if you have any further questions.
*/

//////Extra//////
function calling() {
  let x = prompt("Enter a number: ");
  let y = prompt("Enter another number: ");
  return x + y;
}

console.log(calling());
/* 
1. The calling function is defined without any parameters.
2. Inside the function, two prompts are used to get input from the user. The first prompt asks for a number and assigns it to the variable x, and the second prompt asks for another number and assigns it to the variable y.
3. The function returns the result of the addition operation x + y.
4. Outside the function, calling() is called and the result is passed to console.log() to be logged in the console.

However, there is an issue with the code: The prompt function returns a string, so when you use the + operator with x and y, it performs string concatenation instead of numerical addition.
To fix this, you need to convert the input strings to numbers before performing the addition. Here's the corrected code:
*/
function calling() {
  let x = prompt("Enter a number: ");
  let y = prompt("Enter another number: ");
  return Number(x) + Number(y);
}

console.log(calling());

// This also will work
function additionA() {
  let x = prompt("Enter a number: ");
  let y = prompt("Enter another number: ");
  return +x + +y;
}
console.log(additionA());
/*
In this updated code, the Number() function is used to convert the input strings x and y to numbers before performing the addition. Now, when you run the code, it will prompt you for two numbers, convert them to numbers, add them together, and log the result to the console.

In JavaScript, the unary plus operator (+) can be used to convert a value to a number. When you apply the unary plus operator to a variable or expression, it attempts to convert it into a numeric value.

Let's consider an example:
*/
var x = "10";
var y = "20";

var result = +x + +y;
console.log(result); // Output: 30

/*
In the example above, we have two variables x and y which are initially assigned string values "10" and "20" respectively.

When we use the unary plus operator + before each variable in the expression +x + +y, it converts the string values into numbers. So, "10" becomes the number 10, and "20" becomes the number 20.

The expression +x + +y is then evaluated as 10 + 20, which yields the number 30.

By applying the unary plus operator before the variables, we ensure that they are treated as numbers and perform arithmetic addition instead of string concatenation.

It's important to note that if the string cannot be converted to a valid number, the result will be NaN (Not a Number). For example:
*/
var x = "Hello";
var y = "World";

var result = +x + +y;
console.log(result); // Output: NaN




//////Nested Functions
/*
Nested functions in JavaScript are functions that are defined inside another function. Let's explore an example and go through it step by step:
*/
function outerFunction() {
  // Code inside the outer function
  
  function innerFunction() {
    // Code inside the inner function
  }
  
  // More code inside the outer function
  
  // Call the inner function
  innerFunction();
}

// Call the outer function
outerFunction();
/*
In this example, we have an outer function named outerFunction, which contains an inner function named innerFunction. Here's a breakdown of what happens:

 1. When you call outerFunction():
 * Execution starts from the first line of outerFunction.
 * The code inside the outer function is executed sequentially until it reaches the definition of innerFunction.
 * The definition of innerFunction is encountered, but it is not executed yet.
 * The execution continues with the remaining code inside the outer function.
 * Finally, innerFunction() is called within the outer function.

 2. When innerFunction() is called:
 
 * Execution jumps to the first line of innerFunction.
 * The code inside the inner function is executed sequentially.
 * Once the inner function completes its execution, control returns to the point where it was called within the outer function.
 
 Nested functions have access to the variables and parameters of their containing function, as well as variables defined in the global scope. This concept is called "lexical scoping" or "closure."

Nested functions are useful in scenarios where you need to encapsulate functionality or create private variables that are only accessible within the outer function.

Here's an example illustrating how nested functions can access variables from the outer function:
*/
function outerFunction() {
  let outerVariable = "Hello, ";

  function innerFunction(name) {
    console.log(outerVariable + name);
  }

  innerFunction("John");
}

outerFunction();
/*
In this code, innerFunction has access to the outerVariable defined in the outer function. It concatenates the outerVariable with the name parameter and logs the result to the console. When you call outerFunction(), it calls innerFunction("John"), which logs "Hello, John" to the console.

That's the basic idea of nested functions in JavaScript. They provide a way to create functions within functions, allowing for code organization, encapsulation, and access to variables in the outer scope.

*/

// Certainly! The reason function declarations are hoisted and can be invoked before they are defined in the code is due to the JavaScript execution context and the concept of hoisting.

// When JavaScript code is executed, it goes through two main phases: the creation phase and the execution phase. During the creation phase, the JavaScript engine sets up the environment and hoists certain declarations to the top of their containing scope. This means that declarations, such as variable and function declarations, are processed before the code is actually executed.

// Function declarations, being one of the declarations that are hoisted, are processed during the creation phase. The JavaScript engine identifies function declarations and allocates memory for them, making them available for use even before their actual placement in the code.

// This hoisting behavior allows you to invoke a function declaration before it appears in the code because, during the creation phase, the function is already known and available in memory. This can be particularly useful in scenarios where you have functions that call each other or when you want to structure your code in a way that logically separates the function definitions from their invocations.

// Here's an example to illustrate this behavior:

```javascript
greet("Alice"); // This works fine

function greet(name) {
  console.log("Hello, " + name + "!");
}
```

// In the example above, the function declaration `greet` is hoisted during the creation phase. When the `greet("Alice")` line is encountered during the execution phase, the function is already available, and the code executes without any errors.

// It's important to note that although function declarations are hoisted, it is generally considered good practice to define your functions before invoking them. This helps improve the readability and maintainability of your code, as it makes the dependencies and order of execution more explicit.