class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    // Add a value to the tree
    add(value) {
        // If the node is empty, set the value here
        if (this.value === null) {
            this.value = value
            return
        }

        // If the value to add is greater, add to the right subtree
        if (this.value < value) {
            // If there is a right child, add the value there
            if (this.right) {
                this.right.add(value)
                return
            }

            const newNode = new Node(value)
            this.right = newNode
            return
        }

        // If the value to add is smaller, add to the left subtree
        if (this.value > value) {
            // If there is a left child, add the value there
            if (this.left) {
                this.left.add(value)
                return
            }
            const newNode = new Node(value)
            this.left = newNode
            return
        }
    }

    // Method to find a value in the tree
    find(value) {
        // If the current node has the value, return this node
        if (this.value === value) {
            return this
        }

        // Search in the right subtree
        if (this.value < value && this.right) {
            return this.right.find(value)
        }

        // Search in the left subtree
        if (this.value > value && this.left) {
            return this.left.find(value)
        }
    }
}

class Tree {
    constructor() {
        this.root = new Node(null)
    }

    // Method to add a value to the tree, starting from the root
    add(value) {
        this.root.add(value)
    }

    // Method to find a value in the tree, starting from the root
    find(value) {
        return this.root.find(value)
    }
}

const tree = new Tree()


tree.add(10)
tree.add(5)
tree.add(2)
tree.add(8)
tree.add(20)
tree.add(25)
tree.add(47)

console.log(tree);

console.log(tree.find(8));
console.log(tree.find(47));