const myArray = new Array(1, 2, 3, 4 , "five", "six", 7, "eight");
let myNewArray = [];
if (![7, "eight"].includes(myArray)) {
    myNewArray.push(myArray);
};
console.log(myNewArray);
