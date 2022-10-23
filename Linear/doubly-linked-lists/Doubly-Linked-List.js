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
