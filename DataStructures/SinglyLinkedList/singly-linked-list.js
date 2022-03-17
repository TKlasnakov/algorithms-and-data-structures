class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinlgyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head)  return undefined;
        let node = this.head;
        let newTail;
        if(this.length === 1) {
            newTail = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return newTail;
        }
        for (let i = 1; i < this.length; i++) {
            if(node.next === this.tail) {
                newTail = node
                node.next = null;
            } else {
                node = node.next;
            }
        }
        this.length--;
        this.tail = newTail
        return this.tail;
    }

    shift() {
        if(!this.head) return undefined;
        let node = this.head;
        this.head = node.next;
        if(this.length === 1) {
            this.tail = this.head;
        }
        this.length--;
        return node;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let node = this.head;
            this.head = newNode;
            this.head.next = node;
        }

        this.length ++;
        return this;
    }

    get(index) {
        if(index > this.length || index < 0) return undefined;
        let currentItem = this.head;
        for (let i = 0; i !== index; i++) {
            currentItem = currentItem.next;
        }
        return currentItem || undefined;
    }

    set(index, value) {
        const node = this.get(index);
        if(!node) return false;
        node.val = value
        return true;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(value)
        if(index === 0) return !!this.unshift(value)

        const beforeNode = this.get(index - 1);
        const afterNode = this.get(index);
        const node = new Node(value);
        beforeNode.next = node;
        node.next = afterNode;
        this.length ++;
        return true;
    }

    remove(index) {
        if(index > this.length || index < 0) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        const beforeNode = this.get(index - 1);
        const removedNode = beforeNode.next;
        beforeNode.next = removedNode.next;
        this.length --;
        return removedNode
    }
}

let list = new SinlgyLinkedList();

console.log(list.push(12));
console.log(list.push(13));
console.log(list.push(14));
console.log(list.push(15));
console.log(list.push(16));
console.log(list.get(4));
console.log(list.remove(0));
console.log(list);
