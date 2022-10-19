class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }
  getNextNode() {
    return this.next;
  }
}

const firstNode = new Node("firstNode");
const secondNode = new Node("secondNode");
firstNode.setNextNode(secondNode);
console.log(firstNode.getNextNode());
// ice cream shop that sells three flavors: strawberry, vanilla, and coconut. The signature sundae is made of these three flavors, but our new hires have a hard time remembering the order.
const strawberryNode = new Node("Berry Tasty");
const vanillaNode = new Node("Vanilla");
const coconutNode = new Node("Coconuts for Coconut");

// Now let’s put these ice cream nodes in order. vanilla goes first, followed by strawberry. Finally, coconut goes after strawberry.
vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);
coconutNode.setNextNode(null);

let currentNode = vanillaNode;
while (currentNode != null) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}

module.exports = Node;
