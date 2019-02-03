// Node Class
// Creates a class instance to represent a node.
// The node should have two properties, 'data' and 'next'.
// Accept both of these as arguments to the 'Node' constructor,
// then assign them to the instance as properties 'data' and
// 'next'. If 'next' is not provided to the constructor,
// then default its value to be 'null'.
//

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export default Node;
