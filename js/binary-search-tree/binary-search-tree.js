// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    /**
     * Insert a value to one of the nodes in the tree.
     * Recursion
     *
     * @method insert
     * @param  {Any}  data Data to be inserted
     */
    insert = data => {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data && !this.left) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    };

    /**
     * Determine which node in the tree contains the given data.
     *
     * @method contains
     * @param  {Any}    data Data to check
     * @return {Node}        The node that contains the data
     */
    contains = data => {
        // If the current node contains the data,
        // return the current node.
        if (this.data === data) {
            return this;
        }
        // Otherwise, go through and check if we should go left,
        // or right of the current node and recursively call the `contains()` method.
        if (data < this.data && this.left) {
            return this.left.contains(data);
        } else if (data > this.data && this.right) {
            return this.right.contains(data);
        }
        // Return `null` if data is not present, or we can't find it.
        return null;
    };
}

module.exports = Node;
