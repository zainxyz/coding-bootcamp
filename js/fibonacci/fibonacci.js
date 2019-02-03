// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

import memoize from 'js/memoize';

// eslint-disable-next-line import/no-mutable-exports
let fib;

// Exponential Time `O(2^n)`
function fibRecursive(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

// Linear Runtime `O(n)`
// Simple `for` loop that iterates over a closed set.
// function fibLinear(n) {
//     const result = [0, 1];
//
//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];
//         result.push(a + b);
//     }
//
//     return result[n];
// }

// const fib = fibRecursive;
// const fib = fibLinear;
fib = memoize(fibRecursive);

export default fib;
