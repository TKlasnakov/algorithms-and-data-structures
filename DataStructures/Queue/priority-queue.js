class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push(new Node(val, priority));
        const index = this.values.length - 1;
        this._bubbleUp(index);
    }

    dequeue() {
        const lastIndex = this.values.length - 1;
        [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]];
        const minValue = this.values.pop();
        if(!this.values.length) return minValue;
        this._regulateQueue(0, this.values[0].priority);
        return minValue;
    }

    _bubbleUp(index) {
        if(!index) return
        const parentPlace = Math.floor((index - 1) / 2);
        if(this.values[parentPlace].priority <= this.values[index].priority) {
            return;
        }
        [this.values[parentPlace], this.values[index]] = [this.values[index], this.values[parentPlace]];

        return this._bubbleUp(parentPlace);
    };

    _regulateQueue(index, value) {
        const leftSide = index * 2 + 1;
        const rightSide = leftSide + 1;

        if(!this.values[leftSide]) return;
        if(this.values[leftSide].priority < value) {
            if(this.values[rightSide]) {
                if(this.values[rightSide].priority < this.values[leftSide].priority) {
                    [this.values[index], this.values[rightSide]] = [this.values[rightSide], this.values[index]];
                    return this._regulateQueue(rightSide, value)
                }
            }
            [this.values[index], this.values[leftSide]] = [this.values[leftSide], this.values[index]];
            return this._regulateQueue(leftSide, value)
        }

        if(!this.values[rightSide]) return;
        if(this.values[rightSide].priority < value) {
            [this.values[index], this.values[rightSide]] = [this.values[rightSide], this.values[index]];
            return this._regulateQueue(index, rightSide)
        }
    }
}
