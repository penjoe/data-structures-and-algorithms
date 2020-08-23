'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  };

  /**
   * Will insert a new node to the linked list at the `head` of the list.
   */
  insert(addVal) {

    /**
     * Instantiate a new node object.
     */
    let node = new Node(addVal);

    /**
     * Gives the 'next' pointer of the newly created node the value of the head of the linked list. 
     */
    node.next = this.head;

    /**
     * Assigns the 'head' pointer to the new node.
     */
    this.head = node;

    /**
     * 'Head' now has the value of the new node so the new head of the linked list will be whatever value is added with insert()
     */
    return this.head;

  };

  /**
   * will take in a value and returns a boolean whether ot not that value exists in the linked list
   */
  includes(searchVal) {

    /**
     * Set a variable to the head of the linked list. This is the starting point.
     */
    let current = this.head;

    /**
     * So long as the current node has a value, do stuff.
     */
    while( current != null ) {
      if (current.value === searchVal) {
        console.log(true);
        return true;
      };
      current = current.next;
    };
    console.log(false);
    return false;
  };

  /**
   * takes no argument and will return a string representing all the values of the linked list
   */
  toString() {

    let current = this.head;
    let result = '';
    while (current) {

      if (current !== null) {
        result += ' { ' + current.value + ' } ' + ' -> ';
        current = current.next;
      };
      
      if ( current === null) {
          result += ' NULL';
      };
    };
    console.log(result);
  };

};

module.exports = LinkedList;