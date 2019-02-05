// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
//

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    /**
     * Given some `data`, create a new Node
     * and add it to the current Node's `children` list.
     *
     * @method add
     * @param  {Any} data Data to be added to the new node.
     */
    add = data => {
        if (!data) {
            return;
        }
        // Create a new node and push it to the current Node's children.
        this.children.push(new Node(data));
    };

    /**
     * Given some `data`, look @ each child of the current node,
     * and remove any node that matches the provided `data` property.
     *
     * @method remove
     * @param  {Any} data Data to search for in the list of children
     */
    remove = data => {
        if (!data) {
            return;
        }
        // Remove the requested Node from the current children.
        this.children = this.children.filter(child => child.data !== data);
    };
}

export default Node;
