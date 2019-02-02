// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // Create an empty array of arrays.
    // const results = [...Array(n).fill([])];
    const results = [];
    for (let r = 0; r < n; r++) {
        results.push([]);
    }
    // Create the counter to keep track of the current number.
    // It starts at 1.
    let counter = 1;
    // Create variables to keep track of rows / cols
    let endCol = n - 1;
    let endRow = n - 1;
    let startCol = 0;
    let startRow = 0;

    while (startCol <= endCol && startRow <= endRow) {
        // top row
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // right col
        for (let j = startRow; j <= endRow; j++) {
            results[j][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom row
        for (let k = endCol; k >= startCol; k--) {
            results[endRow][k] = counter;
            counter++;
        }
        endRow--;

        // start col
        for (let l = endRow; l >= startRow; l--) {
            results[l][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    console.log(results);
    // Return the results.
    return results;
}

export default matrix;
