/*
What is an Object?
In JavaScript, an object is a collection of key-value pairs. Each value can be of any data type: strings, numbers, booleans, arrays, other objects, or even functions. Objects are used to represent entities or concepts in your code.
*/

//Creating Objects
//There are multiple ways to create objects in JavaScript:
/*
 1. Objects Literal
The simplest way to create an object is by using the object literal syntax, which involves enclosing key-value pairs in curly braces {}. Here's an example:
*/
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'gaming'],
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  /*
   2. Constructor Function
You can also create objects using constructor functions. A constructor function is a regular function that is used with the new keyword to create object instances. Here's an example:
  */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}.`);
    };
  }
  
  const person = new Person('John', 30);

  /*
   3.  Object.create()
Another way to create objects is by using the Object.create() method, which allows you to create a new object with a specified prototype object. Here's an example:
  */
const personProto = {
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  const person = Object.create(personProto);
  person.name = 'John';
  person.age = 30;
  


  ////Accessing Object Properties
  /*
  You can access object properties using dot notation (object.property) or bracket notation (object['property']). Here are some examples:
  */
  console.log(person.name);         // Output: John
  console.log(person['age']);       // Output: 30
  

  ////Modifying Object Properties
  /*
  To modify the value of an object property, simply assign a new value to it. Here's an example:
  */
  person.age = 35;
  person['isStudent'] = true;
  
  ////Methods
  /*
  In JavaScript objects, functions are often referred to as methods. You can define methods inside an object, and they can access the object's properties using the this keyword. Here's an example:
  */
  const person = {
    name: 'John',
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  person.greet();   // Output: Hello, my name is John.
  
////Object Iteration
/*
To iterate over the properties of an object, you can use a for...in loop. Here's an example:
*/
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  ////Object Methods and Prototypes
  /*
  JavaScript provides built-in methods for objects, such as Object.keys(), Object.values(), and Object.entries(), which allow you to extract information about an object's properties.

Additionally, you can use prototypes to add methods and properties to objects. Prototypes allow you to define shared behavior among multiple objects.

Summary
JavaScript objects are an essential part of the language and are used to represent and manipulate complex data structures
  */






 /*
 In JavaScript, iteration refers to the process of repeatedly executing a block of code or performing an action on a collection of items. It allows you to iterate over elements in an array, characters in a string, properties in an object, or other iterable data structures.

JavaScript provides several mechanisms for iteration, including loops and higher-order functions. Let's explore some commonly used iteration techniques in JavaScript:

1. for Loop: The `for` loop is a fundamental iteration construct in JavaScript. It allows you to execute a block of code repeatedly for a specified number of iterations. The loop typically consists of an initialization statement, a condition for continuing the loop, an iteration statement, and the code to be executed in each iteration.

```javascript
*/
for (let i = 0; i < array.length; i++) {
  // Code to be executed for each iteration
}
````
/*
2. for...of Loop: The `for...of` loop is a modern addition to JavaScript that provides a simpler syntax for iterating over iterable objects such as arrays, strings, and other collections. It allows you to loop directly over the values of the collection without worrying about indices or accessing elements by index.

```javascript
*/
for (let item of iterable) {
  // Code to be executed for each iteration
}
````
/*
3. forEach() Method: The `forEach()` method is a higher-order function available on arrays. It allows you to iterate over each element of an array and execute a provided callback function for each element. The callback function takes the current element, the current index, and the entire array as its parameters.

```javascript
*/
array.forEach(function(element, index) {
  // Code to be executed for each iteration
});
````
/*

4. while Loop: The `while` loop repeatedly executes a block of code as long as a specified condition is true. It is useful when the number of iterations is not known in advance or when the loop termination depends on a specific condition.

```javascript
*/
while (condition) {
  // Code to be executed for each iteration
}
````
/*
5. do...while Loop: The `do...while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once before checking the loop condition. It first executes the code block and then evaluates the loop condition.

```javascript
*/
do {
  // Code to be executed for each iteration
} while (condition);
````
/*
These are some of the common iteration techniques in JavaScript. They provide flexible ways to process and manipulate collections of data. The choice of iteration mechanism depends on the specific requirements of your code and the type of data you need to iterate over.
 */