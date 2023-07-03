var hey = () => {
    document.write("Hello World!");
}
hey();


let numbers = [1, 2, 3, 4, 5];
numbers.map(function(number){
    console.log (number * 2)
})



let number2 = [61, 2, 3, 4, 5];
let numberz = number2.map(function(number) {
    return number ** 2;
})
console.log(numberz);
/*
Let's break down the code you provided:

```javascript
let numbers = [61, 2, 3, 4, 5];
let numberz = number2.map(function(number) {
  return number ** 2;
});
console.log(numberz);
```

In this code, you have two arrays:

1. The `number2` array with the values `[61, 2, 3, 4, 5]`.
2. The `numberz` array, which is created using the `.map()` method on the `numbers` array.

The callback function `(function(number) { return number ** 2; })` squares each element in the `number2` array.

Let's go step by step:

1. The `.map()` method is called on the `number2` array.
2. The callback function `(function(number) { return number ** 2; })` is executed for each element in the `number2` array.
3. For each element, the callback function returns the square of that element using the exponentiation operator `**`.
4. The `.map()` method collects these squared values and forms a new array, which is assigned to the variable `numberz`.
5. Finally, `console.log(numberz)` is used to output the resulting array.

Based on the provided code, the output will be:

```
[3721, 4, 9, 16, 25]
```

The `numberz` array contains the squared values of each element in the `numbers` array. Specifically, `[61 ** 2, 2 ** 2, 3 ** 2, 4 ** 2, 5 ** 2]`. Therefore, the resulting array is `[3721, 4, 9, 16, 25]`.

*/

/*
Note:
In JavaScript, a callback function is a function that is passed as an argument to another function and is intended to be called or executed at a later point in the program's execution. The function that receives the callback function as an argument can then invoke or execute the callback function as needed.

In your example, function1 is being passed as a callback function to anyFunction. It is typically expected that anyFunction will eventually execute or invoke function1 at the appropriate time, potentially with certain arguments or within a specific context.

The use of callback functions allows for flexibility and extensibility in programming, as it enables the execution of custom logic or behavior at specific points within the code.
*/
