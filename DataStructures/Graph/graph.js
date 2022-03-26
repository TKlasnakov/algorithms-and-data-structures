const Queue = require('../Queue/Queue.js')
class Graph {
    constructor() {
        this.adjancencyList = {};
    }

    addVertex(vertex) {
        if(this.adjancencyList[vertex]) return;
        this.adjancencyList[vertex] = [];
    }

    addEdge(firstPoint, secondPoint) {
        if(!this.adjancencyList[firstPoint] || !this.adjancencyList[secondPoint]) return;
        this.adjancencyList[firstPoint].push(secondPoint);
        this.adjancencyList[secondPoint].push(firstPoint);
    }

    removeEdge(firstPoint, secondPoint) {
        if(!this.adjancencyList[firstPoint] || !this.adjancencyList[secondPoint]) return;
        this.adjancencyList[firstPoint] = this.adjancencyList[firstPoint].filter(vertex => {
            return vertex !== secondPoint
        })
        this.adjancencyList[secondPoint] = this.adjancencyList[secondPoint].filter(vertex => {
            return vertex !== firstPoint
        })
    }

    removeVertex(vertex) {
        if(!this.adjancencyList[vertex]) return;
        while(this.adjancencyList[vertex].length) {
            const item = this.adjancencyList[vertex].pop()
            this.removeEdge(vertex, item)
        }
        delete this.adjancencyList[vertex];
    }

    dfsRecursive(startingPoint) {
        if(!startingPoint) return undefined;
        return this._dft(startingPoint, [], {});
    }

    _dft(vertex, result, visited) {
        if(visited[vertex]) {
            return result;
        }
        result.push(vertex);
        visited[vertex] = true;
        this.adjancencyList[vertex].forEach((item) => this._dft(item, result, visited));
    }

    bfs(startingPoint) {
        if(!startingPoint) return undefined;
        const result = [];
        const queue = new Queue();
        const visited = {};
        let currentVertex;

        queue.enqueue(startingPoint);
        visited[startingPoint] = true;

        while(queue.size) {
            currentVertex = queue.dequeue().val;
            result.push(currentVertex);

            this.adjancencyList[currentVertex].forEach(item => {
                if(!visited[item]) {
                    visited[item] = true;
                    queue.enqueue(item);
                }
            })
        }

        return result;
    }

    dfsIteratively(startingPoint) {
        if(!startingPoint) return undefined;
        const result = [];
        const stack = [startingPoint];
        const visited = {};
        let currentVertex;
        visited[startingPoint] = true;
        
        while(stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex);

            this.adjancencyList[currentVertex].forEach(item => {
                if(!visited[item]) {
                    visited[item] = true;
                    stack.push(item);
                }
            })
        }

        return result;
    }
}

const g = new Graph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
console.log(g.dfsRecursive('A'));
console.log(g.dfsIteratively('A'));
console.log(g.bfs('A'));
console.log(g);