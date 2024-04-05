const fs = require('fs');
// fs.writeFile("message.txt", "Hello World\n", err => {
//     if (err) throw err;
//     console.log("The File Has Been Save");
// });

fs.readFile('message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})