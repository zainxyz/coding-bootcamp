// --- Directions
// Implement class LinkedList
// See 'directions' document

import Node from './node';

class LinkedList {
    constructor() {
        // By default, there are no nodes in the LinkedList.
        this.head = null;
    }

    /**
     * Creates a new node from argument 'data' and
     * assigns the resulting node to the 'head' property.
     *
     * @method insertFirst
     * @param  {Any}       data Some data
     */
    insertFirst = data => {
        // Create a new node and assign it as the new `head` node.
        // Pass in the current `head` node as the next node in the chain.
        // this.head = new Node(data, this.head);

        // Code Reuse
        this.insertAt(data, 0);
    };

    /**
     * Returns the number of nodes in the LinkedList.
     *
     * @method size
     * @return {number} The size of the LinkedList
     */
    size = () => {
        let count = 0;
        // Assign the very first node as our `head` node.
        let node = this.head;
        // While there is a node available,
        // increment the count,
        // re-assign the next node to the current node.
        while (node) {
            count++;
            node = node.next;
        }
        // Return the count.
        return count;
    };

    /**
     * Returns the first node of the LinkedList.
     *
     * @method getFirst
     * @return {Node}   The first node of the LinkedList
     */
    getFirst = () => {
        // The first node is the head node.
        // return this.head;

        // Code Reuse
        return this.getAt(0);
    };

    /**
     * Returns the last node of the LinkedList.
     *
     * @method getLast
     * @return {Node}   The last node of the LinkedList
     */
    getLast = () => {
        // // If there is no `head` node, return null right away.
        // if (!this.head) {
        //     return null;
        // }
        // // Assign the very first node as our `head` node.
        // let node = this.head;
        // // While there is a valid node present...
        // while (node) {
        //     // If there is no next node,
        //     // then return the current node since
        //     // the current node has to be the last node
        //     // in the LinkedList.
        //     if (!node.next) {
        //         return node;
        //     }
        //     // Otherwise, update the node to the next node.
        //     node = node.next;
        // }

        // Code Reuse
        return this.getAt(this.size() - 1);
    };

    /**
     * Empties the LinkedList of any nodes.
     *
     * @method clear
     */
    clear = () => {
        // Clear the LinkedList.
        this.head = null;
    };

    /**
     * Removes only the first node of the LinkedList.
     * The list's head should now be the second element.
     *
     * @method removeFirst
     */
    removeFirst = () => {
        // If there is a next node present,
        // set the current `head` node to the next node.
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            // Otherwise, if there is no next node,
            // then empty out the LinkedList.
            this.clear();
        }

        // Alternative Solution
        //
        // if (!this.head) {
        //     return;
        // }
        // this.head = this.head.next;
    };

    /**
     * Removes the last node of the chain.
     *
     * @method removeLast
     */
    removeLast = () => {
        // If the LinkedList is empty, return.
        if (!this.head) {
            return;
        }
        // If there is no next node in the LinkedList,
        // clean out the current node.
        if (!this.head.next) {
            this.clear();

            return;
        }
        // Assign a ref to the current and next nodes.
        // let prev = this.head;
        let prev = this.getAt(0);
        // let node = this.head.next;
        let node = this.getAt(1);
        // While there is a next node present...
        while (node.next) {
            // Move the current node to the prev node.
            prev = node;
            // Move the next node to the current node.
            node = node.next;
        }
        // If we are out of the while loop,
        // there are no more nodes,
        // so we will empty out the prev node.
        prev.next = null;
    };

    /**
     * Inserts a new node with provided data at the end of the chain.
     *
     * @method insertLast
     * @param  {Any}      data Some data
     */
    insertLast = data => {
        // Get the last node in the LinkedList.
        const lastNode = this.getLast();
        // If there is a lastNode...
        if (lastNode) {
            // Assign a next node to it with the new data.
            lastNode.next = new Node(data);
        } else {
            // If the chain is empty...
            this.insertAt(data, 0);
        }
    };

    /**
     * Returns the node at the provided index.
     *
     * @method getAt
     * @param  {number} idx The idx to get the node @
     * @return {Node}       The node at the requested idx
     */
    getAt = idx => {
        // Get a ref to the current head.
        let node = this.head;
        let count = 0;
        // While node is available...
        while (node) {
            // If the count is @ requested idx,
            // return the current node.
            if (count === idx) {
                return node;
            }
            // Increment the count and the node.
            count++;
            node = node.next;
        }
        // Return `null` for all the other edge cases.
        return null;
    };

    /**
     * Removes node at the provided index.
     *
     * @method removeAt
     * @param  {number} idx The idx to remove the node @
     */
    removeAt = idx => {
        // If there are no nodes, return;
        if (!this.head) {
            return;
        }
        // If the idx is 0, assign the next node o the `head`.
        if (idx === 0) {
            this.head = this.head.next;
            return;
        }
        // Get the previous node based on the requested idx.
        const prev = this.getAt(idx - 1);
        // If there is no prev node or the prev.next node, then return
        if (!prev || !prev.next) {
            return;
        }
        // Otherwise, set the prev node's next to the next node
        // of the requested idx.
        prev.next = prev.next.next;
    };

    /**
     * Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.
     *
     * @method insertAt
     * @param  {Any}    data Data
     * @param  {number} idx  The idx to insert the new node @
     */
    insertAt = (data, idx) => {
        // If the list is empty or the idx is 0,
        // we want to insert the new node at the beginning of the LinkedList.
        if (!this.head || idx === 0) {
            this.head = new Node(data, this.head);
            // this.insertFirst(data);
            return;
        }
        // Get the prev node,
        // if falsy, that means we're at the last node,
        // thus get the last node.
        const prev = this.getAt(idx - 1) || this.getLast();
        // Create a new node and assign the prev.next as the next node.
        const node = new Node(data, prev.next);
        // Update the next for the prev node with the new node.
        prev.next = node;
    };

    /**
     * Calls the provided function with every node of the chain.
     *
     * @method forEach
     * @param  {Function} fn Callback invoked for every node
     */
    forEach = fn => {
        // Assign the
        let node = this.head;
        let idx = 0;
        // While node is present, invoke the `fn`...
        while (node) {
            fn(node, idx);
            // Update the node and idx.
            node = node.next;
            idx++;
        }
    };

    /**
     * Convert the LinkedList into a generator function.
     *
     * @type {Generator}
     */
    *[Symbol.iterator]() {
        // Initially assign the current head.
        let node = this.head;
        // While we have a node...
        while (node) {
            // yield on that node...
            yield node;
            // Advance the node to the next.
            node = node.next;
        }
    }
}

export default LinkedList;
