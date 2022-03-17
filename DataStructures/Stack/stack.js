class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let node = this.first;
            this.first = newNode;
            this.first.next = node;
        }
        this.size++;
        return this;
    }

    pop() {
        if(!this.first) return undefined;
        let node = this.first;
        this.first = node.next;
        if(this.size === 1) {
            this.last = this.first;
        }
        this.size--;
        return node;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());