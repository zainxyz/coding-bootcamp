// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    // If max is not set to null, and the current node's data is
    // greater than the max value, there is something wrong with
    // the binary search tree.
    if (max !== null && node.data > max) {
        return false;
    }
    // If min is not set to null, and the current node's data is
    // less than the min value, there is something wrong with
    // the binary search tree.
    if (min !== null && node.data < min) {
        return false;
    }
    // If we have a node on the left hand side,
    // and we run the validate function recursively for the
    // left node, with the left node's data, and current node's data
    // as the max, since there is note on the left.
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    // If we have a node on the right hand side,
    // and we run the validation function recursively for the
    // right node, with the right node's data, and current node's data
    // as the min, since there is a node on the right.
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

export default validate;
