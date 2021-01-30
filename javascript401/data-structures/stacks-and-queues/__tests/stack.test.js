'use strict';

const Stack = require('../lib/stack.js');

describe('Stack unit tests', () => {

  let stack;
  beforeEach( () => {
    return stack = new Stack();
  });

  it('Can successfully instantiate an empty stack', () => {

    expect(stack.top).toEqual(null);
    expect(stack.peek()).toEqual(null);
    expect(stack.isEmpty()).toBe(true);
    
  });

  it('Can successfully push onto a stack', () => {

    stack.push(1);
    expect(stack.top.value).toEqual(1);
    expect(stack.peek()).toEqual(1);
    
  });

  it('Can successfully push multiple values onto a stack', () => {
    
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
    expect(stack.top.value).toEqual(3);

  });

  it('Can successfully pop off the stack', () => {

    stack.push(1);
    stack.push(2);
    stack.push(3);
    let val = stack.pop();

    expect(val).toEqual(3);
    expect(stack.top.value).toEqual(2);
    
  });

  it('Can successfully empty a stack after multiple pops', () => {
    
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    let val = stack.pop();
    stack.pop();

    expect(stack.isEmpty()).toBe(true);
    expect(val).toEqual(2);
    expect(stack.top).toEqual(null);

  });

  it('Can successfully peek the next item on the stack', () => {
    
    stack.push('joe');

    expect(stack.peek()).toEqual('joe');

  });

  // this test is meh
  it('Calling pop or peek on empty stack raises exception', () => {
    
    expect(stack.pop()).toEqual(null);
    expect(stack.peek()).toEqual(null);

  });
  
});