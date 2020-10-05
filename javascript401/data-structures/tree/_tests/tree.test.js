'use strict';

/*
1. Can successfully instantiate an empty tree
2. Can successfully instantiate a tree with a single root node
3. Can successfully add a left child and right child to a single root node
4. Can successfully return a collection from a preorder traversal
5. Can successfully return a collection from an inorder traversal
6. Can successfully return a collection from a postorder traversal
7. Calling contains() will properly return a true/false if value does/does not exist
*/

const BinarySearchTree = require('../binary-search-tree.js');
const TreeNode = require('../tree-node.js');

describe('Unit tests for Binary Search Tree', () => {
  
  it('Should instantiate an empty binary search tree if the class method add() is not called.', () => {

    let bst = new BinarySearchTree();
    expect(bst.root).toEqual(null);
    
  });

  it('Can successfully instantiate a tree with a single root node.', () => {

    let bst = new BinarySearchTree();
    bst.add(20);

    expect(bst.root.value).toEqual(20);
    
  });

  it('Can successfully add a left child and right child to the original root node.', () => {

    let bst = new BinarySearchTree();
    bst.add(20);
    bst.add(15);
    bst.add(25);

    expect(bst.root.value).toEqual(20);
    expect(bst.root.left.value).toEqual(15);
    expect(bst.root.right.value).toEqual(25);
    
  });

  it('Can successfully return a collection from a preOrder traversal.', () => {

    let bst = new BinarySearchTree();
    bst.add(23);
    bst.add(8);
    bst.add(4);
    bst.add(16);
    bst.add(15);
    bst.add(22);
    bst.add(42);
    bst.add(27);
    bst.add(85);
    bst.add(7);

    expect(bst.preOrder()[2]).toEqual(4);
    expect(bst.preOrder()[4]).toEqual(16);
    expect(bst.preOrder()[6]).toEqual(22);
    expect(bst.preOrder()[8]).toEqual(27);
    
  });

  it('Can successfully return a collection from a inOrder traversal.', () => {

    let bst = new BinarySearchTree();
    bst.add(23);
    bst.add(8);
    bst.add(4);
    bst.add(16);
    bst.add(15);
    bst.add(22);
    bst.add(42);
    bst.add(27);
    bst.add(85);
    bst.add(7);

    expect(bst.inOrder()[2]).toEqual(8);
    expect(bst.inOrder()[4]).toEqual(16);
    expect(bst.inOrder()[6]).toEqual(23);
    expect(bst.inOrder()[8]).toEqual(42);
    
  });

  it('Can successfully return a collection from a postOrder traversal.', () => {

    let bst = new BinarySearchTree();
    bst.add(23);
    bst.add(8);
    bst.add(4);
    bst.add(16);
    bst.add(15);
    bst.add(22);
    bst.add(42);
    bst.add(27);
    bst.add(85);
    bst.add(7);

    expect(bst.postOrder()[2]).toEqual(15);
    expect(bst.postOrder()[4]).toEqual(16);
    expect(bst.postOrder()[6]).toEqual(27);
    expect(bst.postOrder()[8]).toEqual(42);
    
  });

  it('Calling contains() should return true if the tree contains a goven value, otherwise return false.', () => {

    let bst = new BinarySearchTree();
    bst.add(23);
    bst.add(8);
    bst.add(4);
    bst.add(16);
    bst.add(15);
    bst.add(22);
    bst.add(42);
    bst.add(27);
    bst.add(85);
    bst.add(7);

    expect(bst.contains(27)).toBe(true);
    expect(bst.contains(85)).toBe(true);
    expect(bst.contains(16)).toBe(true);
    expect(bst.contains(99)).toBe(false);

  });

});