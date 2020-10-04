'use strict';

/** Requiring in the TreeNode class to allow easy creation of new nodes inside of the BinaryTree class. */
const TreeNode = require('./tree-node.js');

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

};

class BinarySearchTree extends BinaryTree {

  constructor(){
    super();
    this.root = null;
  };

  add(value){

    let node = new TreeNode(value);

    if(!this.root){
      this.root = node;
    };

    if(node.value < this.root){
      this.root.left = node;
    }
    else if (node.value > this.root){
      this.root.right = node;
    };

  };

  constains(){

  };

};

let twenty = new TreeNode(20);
let twelve = new TreeNode(12);
let six = new TreeNode(6);
let seventeen = new TreeNode(17);
let thirtytwo = new TreeNode(32);
let twentyfive = new TreeNode(25);
let fourty = new TreeNode(40);
let seventy = new TreeNode(70);

twenty.left = twelve;
twenty.right = thirtytwo;
twelve.left = six;
twelve.right = seventeen;
thirtytwo.right = fourty;
thirtytwo.left = twentyfive;
fourty.right = seventy;

let tree = new BinaryTree(twenty);

// console.log(tree.preOrder());
// console.log(tree.inOrder());
// console.log(tree.postOrder());

module.exports = BinarySearchTree;