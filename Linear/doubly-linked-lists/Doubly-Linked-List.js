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
