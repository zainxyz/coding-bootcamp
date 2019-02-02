// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, level = '') {
    const colLength = n * 2 - 1;
    const midpoint = Math.floor(colLength / 2);

    if (n === row) {
        return;
    }

    if (colLength === level.length) {
        console.log(level);

        return pyramid(n, row + 1);
    }

    let add;

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    return pyramid(n, row, level + add);
}

// Steps
//
// - Iterate from 0 to n (iterate through rows)
//      - Create an empty string **level**
//      - Iterate from 0 to ?? (columns)
//          - If the column should have a #
//              - Add a '#' to **level**
//          - Else
//              - Add a ' ' to **level**
//      - Console log **level**
//
// function pyramid(n) {
//     const colLength = n * 2 - 1;
//     const midpoint = Math.floor(colLength / 2);
//
//     for (let row = 0; row < n; row++) {
//         let level = '';
//
//         for (let col = 0; col < colLength; col++) {
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//
//         console.log(level);
//     }
// }

export default pyramid;
