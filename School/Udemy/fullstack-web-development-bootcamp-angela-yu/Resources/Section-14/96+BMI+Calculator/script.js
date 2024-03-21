function bmi(height, weight) {
    let heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}
let myBMI = bmi(172, 62);
console.log(myBMI);