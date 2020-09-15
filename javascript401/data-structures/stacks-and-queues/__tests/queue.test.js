'use strict';

const Queue = require('../lib/queue.js');

describe('Queue unit tests', () => {
  
  let queue;
  beforeEach( () => {
    return queue = new Queue();
  })
  
  it('Can instantiate an empty queue', () => {

    expect(queue.isEmpty()).toBe(true);
    expect(queue.front).toEqual(null);
    expect(queue.back).toEqual(null);

  });

  it('Can successfully enqueue a new node onto the front of a queue', () => {
    
    queue.enqueue(1);

    expect(queue.peek()).toEqual(1);
    expect(queue.front.value).toEqual(1);

  });

  it('Can successfuly add multiple nodes to a queue and maintain pointers to front and back', () => {

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.peek()).toEqual(1);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.back.value).toEqual(4);
    
  });

  it('Can successfully dequeue the front node from a queue', () => {

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    let val = queue.dequeue();
    
    expect(val).toEqual(1);
    expect(queue.peek()).toEqual(2);

  });

  it('Can successfully empty a queue after multiple dequeues', () => {

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    let val = queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBe(true);
    expect(val).toEqual(2);

  });

  // this test is meh
  it('Calling peek() or dequeue() on an empty queue raises an exception', () => {

    expect(queue.dequeue()).toEqual('empty');
    expect(queue.peek()).toEqual('empty');
    
  });

  it('Calling isEmpty() will return a true or a false boolean value', () => {

    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    
  });

});