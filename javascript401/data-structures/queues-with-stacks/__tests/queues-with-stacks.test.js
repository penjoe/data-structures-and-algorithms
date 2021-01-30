'use strict';

const PseudoQueue = require('../queues-with-stacks.js');

describe('Unit testing for PseudoQueue class', () => {

  it('dequeu should return the first item enqueued', () => {

    let q = new PseudoQueue();
    q.enqueue('test')
    q.enqueue('joe');
    
    expect(q.dequeue()).toStrictEqual('test');

  });

  it('should return an error string to enqueue with no value ', () => {

    let q = new PseudoQueue();
    expect(q.enqueue()).toStrictEqual('no value to add'); 
    
  });

  it('should return null if trying to dequeue an empty pseudoqueue', () => {
    
    let q = new PseudoQueue();
    expect(q.dequeue()).toStrictEqual(null);
  });

});