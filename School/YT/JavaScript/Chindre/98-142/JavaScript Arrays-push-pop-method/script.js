// let names = new Array ("john", "jay", "ana", "raul", 
// "martin")



// addName()
// removeName()



// function addName() {
//     // let names2 = names.push("caleb")
//     document.write(names.push("caleb") + "<br>");
//     document.write(names + "<br>");
// }

// function removeName() {
//     document.write(names.pop() + "<br>")
// }

// document.write(names);


let fruits = new Array('apple', 'banana', 'cherry', 'dayap', 'eggplant', 'frutos');
// console.log(fruits.push('guava'));
// console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    
    console.log(i, fruits[i]);
    console.log('removed element is: ', fruits.pop());
}
