let getName = prompt("Enter your name: ");
let loveName = prompt("Enter the name of your love one: "); // Corrected typo

function chance() {
    const chanceLove = Math.floor((Math.random() * 100) + 1);
    if (chanceLove >= 80) {
        alert(`The chance of ${getName} and ${loveName} is = ${chanceLove}`);
    }
    alert("Work hard!");
}

chance();
