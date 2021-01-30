'use strict';

const TreeNode = require('./tree-node.js');
const BinaryTree = require('./binary-tree.js');

class BinarySearchTree extends BinaryTree {

  constructor(){
    super();
    this.root = null;
  };

  // creates a new node and sets to root if there is none, then calls a recursive helper function
  add(value){

    let node = new TreeNode(value);
    if (!this.root){
      this.root = node;
    } else {
      this.recursiveAdd(this.root, node);
    };

  };

  // will recursively call itself until there is no node on the left or right deoending on node value to be added
  recursiveAdd(root, node){

    if(node.value < root.value){
      if(!root.left){
        root.left = node;
      } else {
        this.recursiveAdd(root.left, node);
      };     
    } else if (node.value > root.value){
      if(!root.right){
        root.right = node;
      } else {
        this.recursiveAdd(root.right, node);
      };     
    };

  };

  // return true/false if value is found in tree
  contains(value){

    let current = this.root;

    while(current !== null) {
      if (current.value === value){
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }; 
    };
    return false;
  };

};

module.exports = BinarySearchTree;