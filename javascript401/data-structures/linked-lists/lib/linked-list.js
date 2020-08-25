'use strict';

const Node = require('./node.js');

/**
 * @param {*} this.head - This is a reference to the head, or beginning, of a linked list.
 */
class LinkedList {

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
        console.log(true);
        return true;
      };
      current = current.next;
    };
    console.log(false);
    return false;

  };

  /**
   * Takes no argument and will return a string representing all the values of the linked list
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
    console.log(result);
  };

  /**
   * Tracks the total count of nodes in the linked list
   *@returns the total count of nodes
   */
  nodeCounter() {

    let current = this.head;
    let tally = 0;

    while(current){
      tally++;
      current = current.next;
    };
    console.log(tally);
    return tally;
  };

};

module.exports = LinkedList;