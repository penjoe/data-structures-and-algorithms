'use strict';

/**
 * An Edge class that is used with a graph implementation to help link vertexes within the graph.
 */
module.exports = class Edge {
  /**
   * Creates a new vertex edge.
   * @param {*} vertex - the vertex the edge is being attatched to.
   * @param {*} weight - the weight, or value that an edge has. This is optional and defaults to 0.
   */
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  };
};