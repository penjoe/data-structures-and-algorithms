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

  // adds new node to the back
  enqueue(val) {

    let node = new Node(val);

    if (this.isEmpty()){

      this.front = node;
      this.back = node;
      
    } 
    else {

      this.back.next = node;
      this.back = this.back.next
      
    };

  };

  // removes node at the front and returns
  dequeue() {

    if (!this.isEmpty()){

      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.value;

    } else {
      return 'empty';
    };

  };

  // looks at node at the front
  peek() {

    if (!this.front){
      return 'empty';
    } else if (this.front){
      return this.front.value;
    };
    
  };

  // returns true/false whether or not queue is empty
  isEmpty() {

    if (this.front){
      return false;
    } else if (!this.front){
      return true;
    } else {
      throw new Error('Something went wrong');
    };
    
  };

};

module.exports = Queue;