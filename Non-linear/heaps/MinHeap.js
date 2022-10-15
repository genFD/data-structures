class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }
  add(value) {
    console.log(`size before ${this.size}`);
    console.log(`Value to be added ${value}`);
    this.heap.push(value);
    this.size++;
    console.log(`size after ${this.size}`);
    this.bubbleUp();
  }
  bubbleUp() {
    console.log(`Bubble up`);
  }
}
module.exports = MinHeap;
