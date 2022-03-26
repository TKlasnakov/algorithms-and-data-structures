class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        const index = this.values.length - 1;
        return this._traverse(index);
    }

    _traverse(index) {
        if(!index) return this;
        const parentPlace = Math.floor((index - 1) / 2);
        if(this.values[parentPlace] >= this.values[index]) {
            return this;
        }

        [this.values[parentPlace], this.values[index]] = [this.values[index], this.values[parentPlace]];

        return this._traverse(parentPlace);
    }

    extractMax() {
        const lastIndex = this.values.length - 1;
        [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]];
        const maxValue = this.values.pop();
        this._regulateHeap(0, this.values[0]);
        return maxValue;
    }

    _regulateHeap(index, value) {
        const leftChild = index * 2 + 1
        const rightChild = leftChild + 1;

        if((value > this.values[leftChild] && value > this.values[rightChild]) ||
            leftChild > this.values.length - 1) {
            return this;
        }

        if(value < this.values[leftChild] && value < this.values[rightChild]) {
            if(this.values[leftChild] > this.values[rightChild]) {
                [this.values[index], this.values[leftChild]]=[this.values[leftChild], this.values[index]]
                index = leftChild
            } else {
                [this.values[index], this.values[rightChild]]=[this.values[rightChild], this.values[index]]
                index = rightChild
            }
        } else {
            if(this.values[leftChild] > this.values[[index]]) {
                [this.values[index], this.values[leftChild]]=[this.values[leftChild], this.values[index]]
                index = leftChild;
            } else if (this.values[rightChild] > this.values[index]){
                [this.values[index], this.values[rightChild]]=[this.values[rightChild], this.values[index]]
                index = rightChild;
            } else {
                return this;
            }
        }

        return this._regulateHeap(index, value)
    }
}

const heap = new BinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap.insert(55));
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());