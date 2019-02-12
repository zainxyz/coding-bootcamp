// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
//

class Tree {
    constructor() {
        this.root = null;
    }

    /**
     * Breath-First Traversal
     * Iterate through each level of the tree from left-to-right.
     *
     * @method traverseBF
     * @param  {Function} fn Callback fired on each node
     */
    traverseBF = fn => {
        // Create a queue of nodes, starting with the `root` node.
        const queue = [this.root];
        // While there are some nodes available, in the queue,
        // traverse through the queue...
        while (queue.length) {
            // Remove the very first node.
            const first = queue.shift();
            // Push all of the first node's children into the **end** of the queue.
            queue.push(...first.children);
            // Invoke the callback fn on that first node.
            fn(first);
            // Carry on with the queue...
        }
    };

    bfSearch = () => {
        let currentNode = this.root;

        let list = [];
        let queue = [];

        queue.push(currentNode);

        while (queue.length) {
            currentNode = queue.shift();

            list.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return list;
    };

    /**
     * Depth-First Traversal
     * With Depth-First Traversal we try to get to
     * the bottom of the tree as fast as possible.
     *
     * @method traverseDF
     * @param  {Function} fn Callback fired on each node
     */
    traverseDF = fn => {
        // Create a queue of nodes, starting with the `root` node.
        const queue = [this.root];
        // While there are some nodes available, in the queue,
        // traverse through the queue...
        while (queue.length) {
            // Remove the very first node.
            const first = queue.shift();
            // Push all of the first node's children into the **beginning** of the queue.
            queue.unshift(...first.children);
            // Invoke the callback fn on that first node.
            fn(first);
            // Carry on with the queue...
        }
    };
}

export default Tree;
