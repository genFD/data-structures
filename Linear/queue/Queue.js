const LinkedList = require("../singly-linked-lists/LinkedList");

class Queue {
  //maxSize lets us specify the maximum size of a queue, size restriction. when it’s first created but will otherwise default to Infinity because it's larger than other numbers
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    //when queue is first initialized it has 0 nodes
    this.size = 0;
    this.maxSize = maxSize;
  }
  /* 
  ----API------
  enqueue(5) : add node at the end of the list
  dequeue(): remove head node and returns data
  hasRoom() : returns true if the queue has space to add another node
  isEmpty : returns true if the size of a queue is 0
  peek()
  */
  //checks if the current size of the queue is less than the maximum size
  hasRoom() {
    return this.size < this.maxSize;
  }
  //checks if queue is empty
  isEmpty() {
    return this.size == 0;
  }
  enqueue(data) {
    // checks if there is room in the queue to add a new node.
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      // The size property should increase as nodes are added and decrease as nodes are removed.
      this.size++;
      console.log(`Added ${data}! Queue size is now ${this.size}`);
    } else {
      throw new Error(`Cannot add new node, Queue is full = overflow`);
    }
  }
  dequeue() {
    // check for underflow when we attempt to dequeue.
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(`Removed ${data} Queue size is ${this.size}`);
      return data;
    } else {
      throw new Error("Cannot dequeue an empty queue = underflow");
    }
  }
}

const restaurantOrder = new Queue(3);

restaurantOrder.enqueue("apple pie");
restaurantOrder.enqueue("roast chicken");
restaurantOrder.enqueue("quinoa salad");
restaurantOrder.enqueue("creamy chicken mushroom");
module.exports = Queue;

/* 
// ###-------Enqueue-------######
-------------------------------------------
The idea                                 ««
-------------------------------------------

The idea is to 
- add a new node at the end of the underlying linked list
- if the list is empty the new node becomes head and tail
- if it's not it becomes the new tail.

--------------------------------------------
How to implement this                     ««
--------------------------------------------


// ###-------Dequeue-------######
-------------------------------------------
The idea                                 ««
-------------------------------------------

The idea is to 
- remove the current head and replace it with the following node
- if there was only one node in the list
- if it's not it becomes the new tail.

--------------------------------------------
How to implement this                     ««
--------------------------------------------

*/
