'use strict';

/* 
TODOs
1. Can successfully instantiate an empty linked list
2. Can properly insert into the linked list
3. The head property will properly point to the first node in the linked list
4. Can properly insert multiple nodes into the linked list
5. Will return true when finding a value within the linked list that exists
6. Will return false when searching for a value in the linked list that does not exist
7. Can properly return a collection of all the values that exist in the linked list
*/

const Node = require('../lib/node');

describe('Test suite for the Node class', () => {

  // let node;

  // beforeEach( () => {
  //   let node = new Node();
  // });

  it('Verify that node is properly returning an instance of the Node class from lib/node.js', () => {
    let node = new Node();
    expect(node instanceof Node).toBe(true);
  });

  it('Check that each new node created by the Node class has a value and pointer to the next node', () => {

  });

});