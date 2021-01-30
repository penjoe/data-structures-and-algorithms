'use strict';

const Node = require('./node.js');

/**
 * A Linked List class module.
 */
class LinkedList {

  /**
   * Used to create the Linked List object. Instantiates by itself as an empty list.
   * @constructor
   * @param {*} this.head - This is a reference to the head, or beginning, of a linked list.
   * @function insert - Will insert a new node at the head of the linked list.
   * @function append - Will apend a new node to the tail of the linked list.
   * @function insertBefore - Will insert a new node before a specified node.
   * @function insertAfter - Will insert a new node after a specified node.
   * @function includes - Will search linked list, returning a true/false if a given value is found.
   * @function getValue - Will search for and return a value.
   * @function toString - Will traverse linked list and concat each nodes value into a string.
   * @function kthFromEnd -  Will take in a number and return the value of the node that is that number from the last node.
   * @function nodeCounter - Will traverse linked list and return the total # of nodes.
   */
  constructor() {
    this.head = null;
  };

  /** 
   * Will insert a new node to the linked list at the `head` of the list with a given value.
   * @param {*} addVal - the value that is passed in when adding a new node.
   */
  insert(addVal) {

    /** Instantiate a new node object. */
    let node = new Node(addVal);
    /** Gives the 'next' pointer of the newly created node the value of the head of the linked list. */
    node.next = this.head;
    /** Assigns the 'head' pointer to the new node. */
    this.head = node;
    /** 'Head' now has the value of the new node so the new head of the linked list will be whatever value is added with insert() */
    return this.head;

  };

  /**
   * Will append a new node to the tail, or end, of a linked list with a given value.
   * @param {*} val - The value that is passed in when adding a new node.
   */
  append(val) {

    let node = new Node(val);
    
    /** If there is no head of the linked list, set the head to a newly created node. */
    if (!this.head) {
      this.head = node;
    } else {
      /** Set the head to a variable. This is the while loops initialization. */
      let current = this.head;
      /** So long as current.next is a truthy value, i.e. not NULL, dostuff */
      while(current.next){
        /** This is used to iterate to the next node. Points the current node to be the 'next' node. */
        current = current.next;
      }
      /** Sets the value of the 'next' node to a new node with (val) */
      current.next = node;
    };

  };

  /**
   * Will traverse over the linked list, searching for a specified value. When found, insert a new node with a goven value before the node with the value that was searched for.
   * @param {*} val - the value to search for
   * @param {*} newVal - the value to add to the new inserted node
   * @param {*} current - the current node durring traversal, starting at the head of the linked list
   * @param {*} previous - an empty variable that will be used to grab the value of the node that is previous to current
   */
  insertBefore(val, newVal){

    let current = this.head;
    let previous;

    while(current.next){
        if(current.value === val) {
          let node = new Node(newVal);
          node.next = previous.next;
          previous.next = node;
          break;
        };
        previous = current;
        current = current.next;
    };

  };

  /**
   * Will traverse over the linked list, searching for a specified value. When found, insert a new node with a given value after the node with the value that was searched for.
   * @param {*} val -  the value to search for
   * @param {*} newVal - the value to add to the new inserted node
   */
  insertAfter(val, newVal) {
  
    let current = this.head;
    while(current.next) {
      if (current.value === val) {
        let node = new Node(newVal);
        let nextNode = current.next;
        current.next = node;
        node.next = nextNode;
        break;
      };
      current = current.next;
    };

  };

  /**
   * Will take in a value, search over the linked list for that value and returns a boolean whether or not that value exists.
   * @param {*} searchVal - the value to search for in the list 
   */
  includes(searchVal) {

    /** Set a variable to the head of the linked list. This is the starting point. */
    let current = this.head;

    /** So long as the current node has a value, do stuff. */
    while( current !== null ) {
      if (current.value === searchVal) {
        return true;
      };
      current = current.next;
    };
    return false;

  };

  /**
   * Will traverse a linked list, search for a specific value and return that value if it exists.
   * @param {*} val - the value to search for within the linked list.
   * @returns the value of the node or null if not found.
   */
  getValue(val) {

    let current = this.head;

    while (current) {
      if ( current.value === val) {
        return current.value;
      }
      current = current.next;
    };
    return null;
  };

  /**
   * Takes no argument and will return a string representing all the values of the linked list
   * @param {*} current - the current node durring traversal, starting at the head of the linked list
   * @param {string} result - an empty string that will be used to concat each node's value during traversal
   */
  toString() {

    let current = this.head;
    let result = '';

    /**  So long as the current node exists, do stuff */
    while (current) {

      /** if current.value is not null, concat all values one to another */
      if (current !== null) {
        result += ' { ' + current.value + ' } ' + ' -> ';
        current = current.next;
      };
      
      /** if current.value is null, concat the string 'NULl' to the end of result */
      if ( current === null) {
          result += ' NULL';
      };
    };
    return result;
  };

  /**
   * Will take in a number(k) and return the value of the node that is k from the end of the linked list
   * @param {*} k - the number/argument passed in to determine k from end
   * @param {*} current - the current node durring traversal, starting at the head of the linked list
   * @param {*} previous - an empty variable that will be used to track another node during traversal
   * @param {integer} counter - variable used to track what index each node is at
   */
  kthFromEnd(k) {

    let current = this.head;
    let second = this.head;
    let counter = 0;
    let totalNodes = 1;

    if ( current === null) {
      return 0;
    } else {
      while (current.next !== null) {

        totalNodes++;
        current = current.next;
        
        if ( counter >= k) {
          second = second.next;
        } else {
          counter++;
        };

      };
    };
    
    if (k > totalNodes) {
      console.log('error, k is greater than # of nodes');
    } else if (totalNodes <= 1) {
      console.log('error, linked list does not have enough nodes for traversal');
    } else if (k < 1) {
      console.log('error, k needs to be at least 1 or greater');
    } else if (k === totalNodes) {
      console.log('error, k is the same length as the linked list. kth from end is the head node');
    } else if (k < totalNodes && k >= 1) {
      console.log(second.value);
      return second.value;
    } else {
      console.log('Opps, something wen\'t wrong!');
    };

  };

  /**
   * Tracks the total count of nodes in the linked list
   * @param {*} current - the current node durring traversal, starting at the head of the linked list
   * @param {integer} tally - variable used to track what index each node is at
   *@returns the total count of nodes in the linked list
   */
  nodeCounter() {

    let current = this.head;
    let tally = 0;

    while (current) {
      tally++;
      current = current.next;
    };
    return tally;
  };

};

module.exports = LinkedList;

/*

------- basic linked list traversal -------
set current to this.head
while current is a truthy value
  do stuff
  current = current.next;

*/
