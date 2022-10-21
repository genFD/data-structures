const Node = require("../../nodes/node");
class LinkedList {
  constructor() {
    this.head = null;
  }
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  addToTail(data) {
    let tail = this.head;
    if (tail == null) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode()) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }
  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output = output + "<tail>";
    console.log(output);
  }
}
module.exports = LinkedList;
