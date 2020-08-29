'use strict';

/* 
Test Suite for the Node class. Verifies that the constructor properly instantiates a new node and gives the new node the proper values.
*/

const Node = require('../lib/node');

describe('Test suite for the Node class', () => {

  it('Verify that node is properly returning an instance of the Node class from lib/node.js', () => {
    let node = new Node();
    expect(node instanceof Node).toBe(true);
  });

  it('Check that each new node created by the Node class has a valid value.', () => {

    let goodNode = new Node('test');
    expect(goodNode.value).toEqual('test');
    let badNode = new Node();
    expect(badNode.value).toBeUndefined();

  });

  it('Each node should have a next property', () => {
    
    let node = new Node();
    expect(node.next).toEqual(null);

  });

});