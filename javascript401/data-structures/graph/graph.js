'use strict';

const Vertex = require('./vertex.js');
const Edge = require('./edge.js');
const LL = require('../linked-lists/lib/linked-list.js');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    let vertex = new Vertex();
  };

  _add(vertex) {
    let children = new LL();
    this.adjacencyList.set(vertex, children);
  }

};

module.exports = Graph;