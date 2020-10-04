'use strict';

const TreeNode = require('./tree-node.js');
const BinaryTree = require('./binary-tree.js');

class BinarySearchTree extends BinaryTree {

  constructor(){
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

module.exports = BinarySearchTree;