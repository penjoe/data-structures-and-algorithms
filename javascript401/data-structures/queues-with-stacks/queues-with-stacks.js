'use strict';

const Stack = require('../stacks-and-queues/lib/stack.js');

class PseudoQueue {

  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  };

  enqueue(val){
    if(!val){ return 'no value to add'; };
    this.stack1.push(val);
  };

  dequeue(){

    // if stack 2 is empty
    if(this.stack2.isEmpty()){
      // refill stack 2 with items from stack 1
      while(!this.stack1.isEmpty()){
        this.stack2.push(this.stack1.pop())
      }
    }
    // return the top of stack 2, which was the 'first in' to stack 1
    return this.stack2.pop();

  };

};

module.exports = PseudoQueue;