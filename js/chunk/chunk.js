// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//

// Steps
// - Create an empty array to hold the chunks called **chunked**
// - Create **idx** start at '0'
// - While **idx** is less than **array.length**
//      - Push a slice of length **size** from **array**
//        into **chunked**
//      - Add **size** to **idx**
function chunk(array, size) {
    const chunked = [];
    let idx = 0;

    while (idx < array.length) {
        chunked.push(array.slice(idx, size + idx));
        idx += size;
    }

    return chunked;
}

// Steps
// - Create an empty array to hold the chunks called **chunked**
// - For each element in the **un-chunked** array
//      - Retrieve the last element in **chunked**
//      - If the last element does not exist,
//        or if its length is equal to chunk size
//          - Push a new chunk into **chunked** with
//            the current element
//      - Else add the current element into the chunk
//
// function chunk(array, size) {
//     const chunked = [];
//
//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//
//     return chunked;
// }

export default chunk;
