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

/* 
// ###-------ADDTOHEAD-------######

-------------------------------------------
The idea                                 ««
-------------------------------------------

The idea is to 
- add a new node before the current list head if the list is not empty i.e list has already a head 
- otherwise if the list is empty we just want to set the list head to our new Node.

--------------------------------------------
How to implement this                     ««
--------------------------------------------

//* need new head in any cases 
newHead = create new node

//* need keep track of the current list head
currentHead = list head

//* any cases set list head to our new head
list head =  newHead

//* if list is not empty

if currentHead is not null then
   set list head next node to current Head

****pseudo:

1 newHead = create new node
2 currentHead = list head
3 list head =  newHead
4 if currentHead is not null then
5   set list head next node to current Head

// ###-------ADDTOTAIL-------######


-------------------------------------------
The idea                                 ««
-------------------------------------------

The idea is to 
- find the last node in the list
- add a new node directly after it
if the list is empty ie list head is null then our new node becomes head and tail.


pseudo:
newTail  = create new node
currentTail = list head
if list head is null then
   list head = newTail
else
while node after current node is not null then
  move forward one node : set currentTail to node directly after it 
  ---
set currentTail's next node to new node/new tail
  
// ###-------REMOVEFROMTAIL-------######

// ###-------REMOVEBYDATA-------######

*/
