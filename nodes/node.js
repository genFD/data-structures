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
// ice cream shop that sells three flavors: strawberry, vanilla, and coconut. The signature sundae is made of these three flavors, but our new hires have a hard time remembering the order.
// const strawberryNode = new Node("Berry Tasty");
// const vanillaNode = new Node("Vanilla");
// const coconutNode = new Node("Coconuts for Coconut");

// Now let’s put these ice cream nodes in order. vanilla goes first, followed by strawberry. Finally, coconut goes after strawberry.
// vanillaNode.setNextNode(strawberryNode);
// strawberryNode.setNextNode(coconutNode);
// coconutNode.setNextNode(null);
// We will use currentNode to iterate through the nodes
// let currentNode = vanillaNode;
// Create a while loop that will only iterate when the currentNode is not null
// while (currentNode != null) {
// Inside the while loop, log out the currentNode’s data, and update currentNode to the next node.
//   console.log(currentNode.data);
//   currentNode = currentNode.getNextNode();
// }

module.exports = Node;
