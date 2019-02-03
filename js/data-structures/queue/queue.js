// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
//
// First In First Out
// FIFO

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
     * @return {Any} The last record of the Queue
     */
    remove = () => {
        return this.data.pop();
    };
}

export default Queue;
