'use strict';

const Node = require('./node.js');

class LL {
  constructor() {
    this.head = null;
  };

  _add(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    };
  };

  /* for the get method, inside of each index that coems back from the hash, traveerse the LL, at each node, check if the value has a key tat mateches the hash key. Maybe object.keys? */
  _get() {
    if (!this.head) {
      return null;
    }
    else {
      let current = this.head;

      while(current) {
        console.log(current.val);
        current = current.next;
      };
    };
  };

};

module.exports = LL;