'use strict';

/**
 * A Vertex class used in conjunction with a basic graph implementation.
 */
module.exports = class Vertex {
  /**
   * Creates a new vertex object.
   * @param {*} value - the value that is given when a vertex is added to a graph. 
   */
  constructor(value) {
    this.value = value;
  };
};