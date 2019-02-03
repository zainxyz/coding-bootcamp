// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    // While there are 2 nodes present ahead,
    // update the slow and fast nodes to next and next.next val.
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        // If the slow and fast are pointing
        // at the exact same node, then we have
        // a circular LinkedList.
        if (fast === slow) {
            return true;
        }
    }
    // If we are out of the while loop,
    // then we do not have a circular LinkedList.
    return false;
}

export default circular;
