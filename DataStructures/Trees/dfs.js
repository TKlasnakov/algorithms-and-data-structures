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
