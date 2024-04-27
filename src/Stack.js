// Creates a node containing the data and a reference to the next item
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // Create a new node
    // Add data to the new node, and
    // Have the pointer point to the top
    this.top = new Node(value, this.top); // arguments to parameters: value => value; this.top => next; 
    return this; 
  }

  pop() {
    const popped = this.top;
    this.top = popped.next;
    return popped.value; 
  }
}