const queue = require('../Queue/Queue.js')
const tree = require('./bst.js')

class DepthFirstSearchPreOrder {
    traverse(tree) {
        return this._traverse(tree.root, [])
    }

    _traverse(node, data) {
        data.push(node);
        if(node.left) this._traverse(node.left, data);
        if(node.right) this._traverse(node.right, data);
        return data;
    }
}


const bst = new tree();
bst.insert(10);
bst.insert(33);
bst.insert(12);
bst.insert(24);
bst.insert(11);
bst.insert(6);
bst.insert(8);
bst.insert(4);
bst.insert(5);
bst.insert(9);
const traverse = new DepthFirstSearchPreOrder();
console.log(traverse.traverse(bst));
debugger;