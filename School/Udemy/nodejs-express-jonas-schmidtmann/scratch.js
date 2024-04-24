const person = {
    firstName: "Ace",
    lastName: "Lee",
    age: "31",
    gender: "Male"
};

const {firstName : name1, lastName : name2} = person;
console.log(name2);