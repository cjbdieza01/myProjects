// // let number = 0
// // for(let i = 0; i < 100; i++) {
// //     number = number+1
// //     if( number%3 === 0 ) {
// //         if (number%3 === 0 && number%5 === 0) {
// //             console.log(number + " - Fizz" + "- FizzBizz")
// //         } else {
// //             console.log(number + " - Fizz")
// //         }
// //     }
// //     else if ( number%5 === 0) {
// //         if(number%5 && number%3 === 0)
// //         console.log(number + " - Bizz");
// //     }
// //     else  {
// //         console.log(number);
// //     }
// // }

// for(let x = 0; x<=4; x++){
//     console.log(" # # # #\n" + "# # # #");
// }

function createChessboard(size) {
    let chessboard = "O";
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                chessboard += "O";
            } else {
                chessboard += "#";
            }
        }
        chessboard += "\n";
    }
    return chessboard;
}

const size = 8;
console.log(createChessboard(size));
