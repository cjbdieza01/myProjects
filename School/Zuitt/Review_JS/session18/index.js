////////FUNCTION WITH PARAMETERS
/*
Job of Function Parameters in Javascript
The job of function parameters in JavaScript is to define placeholders for values that are expected to be passed into the function when it is called. Parameters allow you to make your functions more flexible and reusable by accepting different inputs.

Here are some key roles that function parameters play:

Defining input values: Parameters allow you to define the inputs that a function expects to receive. By specifying parameters, you establish the structure for the arguments that will be passed into the function.

Passing values into the function: When you call a function and provide arguments for the parameters, those arguments are assigned to the corresponding parameters within the function. This allows you to work with the passed values inside the function's code.

Customizing function behavior: Parameters enable you to customize the behavior of a function by accepting different values. By passing different arguments when calling the function, you can achieve different results or perform operations specific to those values.

Reusability: Functions with parameters can be reused with different input values. By defining parameters, you make your functions more versatile and adaptable to various scenarios. You can call the same function multiple times with different arguments to achieve different outcomes.

Modularity: Parameters help create modular code. By accepting inputs through parameters, functions become self-contained units that can be easily combined with other functions or used independently. This promotes code organization, readability, and maintainability.

Overall, function parameters allow you to create flexible, reusable, and customizable functions that can process different input values and perform specific tasks based on those inputs. They provide a way to pass data into functions and make your code more dynamic and adaptable.
*/

/*
In JavaScript, functions are blocks of reusable code that perform a specific task. Parameters are variables that you can define when declaring a function, which act as placeholders for values that will be passed into the function when it is called. These values are called arguments.
Here's an example of a basic function declaration with parameters:
*/
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  /*
In this example, name is the parameter of the greet function. It represents the value that will be passed into the function when it is called. Inside the function, we can use the name parameter just like any other variable.

To call a function and pass values as arguments for the parameters, you simply include the values in parentheses after the function name. Here's how you would call the greet function:
  */
greet("John");
/*
When you call the function with the argument "John", the value of "John" is assigned to the name parameter. The function will then log "Hello, John!" to the console.

You can also define multiple parameters for a function. For example:
*/
function addNumbers(a, b) {
    var sum = a + b;
    console.log("The sum is: " + sum);
  }
  /*
  In this case, the addNumbers function has two parameters: a and b. When you call this function, you need to provide two arguments, one for each parameter:
  */
  addNumbers(3, 5);
/*
This will log "The sum is: 8" to the console.



You can also have default values for parameters. If an argument is not provided for a parameter, the default value will be used instead. Here's an example:
*/
function multiply(a, b = 2) {
    var product = a * b;
    console.log("The product is: " + product);
  }
  /*
  In this case, the multiply function has two parameters: a and b. The b parameter has a default value of 2. If you call the function without providing an argument for b, it will use the default value:
  */  
  multiply(4); // The product is: 8
/*
The function will log "The product is: 8" because the default value 2 is used for the b parameter.

That's the basics of using parameters in JavaScript functions. You can define as many parameters as you need and use them within the function to perform computations or other operations based on the passed arguments.
*/




//////Function as an Argument
// In JavaScript, functions can be passed as arguments to other functions. Here's an example:
// Function that takes another function as an argument
function higherOrderFunction(callback) {
  // Perform some operations
  console.log("Executing higherOrderFunction...");
  
  // Call the callback function
  callback();
}

// Callback function to be passed as an argument
function callbackFunction() {
  console.log("Executing callbackFunction...");
}

// Calling the higherOrderFunction and passing the callbackFunction as an argument
higherOrderFunction(callbackFunction);
/*
In this example, we have a higher-order function called higherOrderFunction that takes another function callback as an argument. Inside higherOrderFunction, we perform some operations and then call the callback function.

We also define a separate function called callbackFunction that will be passed as the callback. This function simply logs a message to the console.

When we call higherOrderFunction(callbackFunction), it will execute both the higher-order function and the callback function, resulting in the following output:
*/
//Executing higherOrderFunction...
//Executing callbackFunction...

/*
So, in this example, the callback function callbackFunction is passed as an argument to the higher-order function higherOrderFunction, and it is invoked within the higher-order function.
*/

////ANother Example
function printName(print)   {
  console.log("My name is John Doe");
  print()
}

function printBack(){
  console.log("Youre name is not John Doe");

}
printName(printBack);
/*
 Let's break down the code step by step:

We start by defining a function called printName with a parameter print. This function is designed to print a specific name and then execute the function passed as an argument.

Inside the printName function, we have a console.log statement that prints the string "My name is John Doe".

After printing the name, we invoke the function print(). This is the function passed as an argument to printName.

Now, we define the printBack function. This function simply logs the string "Your name is not John Doe" to the console.

Finally, we call the printName function and pass the printBack function as an argument. This means that when print() is executed within printName, it will actually call the printBack function.

To summarize the execution:

When printName(printBack) is called, it prints "My name is John Doe" to the console.
Then, it executes printBack() by invoking print().
As a result, "Your name is not John Doe" is printed to the console.
*/

/*In the given code, print() is not defined as a separate function. Instead, it is used as a placeholder within the printName function. The purpose of print() is to indicate that a function should be called at that specific point in the code.

When printName(printBack) is called, print() within the printName function serves as a call to the function that was passed as an argument (printBack). It triggers the execution of the printBack function, which logs "Your name is not John Doe" to the console.

Essentially, print() acts as a callback mechanism, allowing the printName function to execute any function that is passed as an argument at the appropriate point in its code execution.
*/



//// Function with multiple parameters
/*
In JavaScript, a function is a block of code that performs a specific task or calculates a value. Functions can take parameters, which are placeholders for values that are passed into the function when it is called. Parameters allow you to pass data to the function so that it can perform operations on that data.

Here's an example of a JavaScript function with multiple parameters:
*/
function addNumbers(a, b) {
  var sum = a + b;
  return sum;
}
/*
In the example above, the function addNumbers takes two parameters, a and b. Inside the function, these parameters act as variables that hold the values passed into the function. The function then adds the values of a and b together and stores the result in the sum variable. Finally, the return statement is used to send the result back to the caller of the function.

To call the addNumbers function and pass values for the parameters, you can use the following code:
*/
var result = addNumbers(3, 4);
console.log(result); // Output: 7
/*
In this example, addNumbers is called with the arguments 3 and 4. These values are passed into the function and assigned to the parameters a and b, respectively. The function then calculates the sum and returns the result, which is assigned to the result variable. Finally, the value of result is logged to the console, which outputs 7.

You can define functions with any number of parameters by separating them with commas. Here's an example with three parameters:
*/
function multiplyNumbers(a, b, c) {
  var product = a * b * c;
  return product;
}
/*
And you can call the function with three arguments:
*/
var result = multiplyNumbers(2, 3, 4);
console.log(result); // Output: 24
/*
In this case, the function multiplyNumbers takes three parameters (a, b, and c), multiplies them together, and returns the result.

You can also pass variables as arguments to a function. For example:
*/
var x = 5;
var y = 10;

function subtractNumbers(a, b) {
  var difference = a - b;
  return difference;
}

var result = subtractNumbers(x, y);
console.log(result); // Output: -5
/*
In this example, the variables x and y are passed as arguments to the subtractNumbers function.

That's the basics of JavaScript functions with multiple parameters! You can use them to pass data into functions and perform operations on that data.
*/



// Return Statements
/*
In JavaScript, the return statement is used to end the execution of a function and specify the value that the function should return. When a function is called and encounters a return statement, it immediately exits the function and returns the specified value back to the caller.

Here's the basic syntax of a return statement:
*/
return expression;
/*
The expression is the value that you want to return. It can be a variable, a literal value, or the result of an expression. The return statement can be placed anywhere within a function, and it's not mandatory to have a return statement in every function. If a function doesn't have a return statement or if the return statement is without an expression, the function will return undefined by default.

Here's an example that demonstrates the use of a return statement:
*/
function add(a, b) {
  return a + b;
}

var result = add(3, 5);
console.log(result); // Output: 8
/*
In the example above, the add function takes two parameters a and b. It adds them together and uses the return statement to specify the sum as the value to be returned. When the function is called with arguments 3 and 5, it returns 8, which is then assigned to the result variable. Finally, the console.log statement outputs the value of result to the console.

The return statement is also useful for early termination of a function. For example, you might have a condition in your function where you want to stop executing the rest of the code and return a value immediately. Here's an example:
*/
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero.";
  }

  return a / b;
}

console.log(divide(10, 2));   // Output: 5
console.log(divide(10, 0));   // Output: "Cannot divide by zero."
/*
In the divide function above, the return statement is used to handle the case where the b parameter is zero. If b is zero, the function returns the string "Cannot divide by zero.". Otherwise, if b is a non-zero value, the function calculates the division and returns the result.

That's a brief overview of the JavaScript return statement and how it is used. 
*/