class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    // Getter method to calculate the depth of the left subtree
    get depthLeft() {
        // If there is no left child, depth is 0
        if (!this.left) {
            return 0
        }
        // Otherwise, depth is the left child's depth plus 1
        return this.left.depth + 1
    }

    // Getter method to calculate the depth of the right subtree
    get depthRight() {
        // If there is no right child, depth is 0
        if (!this.right) {
            return 0
        }
        // Otherwise, depth is the right child's depth plus 1
        return this.right.depth + 1
    }

    // Getter method to calculate the overall depth of the node
    get depth() {
        // Depth is the maximum of the left and right subtree depths
        return Math.max(this.depthLeft, this.depthRight)
    }

    // Getter method to calculate the balance factor of the node
    get balanceFactor() {
        // Balance factor is the difference between left and right subtree depths
        return this.depthLeft - this.depthRight
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

tree.add(1)
tree.add(2)
tree.add(3)

console.log(tree);