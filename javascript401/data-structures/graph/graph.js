'use strict';

const Vertex = require('./vertex.js');
const Edge = require('./edge.js');
// const Hash = require('../hashtable/hashtable.js');
const LL = require('../linked-lists/lib/linked-list.js');
const Q = require('../stacks-and-queues/lib/queue.js');
const Stack = require('../stacks-and-queues/lib/stack.js');
let Hash = require('../hashtable/hashtable.js');

/**
 * A connected, undirected graph implementation. 
 */
class Graph {
  constructor() {
    // the adjacency list is a hashtable containing key value pairs
    // the key is the current vertex of the graph
    // the value is a linked list containing all of a vertices neighbors
    this.adjacencyList = new Map();
    this.totalVertices = 0;
  };

  // adds a new vertex to the graph
  _add(vertex) {
    // creates a new vertex in the graph
    // sets a new linked list to the vertex object to hold all connected neighbors
    if (!this.adjacencyList.has(vertex)) {
      let neighbors = new LL();
      this.adjacencyList.set(vertex, neighbors) // key of the given vertex: value of a new linked list
    }
    else {
      return `${vertex} already exists`;
    };

  };

  // connects to vertices with an edge
  _addDirectedEdge(start, end) {
    // adds a directional edge pointing from the start to the end vertex
    // can become undirectional by setting it both ways *** SEE BELOW ***

    if (!start) {
      return `${start} vertex not found`;
    };

    if ( this.adjacencyList.has(start) && this.adjacencyList.has(end) ) {
      const neighbors = this.adjacencyList.get(start);
      let weight = Math.round(Math.random() * 10)
      neighbors.append(new Edge(end, weight));
    };

  };

  // will add an undirected edge by setting a directional edge from both start and end 
  _addUndirectedEdge(start, end) {
    this._addDirectedEdge(start, end);
    this._addDirectedEdge(end, start);
  };

  // returns all vertices in the graph 
  _getAll() {
    let keys = this.adjacencyList.entries();
    let vertices = new Set();
    for (let i of keys) {
      vertices.add(i[0].value)
    };
    return vertices;
  };

  // returns all vertices that are connected via edges to a given vertex
  _getNeighbors(vertex) {
    let start = this.adjacencyList.get(vertex) // is a linked list now
    let current = start.head;
    let neighbors = new Set();

    while(current) {
      // logging out current returns two nodes, or two "connected vertices"
      // node.value has and Edge which contains .vertex and .weight
      neighbors.add({value: current.value.vertex.value, weight: current.value.weight});
      current = current.next;
    };

    return neighbors;
    
  };

  // returns how many vertices the graph has
  _size() {
    // traverse graph
    // this.totalVertices + 1

  };

  // traverses the graph breadth first using a queue starting at the given vertex
  _bft(vertex) {

    const q = new Q();

  };

  // traverses the graph depth first using a stack starting at the given vertex
  _dft(vertex) {

    const stack = new Stack();

  };

};

const G = new Graph();

const a = new Vertex('a');
const b = new Vertex('b');
const c = new Vertex('c');
const d = new Vertex('d');
const e = new Vertex('e');
const f = new Vertex('f');

G._add(a);
G._add(b);
G._add(c);
G._add(d);
G._add(e);
G._add(f);

G._addUndirectedEdge(a, b);
G._addUndirectedEdge(a, c);
G._addUndirectedEdge(b, c);
G._addUndirectedEdge(b, d);
G._addUndirectedEdge(b, e);
G._addUndirectedEdge(c, f);
G._addUndirectedEdge(f, b);

console.log(G._getNeighbors(b));

module.exports = Graph;