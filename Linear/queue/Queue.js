const LinkedList = require("../singly-linked-lists/LinkedList");

class Queue {
  constructor() {
    this.queue = new LinkedList();
    //when queue is first initialized it has 0 nodes
    this.size = 0;
  }
  /* 
  ----API------
  enqueue(5)
  dequeue(3)
  peek()
  */
  enqueue(data) {
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data}! Queue size is now ${this.size}`);
  }
}
module.exports = Queue;
