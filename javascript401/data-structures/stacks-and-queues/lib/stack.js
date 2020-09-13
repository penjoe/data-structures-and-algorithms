'use strict';

const Node = require('./node.js');

/***** FILO / LIFO *****/

/**
 * class for creating new Stacks with methods for usage.
 */
class Stack {

  constructor(){
    this.top = null;
  };

  // pushes new node to the top of the stack
  push(val) {

    let node = new Node(val);
    node.next = this.top;
    this.top = node
    return this.top;

  };

  // pops top node off of stack
  pop() {

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;

  };

  // looks at the top node on the stack
  peek() {

    if(!this.top){
      return {};
    } else if(this.top.value){
      console.log(this.top.value);
      return this.top.value;
    }

  };

  // checks if stack is empty, returns true/false
  isEmpty() {

    if (this.top) {
      console.log('false');
      return false;
    } else if (!this.top) {
      console.log('true');
      return true;
    } else {
      return {};
    };

  };

};

module.exports = Stack;