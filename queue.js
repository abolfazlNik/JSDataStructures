import { LinkedList } from "./linkedList.js";

class Queue {
    constructor() {
        this.list = new LinkedList()
    }

    // Method to add an element to the end of the queue
    enqueue(value) {
        this.list.append(value)
    }

    // Method to remove and return the element from the front of the queue
    dequeue() {
        return this.list.deleteHead()
    }

    toArray() {
        return this.list.toArray()
    }
}

const queue = new Queue()

queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(6)

console.log(queue.toArray()); // Output: [2, 4, 6]
console.log(queue.dequeue()); // Output: 2
console.log(queue.toArray()); // Output: [4, 6]