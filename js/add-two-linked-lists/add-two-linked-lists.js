// You are given two non-empty linked lists
// representing two non-negative integers.
// The digits are stored in reverse order
// and each of their nodes contain a single
// digit. Add the two numbers and return it
// as a linked list.
//
// You may assume the two numbers do not
// contain any leading zero, except the number 0 itself.
//
// Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
//
// Definition for singly-linked list.
//
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    // const one = parseInt(l1.reverse().join(''));
    // const two = parseInt(l2.reverse().join(''));
    //
    // return one + two;
    // while (l1.length || l2.length) {}
}

export default addTwoNumbers;
