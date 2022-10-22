const Node = require("../../nodes/node");
class LinkedList {
  constructor() {
    this.head = null;
  }
  //adding a new head to the beginning of the list, requires to create a link between the new head node and the current head node to maintain connection with the following nodes in the list
  append(data) {
    const newHead = new Node(data);
    //preserve the original head
    const currentHead = this.head;
    // change list head to new head
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  prepend(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode()) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  removedHead() {
    // keep track of the original listhead
    const removedHead = this.head;
    //covering empty list scenario
    if (!removedHead) {
      return;
    }
    //setting "new list head" to equal to the previous
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
  // addHead(data) {
  //   let newHeadNextNode = currentHead;
  //   let currentHead = this.head;
  //   const newHead = new Node(data);
  //   if (!currentHead) {
  //     this.head = newHead;
  //   } else {
  //     newHead.setNextNode(currentHead);
  //     this.head = newHead;
  //   }
  // }
  // addToTail(data) {
  //   currentTail.nextNode = newTail
  //   if (!this.head) {
  //     this.head = new Node(data);
  //   } else {
  //     let currentTail = this.head;
  //     while (currentTail.getNextNode()) {
  //       currentTail = currentTail.getNextNode();
  //     }
  //     currentTail.setNextNode(new Node(data));
  //   }
  // }
}
// API
//----- append
//------preprend
//------removeHead
//------removeTail
//------insertion

//****** */ add to head ********
// two scenarios : either the list is empty or its not
//if the list is empty, we want to
// create a new node
// set the list head to the new node
// otherwise
// set the list head to the new node
// set the current head as the next node of the new head

// new head = new node
// currenthead = list head
//list head = new new Head
// if currenthead
// listhead.nextNode(currentHead)

//****** */ add to tail ********
// two scenarios : either the list is empty or its not
// 1---- list is empty
// new node will be head and tail, so set list head to new node
// 2---- list is not empty
//iterate through the list
// a while loop that runs while tail has a next node. Inside the loop, set tail equal to its next node.
//find current tail
//set current tail next node to be new node

//-----pseudo
// addToTail(data)
// let newTail = new Node(data)
// if listHead == null :
// this.head = newTail
//else:
// while listhead next is true :
//  set currentTailG

//****** */ remove to head ********
// idea is to break connection the current head of the list and the following nodes. considering two scenarios
// ---1 list is empty
// then there is nothing to return, nothing to remove
// ---2 list is not empty
// set the "new" list head equal to the original head next node and return the original head
//-----pseudo
//save originalhead in a variable
// if listEmpty :
// return end method
//else :
// listHead = originalHead.nextNode
// return originalHead
