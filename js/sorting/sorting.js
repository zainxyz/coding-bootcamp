// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // Iterate from idx 0 to arr.length
    // Iterate from idx 0 to arr.length - i
    // ..
    // Find the largest element in the array,
    // and drag it to the right hand side as quickly as possible.
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const lessVal = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lessVal;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let idxOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idxOfMin]) {
                idxOfMin = j;
            }
        }

        if (idxOfMin !== i) {
            const lessVal = arr[idxOfMin];
            arr[idxOfMin] = arr[i];
            arr[i] = lessVal;
        }
    }

    return arr;
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    // if (left.length) {
    //     results.push(...left);
    // } else if (right.length) {
    //     results.push(...right);
    // }
    //
    // return results;

    return [...results, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    // Figure out the center half of the passed in array
    const centerIdx = Math.floor(arr.length / 2);
    // Split the array into two halves
    const leftHalf = arr.slice(0, centerIdx);
    const rightHalf = arr.slice(centerIdx);
    // Call the merge func with the left and right half
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

export { bubbleSort, selectionSort, mergeSort, merge };
