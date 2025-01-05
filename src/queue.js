const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor(value) {
		this.head
		this.tail
	}

	getUnderlyingList() {
		return this.head
	}

	enqueue(value) {
    let elem = new ListNode(value)
		if(!this.head && !this.tail) {
      this.head = elem
      this.tail = elem
    }
    this.tail.next = elem
    this.tail = elem
	}

	dequeue() {
		let deleted = this.head
    if(this.head == this.tail) {
      this.head = null
      this.tail = null
      return deleted.value
    }
    this.head = this.head.next
    return deleted.value
	}
}

module.exports = {
  Queue
};
