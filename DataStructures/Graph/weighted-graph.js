class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(this.adjacencyList[vertex]) return undefined;
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
}