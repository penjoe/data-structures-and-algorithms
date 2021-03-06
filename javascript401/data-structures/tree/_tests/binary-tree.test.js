'use strict';

const BinaryTree = require('../binary-tree.js');
const TreeNode = require('../tree-node.js');

describe('Unit tests for BinaryTree parent class.', () => {

  it('Should initialize an empty tree upon instantiation.', () => {

    let tree = new BinaryTree();
    expect(tree.root).toEqual(null);
    
  });

  it('Should return the largest numeric value in a tree.', () => {

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

    expect(tree.findMaxValue(tree)).toEqual(70);
    
  });

  it('Should return a list of values in the order in which they were encountered via a breadth-first traversal method.', () => {

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
    tree.breadthFirst(tree);

    expect(Array.isArray(tree.breadthFirst())).toBe(true);
    expect(tree.breadthFirst()[0]).toEqual(20);
    expect(tree.breadthFirst()[2]).toEqual(32);
    expect(tree.breadthFirst()[4]).toEqual(17);
    expect(tree.breadthFirst()[6]).toEqual(40);
    
  });
  
});