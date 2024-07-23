class Hash {
    constructor() {
        this.size = 1000
        this.products = Array(1000).fill(null)
    }

    // Hash function to convert a key into a index
    hash(key) {
        let hash = 0
        for (const char of key) {
            hash += char.charCodeAt(0)
        }
        return hash % this.size
    }
    
    // Creates a value based on a specific key
    set(key , value) {
        const keyHash = this.hash(key)
        this.products[keyHash] = value
    }

    // Return value based on a key
    get(key) {
        const keyHash = this.hash(key)
        return this.products[keyHash]
    }
}

const message = 'hello world'

// Function to find the first repeating character in a string
function findFirstChar (str) {
    const table = new Hash()
    for (const char of str) {
        if (table.get(char)) {
            return char
        }
        table.set(char , 1)
    }
}

console.log(findFirstChar(message)); // Output: "l"