// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    // Create an array from 0 - (n + 1)
    const arr = Array.from(new Array(n + 1).keys());
    // Remove the first element '0' from the arr
    arr.shift();
    // Determine what we need to log for each of the element
    // of the array
    for (let num of arr) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log('fizzbuzz');
        } else if (num % 3 == 0) {
            console.log('fizz');
        } else if (num % 5 == 0) {
            console.log('buzz');
        } else {
            console.log(num);
        }
    }
}

// function fizzBuzz(n) {
//     for (let num = 1; num <= n; num++) {
//         if (num % 3 == 0 && num % 5 == 0) {
//             console.log('fizzbuzz');
//         } else if (num % 3 == 0) {
//             console.log('fizz');
//         } else if (num % 5 == 0) {
//             console.log('buzz');
//         } else {
//             console.log(num);
//         }
//     }
// }

module.exports = fizzBuzz;
