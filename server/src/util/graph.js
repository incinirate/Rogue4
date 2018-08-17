/**
 * A generic node in a graph with an x, y position
 * @typedef {Object} Node
 * @property {Number} x
 * @property {Number} y
 * @property {Number} id - Unique id for this node
 */
let nodeIdCounter = 0;
export class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = nodeIdCounter++;
    }
}

/**
 * An edge between two nodes
 * @typedef {Object} Edge
 * @property {Node} a - The first connected node
 * @property {Node} b - The second connected node
 * @property {Number} weight - Cost to travel across this edge
 * @property {Number} id - Unique id for this edge
 */
let edgeIdCounter = 0;
export class Edge {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.id = edgeIdCounter++;

        const dx = b.x - a.x;
        const dy = b.y - a.y;
        this.weight = dx*dx + dy*dy;
    }
}
