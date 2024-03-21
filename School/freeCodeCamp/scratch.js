function exercise(n) {
    let output = [];
    if (n === 1) {
        output = 0;
    } else if (n === 2) {
        output = [0, 1]
    } else {
        output = [0, 1]
        for (let e = 2; e < n; e++) {
            output.push(output[output.length - 2] + output[output.length - 1])
            console.log(output)
        }
    }
}

exercise(10);

