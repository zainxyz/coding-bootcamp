// --- Directions
// Breath-First Traversal
//
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
//
// `width` means Breath-First Traversal
//
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    // Create a dummy token to track when we've reached end of a level.
    const TOKEN = Symbol('token');
    // Initialize the queue with the `root` node and the token.
    const queue = [root, TOKEN];
    // Initialize the width with a counter of `0`
    const width = [0];
    // While the queue has more than 1 element, traverse...
    // Why more than 1? Because in the end, queue will be left with
    // a single element of `TOKEN`.
    while (queue.length > 1) {
        // Extract the first node in the queue...
        const node = queue.shift();
        // If the node is the `TOKEN`...
        if (node === TOKEN) {
            // Append a new counter to our width.
            width.push(0);
            // Append back the node to the end of the queue.
            queue.push(node);
        } else {
            // Otherwise, push all of the children of the current
            // node back into the end of the queue.
            queue.push(...node.children);
            // Increment the very last width.
            width[width.length - 1]++;
        }
    }

    return width;
}

export default levelWidth;
