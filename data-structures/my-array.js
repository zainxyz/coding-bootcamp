/* eslint-disable valid-jsdoc */

/**
 * Implement an Array in JavaScript.
 *
 * @type {Constructor}
 */
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get = idx => {
        // Return the item at the specified index.
        return this.data[idx];
    };

    push = item => {
        // Add the item to the end of our array.
        this.data[this.length] = item;
        // Increment the length after adding the item.
        this.length++;
        // Return the new length;
        return this.length;
    };

    pop = () => {
        // Extract the last item, since we will be deleting it.
        const lastItem = this.data[this.length - 1];
        // Delete the last item.
        delete this.data[this.length - 1];
        // Decrease the length.
        this.length--;
        // Return the deleted item.
        return lastItem;
    };

    delete = idx => {
        const itemToDelete = this.data[idx];
        // Update the index of each of the items
        // after the idx that is to be deleted.
        this.shiftItems(idx);
        // Return the deleted item.
        return itemToDelete;
    };

    shiftItems = idx => {
        // Loop through the items, and shift their index.
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        // Delete the very last item in the array.
        delete this.data[this.length - 1];
        // Decrease the length.
        this.length--;
    };
}

export default MyArray;
