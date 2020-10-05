'use strict';

/** Class for generating nodes to be added to a binary tree. */
class TreeNode {

  /**
   * Constructor to create new nodes with value, left and right properties.
   * @param {*} value - value to be added when a new node is created, passed in when new nodes are instantiated.
   */
  constructor(value){

    this.value = value;
    this.left = null;
    this.right = null;

  };

};

module.exports = TreeNode;