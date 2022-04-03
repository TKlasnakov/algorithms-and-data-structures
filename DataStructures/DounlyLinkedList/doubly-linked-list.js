class Node {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        const oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length --;
        return oldTail;
    }

    shift() {
        if(!this.head) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        if (!val && val !== 0) return false;
        const newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index > this.length - 1) return null;
        if(index === 0) return this.head;
        if(index === this.length - 1) return this.tail;
        const halfPoint = Math.floor(this.length / 2);
        if(halfPoint < index) {
           return this.startFromTail(this.length - index);
        } else {
            return this.startFromHead(index)
        }
    }

    set(index, value) {
        if(this.length < 0 || this.length < index) return false;
        const node = this.get(index) ;
        node.val = value;
        return true;
    }

    insert(index, value) {
        if(this.length < 0 || this.length < index) return false;
        if(index === this.length)  return !!this.push(value);
        if(index === 0) return !!this.unshift(value)
        const nextNode = this.get(index);
        const prevNode = nextNode.prev;
        const newNode = new Node(value);
        prevNode.next = newNode;
        nextNode.prev = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode
        this.length++;
        return true;

    }

    startFromTail(halfPoint) {
        let node = null;
        let currentNode = this.tail;
        for (let i = halfPoint - 1; i >= 0; i--) {
            if(i === 0) {
                node = currentNode
            } else {
                currentNode = currentNode.prev;
            }
        }

        return node;
    }

    startFromHead(halfPoint) {
        let node = null;
        let currentNode = this.head.next;
        for (let i = 1; i <= halfPoint; i++) {
            if(i === halfPoint) {
                node = currentNode
            } else {
                currentNode = currentNode.next;
            }
        }

        return node;
    }

    remove(index) {
        const node = this.get(index);
        if(!node) return undefined;
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.prev = null;
        node.next = null;
        this.length --;
        return node;
    }
}

list = new DoublyLinkedList();

