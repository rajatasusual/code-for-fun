/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var addTwoNumbers = function(l1, l2) {
    l1 = createLinkedList(l1);
    l2 = createLinkedList(l2);

    let queue1 = [];
    let queue2 = [];

    while (l1) {
        queue1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        queue2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;

    let head = null;

    while (queue1.length || queue2.length || carry) {

        let sum = (queue1.shift() || 0) + (queue2.shift() || 0) + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        let node = new ListNode(sum);
        node.next = head;
        head = node;
    }

    return reverseList(head);

};

function reverseList(head) {
    let prev = null;
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

function createLinkedList(arr) {
    let head = new ListNode();
    let curr = head;
    for (let i = 0; i < arr.length; i++) {
        curr.val = arr[i];
        if (i !== arr.length - 1) {
            curr.next = new ListNode();
            curr = curr.next;
        }
    }
    return head;
}

console.log(addTwoNumbers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[5,6,4]));