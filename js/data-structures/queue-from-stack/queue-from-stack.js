// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

import Stack from './stack';

class Queue {
    stackA = new Stack();
    stackB = new Stack();

    aTob = () => {
        while (this.stackA.peek()) {
            this.stackB.push(this.stackA.pop());
        }
    };

    bToA = () => {
        while (this.stackB.peek()) {
            this.stackA.push(this.stackB.pop());
        }
    };

    add = record => {
        this.stackA.push(record);
    };

    remove = () => {
        this.aTob();

        const removed = this.stackB.pop();

        this.bToA();

        return removed;
    };

    peek = () => {
        this.aTob();

        const peeked = this.stackB.peek();

        this.bToA();

        return peeked;
    };
}

module.exports = Queue;
