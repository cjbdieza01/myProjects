const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index, array) {
    console.log(`Processing element ${number} at index ${index} of ${array}`);
    // You can perform any logic or operation here based on the current element or index
});

// Output:
// Processing element 1 at index 0
// Processing element 2 at index 1
// Processing element 3 at index 2
// Processing element 4 at index 3
// Processing element 5 at index 4
