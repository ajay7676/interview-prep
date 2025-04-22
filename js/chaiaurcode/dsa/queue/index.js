class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) return "Underflow";
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) return "Queue is empty";
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items);
    }
  }
//   / Usage
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // 10,20,30
// console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20