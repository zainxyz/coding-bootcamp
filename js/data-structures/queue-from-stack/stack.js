class Stack {
    /**
     * Data Store for the Queue
     *
     * @type {Array}
     */
    data = [];

    /**
     * Add a record to a Queue.
     *
     * @method push
     * @param  {Any} record Value to add to the queue
     */
    push = record => {
        this.data.push(record);
    };

    /**
     * Remove a record at the end of a Queue.
     *
     * @method pop
     * @return {Any} The last record of the Queue
     */
    pop = () => {
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

export default Stack;
