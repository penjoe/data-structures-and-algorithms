'use strict';

const BinarySearchTree = require('../binary-tree.js');

describe('Unit tests for Binary Search Tree', () => {
  
  it('Should add a new node to the BST in the correct location when add() is called', () => {

    let BST = new BinarySearchTree()

    BST.add(20);
    BST.add(10);
    BST.add(30);
    console.log(BST.preOrder);
    expect(BST.preOrder()).toEqual([20, 10, 30]);
    
  });

});