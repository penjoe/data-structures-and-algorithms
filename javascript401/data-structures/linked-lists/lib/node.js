'use strict';

/**
 * Used by the LinkedList class to create new nodes as needed.
 * @param {*} this.value - The value that will be given to a new node upon instantiation.
 * @param {*} this.next - This points to the next node in the linked list allowing for traversal.
 */
class Node {

  constructor(value){

    this.value = value;
    this.next = null;

  };

};

module.exports = Node;