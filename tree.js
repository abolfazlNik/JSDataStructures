class Node {
    constructor(value , parentNode = null) {
        this.children = [] // Initialize an empty array to store child nodes
        this.value = value  // Set the value of the node
        this.parent = parentNode // Set the parent node
    }

    addNode(value) {
        const segments = value.split('/')

        if (segments.length === 0) {
            return // If there are no segments, return early
        }

        if (segments.length === 1) {
            // If there's only one segment
            const node = new Node(segments[0] , this)
            this.children.push(node)
            return { node: node  , index: this.children.length - 1}
        }

        // Find if a child with the same value already exists
        const existingChildNode = this.children.find((item) => {
            return item.value === segments[0]
        })

        if (existingChildNode) {
            existingChildNode.addNode(segments.slice(1).join('/'))
        } else {
            const node = new Node(segments[0] , this)
            node.addNode(segments.slice(1).join('/'))
            this.children.push(node)
            return { node: node , index: this.children.length - 1}
        }
    }

    removeNode(value) {
        const segments = value.split('/')

        if (segments.length === 0) {
            return // If there are no segments, return early
        }

        if (segments.length === 1) {
            const existingNodeIndex = this.children.findIndex((item) => {
                return item.value === segments[0]
            })

            if (existingNodeIndex < 0) {
                throw new Error('Could not find.')
            }

            this.children.splice(existingNodeIndex , 1)
        }

        if (segments.length > 1) {
            const existingChildNode = this.children.find((item) => {
                return item.value === segments[0]
            })

            if (!existingChildNode) {
                throw new Error('Could not find.')
            }

            existingChildNode.removeNode(segments.slice(1).join('/'))
        }
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue) // Initialize the tree with a root node
    }

    add(path) {
        this.root.addNode(path) // Add a new node to the tree by calling addNode on the root
    }

    remove(path) {
        this.root.removeNode(path)
    }
}

const user = new Tree('root')

user.add('/userInfo/username/AbolfazlNikfarjam')
user.add('/cart/book 1')
user.add('/cart/book 2')

user.remove('/cart/book 2')

console.log(user);