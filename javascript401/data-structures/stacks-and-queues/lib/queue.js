'use strict';

const Node = require('./node.js');

/***** FIFO / LILO *****/

/**
 * class for creating new Queues with methods for usage.
 */
class Queue {

  constructor() {
    this.front = null;
    this.back = null;
  };

  // 
  enqueue(val) {

    let node = new Node(val);
    this.back.next = node;
    this.back = node;
    return this.back;

  };

  dequeue() {

    if (!this.isEmpty()){

      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.value;

    } else {
      return {};
    };

  };

  peek() {

    if (!this.front){
      return {};
    } else if (this.front){
      console.log(this.front.value);
      return this.front.value;
    };
    
  };

  isEmpty() {

    if (this.front){
      console.log(false);
      return false;
    } else if (!this.front){
      console.log(true);
      return true;
    } else {
      return {error: "error"};
    };
    
  };

};

module.exports = Queue;