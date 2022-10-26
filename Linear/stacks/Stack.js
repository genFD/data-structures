const LinkedList = require("../singly-linked-lists/LinkedList");

class Stack {
  // instantiating the stack property with a construction of a new LinkedList
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    //keep track of the size of our stack to prevent stack Overflow
    this.size = 0;
    this.maxSize = maxSize;
  }
  /* 
  ----API------
  - push(5) : add a new value to the head of this.stack
  - pop(): remove head node and returns data
  - peek() : returns the data assigned to the stack’s top element
  - hasRoom() : returns true if the queue has space to add another node
  - isEmpty : returns true if the size of a queue is 0
  */
  // guard against pushing items to our stack when it’s full
  hasRoom() {
    return this.size < this.maxSize;
  }
  isEmpty() {
    return this.size == 0;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stack.head.data;
    }
  }
  push(value) {
    if (this.hasRoom) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error("Stack is Full");
    }
  }
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
    } else {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    }
  }
}
