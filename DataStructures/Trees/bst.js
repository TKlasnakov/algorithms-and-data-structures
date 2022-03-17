class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        if(!this.root) {
            this.root = new Node(value);
        } else {
            this._insertNode(value, this.root);
        }

        return this;
    }

    find(value) {
        if(!this.root) return undefined;

        return this._findNode(value, this.root);
    }

    _insertNode(value, parent) {
        if(value === parent.value) return undefined;
        if(value > parent.value) {
            if(!parent.right) {
                parent.right = new Node(value);
                return;
            }
            parent = parent.right;
        }
        if(value < parent.value) {
            if(!parent.left) {
                parent.left = new Node(value);
                return;
            }
            parent = parent.left
        }

        return this._insertNode(value, parent);
    }

    _findNode(value, parent) {
        if(value === parent.value) {
            return parent;
        }
        if(value > parent.value) {
            if(!parent.right) {
                return undefined;
            }
            parent = parent.right;
        }
        if(value < parent.value) {
            if(!parent.left) {
                parent.left = new Node(value);
                return;
            }
            parent = parent.left
        }

        return this._findNode(value, parent)
    }
}

module.exports = BinarySearchTree;
