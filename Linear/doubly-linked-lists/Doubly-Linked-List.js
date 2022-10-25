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
  // -removeByData()
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
  swap(data1, data2) {
    let node1Prev = null;
    let node2Prev = null;
    let node1 = this.head;
    let node2 = this.head;
    // first edge case : the two nodes to be swapped are the same
    if (data1 === data2) {
      console.log("Elements are the same - no swap to be made");
      return;
    }

    while (node1 !== null) {
      if (node1.data === data1) {
        break;
      }
      node1Prev = node1;
      node1 = node1.getNextNode();
    }

    while (node2 !== null) {
      if (node2.data === data2) {
        break;
      }
      node2Prev = node2;
      node2 = node2.getNextNode();
    }
    // second edge case : there is no matching node for one of the inputs
    if (node1 === null || node2 === null) {
      console.log("Swap not possible - one or more element is not in the list");
      return;
    }

    if (node1Prev === null) {
      this.head = node2;
    } else {
      node1Prev.setNextNode(node2);
    }

    if (node2Prev === null) {
      this.head = node1;
    } else {
      node2Prev.setNextNode(node1);
    }
    let temp = node1.getNextNode();
    node1.setNextNode(node2.getNextNode());
    node2.setNextNode(temp);
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

// ###-------ADDTOHEAD-------######

// ###-------ADDTOTAIL-------######

// ###-------REMOVEFROMTAIL-------######

// ###-------REMOVEBYDATA-------######

// ###-------SWAP-------######

/*
 Swapping two elements implies two things:
 1- finding the elements to be swapped
 2- reset the pointers of the nodes that precede them to maintain the integrity of the list

 we also need to account for two edge cases:
 - data to be swapped are the same
 - there's no matching node for one of the input.

 ****** The general steps for doing so is as follows:

-step1: 
   -    Iterate through the list looking for the node that matches data1 to be swapped (node1), keeping track of the node’s previous node as you iterate (node1Prev)

  -   Repeat step 1 looking for the node that matches data2 

-step2: 

-    If node1Prev is null, node1 was the head of the list, so set the list’s head to node2
Otherwise, set node1Prev‘s next node to node2

-    If node2Prev is null, set the list’s head to node1
Otherwise, set node2Prev‘s next node to node1

-step3: 

-   Set node1‘s next node to node2‘s next node

-  Set node2‘s next node to node1‘s next node


 ######Implementing steps 1  : Finding the Matching and Preceding Nodes

 - setting node1 and node2 equal to the head of the list, and then creating two while loop that runs while node1 & node2 isn’t null. 

- Inside the loop, we will check if node1‘s data matches data1 and if node2‘s data matches data2. 
       If so, we break out of the loop as we have found the correct node.
       If there is no match, we update node1Prev/node2Prev to be node1/node2 and move node1/node2 to its next node

 ######Implementing steps 2: Updating the Preceding Nodes’ Pointers

- We will start by checking if node1Prev is null. If it is, then the node1 is the head of the list, and so we will update the head to be node2. 

- If node1Prev isn’t null, then we set its next node to node2:

- repeat same steps for node2Prev


 ######Implementing steps 3: Updating the Nodes’ Next Pointers

 - The last step is to update the pointers from node1 and node2.


 ######Edge Cases

1st:
there’s no point in executing the whole function if it isn’t necessary. We can add a brief check at the beginning of the function that checks if the data1 is the same as data2, and then return to end the function:

 2nd:
 this has a quick fix. We can put in an if that checks if either node1 or node2 is null. If they are, we can print a statement that explains a match was not found, and return to end the method. We can put this right after the while loops that iterate through the list to find the matching nodes


#####Time and space complexity

Time and Space Complexity
The worst case for time complexity in swapNodes() is if both while loops must iterate all the way through to the end (either if there are no matching nodes, or if the matching node is the tail). This means that it has a linear big O runtime of O(n), since each while loop has a O(n) runtime, and constants are dropped.

There are four new variables created in the function regardless of the input, which means that it has a constant space complexity of O(1).


*/
