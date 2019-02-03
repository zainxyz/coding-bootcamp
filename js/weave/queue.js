// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
    /**
     * Data Store for the Queue
     *
     * @type {Array}
     */
    data = [];

    /**
     * Add a record to a Queue.
     *
     * @method add
     * @param  {Any} record Value to add to the queue
     */
    add = record => {
        this.data.unshift(record);
    };

    /**
     * Remove a record at the end of a Queue.
     *
     * @method remove
     * @return {Any}  The last record of the Queue
     */
    remove = () => {
        return this.data.pop();
    };

    /**
     * **Peek** and return the last record, that is to be removed.
     *
     * @method peek
     * @return {Any} The last record of the Queue
     */
    peek = () => {
        return this.data[this.data.length - 1];
    };
}

export default Queue;
