const queue = require('../Queue/Queue.js')
const tree = require('./bst.js')

class BreadthFirstSearch {
    traverse(tree) {
        const container = new queue();
        const data = [];
        let node = tree.root;
        container.enqueue(node)

        return this._traverse(tree.root, container, data)
    }

    _traverse(root, queue, data) {
        if(!queue.size) {
            return data
        }
        const node = queue.dequeue().val;
        if(node.left) queue.enqueue(node.left);
        if(node.right) queue.enqueue(node.right);
        data.push(node);

        return this._traverse(node, queue, data);
    }
}
