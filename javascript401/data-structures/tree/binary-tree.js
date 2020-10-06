'use strict';

/** Requiring in the TreeNode class to allow easy creation of new nodes inside of the BinaryTree class. */
const TreeNode = require('./tree-node.js');
const Queue = require('../stacks-and-queues/lib/queue.js');

class BinaryTree {

  constructor(node = null){

    this.root = node;

  };

  /**
   * Method of traversal that looks at the root first, then the left child and then right child all the way to the bottom.
   * @return {array} an array containing each value of the binary tree. Results are in root >> left >> right ordering.
   */
  preOrder(){

    let results = [];

    /**
     * function that uses recursion to traverse binary tree and push the value of each node as it comes into an array.
     * @param {*} node The current node being manipulated within the binary tree.
     */
    const walk = (node) => {

      results.push(node.value);

      if(node.left){
        walk(node.left);
      };
      if(node.right){
        walk(node.right);
      };

    };

    walk(this.root);

    return results;

  };

  /**
   * Method of traversal that looks at left child first, then the root, then the right child.
   * @return {array} an array containing each value of the binary tree. Results are in left >> root >> right ordering.
   */
  inOrder(){

    let results = [];

    /**
     * Function that uses recursion to traverse the binary tree and push the value of each current node into an array.
     * @param {*} node The current node being manipulated within the binary tree.
     */
    const walk = (node) => {

      if(node.left){
        walk(node.left);
      };
      
      results.push(node.value);

      if(node.right){
        walk(node.right);
      };

    };

    walk(this.root)

    return results;

  };

  /** 
   * Method of traversal that looks at the left child, then the right child, then the root.
   * @return {array} an array containing each value of the binary tree. Results are in left >> right >> root ordering.
   */
  postOrder(){

    let results = [];

    const walk = (node) => {

      if(node.left){
        walk(node.left);
      };
      if(node.right){
        walk(node.right);
      };

      results.push(node.value);

    };

    walk(this.root);

    return results;

  };

  /**
   * Method that traverses a tree and returns the maximum value found within the tree. Implements breadth-first traversal. Assumes all tree nodes have numeric values.
   * @param {number} tree - The binary tree passed in that this method is checking for max value.
   * @return {number} - The largest value stored in the tree. 
   */
  findMaxValue(tree){

    // Store the value of the root node for comparison later.
    let temp = this.root.value;

    // Initialize a new queue and add the root to the back of the queue.
    let breadth = new Queue();
    breadth.enqueue(this.root);

    // Loop over nodes of tree using breadth-first traversal.
    while(!breadth.isEmpty()){

      // the current front node that will be used to traverse to its left/right via enqueue
      let front = breadth.dequeue();

      // check temp against the current working nodes value
      if(front.value > temp) {
        temp = front.value;
      };
      // if the current working node has a left, add it to the queue
      if(front.left) {
        breadth.enqueue(front.left);
      };
      // if the current working node has a right, add it to the queue
      if(front.right) {
        breadth.enqueue(front.right);
      };
      
    };

    return temp;

  };

  breadthFirst(tree){

    let queue = new Queue();
    queue.enqueue(this.root);
    let results = [];

    while(!queue.isEmpty()){

      let front = queue.dequeue();
      results.push(front.value);
      console.log(front.value);

      if(front.left){
        queue.enqueue(front.left);
      };
      if(front.right){
        queue.enqueue(front.right);
      };

    };

    console.log(results);
    return results;

  };

};

module.exports = BinaryTree;