// Importing the LinkedList class from the linkedList.js module

import { LinkedList } from "./linkedList.js";

class Stack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        // Prepend the value to the linked list (adding to the head of the list)
        this.list.prepend(value)
    }

    pop() {
        // Delete and return the head (first element) of the linked list
        return this.list.deleteHead()
    }

    toArray() {
        // Convert the linked list to an array and return it
        return this.list.toArray()
    }
}


const stack = new Stack()

// Push three products onto the stack
stack.push('product 1')
stack.push('product 2')
stack.push('product 3')

console.log(stack.toArray()); // Output: ['product 3', 'product 2', 'product 1']

// Pop the top product
console.log(stack.pop());// Output: 'product 3'

console.log(stack.toArray()); // Output: ['product 2', 'product 1']
