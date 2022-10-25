class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
  getNextNode() {
    return this.next;
  }
  getPreviousNode() {
    return this.previous;
  }
  setNextNode(node) {
    if (node instanceof Node || node == null) {
      this.next = node;
    } else {
      throw new Error("Next node must be instance of node or Null");
    }
  }
  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error("Previous node must be a member of the Node class");
    }
  }
}

const firstNode = new Node("firstNode");
const secondNode = new Node("secondNode");
firstNode.setNextNode(secondNode);
console.log(firstNode.getNextNode());

module.exports = Node;
