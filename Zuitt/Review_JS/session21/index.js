////// Array Traversal
//overview of JavaScript array traversal techniques.
/*
    1. For Loop: The for loop is a fundamental looping construct in JavaScript that allows you to iterate over an array's elements. Here's an example of how you can use it for array traversal:
*/
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
/*
In the above code, the loop iterates through the array elements using an index variable i. Each element is accessed using the square bracket notation array[i].
*/


/*
    2. forEach() Method: The forEach() method is a built-in method available on arrays in JavaScript. It allows you to execute a provided function once for each element in the array. Here's an example:
*/
const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});
/*
The forEach() method takes a callback function as an argument, which is executed for each element. The current element is passed as an argument to the callback function.
*/

/*
    3. for...of Loop: The for...of loop is a modern iteration construct introduced in ECMAScript 2015 (ES6). It provides a concise way to iterate over iterable objects, including arrays. Here's an example:
*/
const array = [1, 2, 3, 4, 5];

for (const element of array) {
  console.log(element);
}
/*
In the above code, the for...of loop iterates over each element of the array, and the current element is assigned to the element variable.
*/

/*
    4. Map(), Filter(), and Reduce() Methods: JavaScript array methods like map(), filter(), and reduce() can also be used for traversal, depending on the specific use case.
map() creates a new array by applying a function to each element in the original array.
filter() creates a new array containing only the elements that satisfy a certain condition.
reduce() applies a function against an accumulator and each element in the array, reducing it to a single value.
Here's an example that demonstrates these methods:
*/
const array = [1, 2, 3, 4, 5];

// map() example
const mappedArray = array.map(function(element) {
  return element * 2;
});
console.log(mappedArray);

// filter() example
const filteredArray = array.filter(function(element) {
  return element % 2 === 0;
});
console.log(filteredArray);

// reduce() example
const sum = array.reduce(function(accumulator, element) {
  return accumulator + element;
}, 0);
console.log(sum);
/*
These methods offer powerful ways to traverse arrays while performing specific operations on each element.

These are some of the common techniques for traversing arrays in JavaScript. Each method has its own advantages and use cases, so choose the one that best suits your specific requirements. Remember to practice and experiment with these techniques to become more familiar with array traversal in JavaScript.
*/