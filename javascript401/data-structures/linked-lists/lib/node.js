'use strict';

/**
 * Used by the LinkedList class to create new nodes as needed.
 */
class Node {

  /**
   * Used to create new node objects with a value and pointer to the next node.
   * @constructor
   * @param {*} value - The value to be given to a new node upon instantiation into the linked list.
   * @param {*} this.value - The value that will be given to a new node upon instantiation.
   * @param {*} this.next - This points to the next node in the linked list allowing for traversal.
   */
  constructor(value){

    this.value = value;
    this.next = null;

  };

};

module.exports = Node;