class Node {
    constructor(val, next) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = null;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    dequeue() {
        if(!this.first) return undefined;
        let node = this.first;
        this.first = node.next;
        if(this.size === 1) {
            this.tail = this.first;
        }
        this.size--;
        return node;
    }
}

module.exports = Queue;