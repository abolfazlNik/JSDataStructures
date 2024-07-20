export class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append (value) {
        const newElement = {value: value, next: null}

        if (!this.head) {
            this.head = newElement
        }

        if (this.tail) {
            this.tail.next = newElement
        }
        this.tail = newElement
    }

    toArray () {
        const elements = []
        let curElement = this.head

        while (curElement){
            elements.push(curElement)
            curElement = curElement.next
        }
        return elements
    }
    
    prepend (value) {
        const newElement = {value:value , next:this.head}
        this.head = newElement
        if (!this.tail) {
            this.tail = newElement
        }
    }

    deleteHead() {
        if (!this.head) {
            return
        }

        const deleteItem = this.head

        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }
        return deleteItem
        
    }

    delete(value) {
        if (!this.head) {
            return
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next
        }

        let curElement = this.head

        while (curElement.next) {
            if (curElement.next.value === value) {
                curElement.next = curElement.next.next
            } else {
                curElement = curElement.next
            }
        }

        if (this.tail.value === value) {
            this.tail = curElement
        }
    }

    find(value) {
        if (!this.head) {
            return
        }
        let curElement = this.head
        while(curElement) {
            if (curElement.value === value) {
                return curElement
            }
            curElement = curElement.next
        }
        return
    }

    insertAfter(value , afterValue) {
        let existingValue = this.find(afterValue)

        if (existingValue) {
            const newElement = {value: value , next: existingValue.value}
            existingValue.next = newElement
        }
    }
}

const linkedList = new LinkedList

// linkedList.append('A')
// linkedList.append(true)
// linkedList.prepend('first value')
// linkedList.delete(true)
// console.log(linkedList.find('A'));
// linkedList.insertAfter('new value' , true)

// // 
// console.log(linkedList.toArray());