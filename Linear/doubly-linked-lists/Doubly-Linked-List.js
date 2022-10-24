const Node = require("../../nodes/node");

class DoublyLinkedList {
  contructor() {
    this.head = null;
    this.tail = null;
  }
  //^^^^^-------- api -------^^^^//
  // -addToHead(2)
  // -addToTail(3)
  // -removeFromHead()
  // -removeFromTail()
  // -addToIndex(3)
  // -printList()
  //^^^ ----------------------^^^^^^//
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    if (!this.tail) {
      this.tail = newHead;
    }
  }
  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    let currentHead = this.head;
    while (currentHead.getNextNode()) {
      currentHead = currentHead.getNextNode();
    }
    currentTail.setNextNode(newTail);
    newTail.setPreviousNode(currentTail);
    this.tail = newTail;
    if (!this.head) {
      this.head = new Node(data);
    }
  }
  removeFromTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail == this.head) {
      this.removeFromHead();
    }
    return removedTail.data;
  }
  removeFromHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead == this.tail) {
      this.removeFromTail();
    }
    return removedHead.data;
  }
  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove.data;
  }
  printList() {
    let currentNode = this.head;
    let output = "";
    while (currentNode) {
      output += " <--" + currentNode.data + "-->" + " ";
      currentNode = currentNode.getNextNode();
    }

    console.log(output);
  }
}
const newList = new DoublyLinkedList();
newList.addToHead(2);
newList.addToHead(1);
newList.addToHead(4);

newList.printList();
