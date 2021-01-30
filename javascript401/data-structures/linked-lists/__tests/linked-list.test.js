'use strict';

/*
Test Suite for the Linked List class. Tests basic implementation and manipulation of a linked list.
*/

const LL = require('../lib/linked-list');

describe('Test suite for Linked Lists', () => {

  describe('Testing basic implementation of a linked list.', () => {

    it('Verify that a new list is actually a new instance of thr LinkedList class.', () => {

      let list = new LL();
      expect(list instanceof LL).toBe(true);
      
    });

    it('Each new linked list should instantiate as an empty list with no outside input', () => {

      let list = new LL();
      expect(list.head).toEqual(null);
      
    });

  });

  describe('Testing ability to insert or append nodes to the linked list.', () => {

    it('Can properly insert a node into the linked list.', () => {

      let list = new LL();
      list.insert('test value');
      let head = list.head;
      expect(head).not.toEqual(null);
      expect(head.value).toEqual('test value');
     
    });

    it('Can properly insert multiple nodes into the linked list.', () => {

      let list = new LL();
      list.insert('value 1');
      list.insert('value 2');
      list.insert('value 3');
      let head = list.head;
      expect(head).not.toEqual(null);
      expect(head.value).toEqual('value 3');
      head = head.next;
      expect(head.value).toEqual('value 2');
     
    });

    it('If only one node is inserted, total node count should be one.', () => {

      let list = new LL();
      list.insert('test value');
      let totalNodes = list.nodeCounter();
      expect(totalNodes).toStrictEqual(1);
      
    });

    it('If three nodes are inserted, total node count should be three.', () => {

      let list = new LL();
      list.insert('value 1');
      list.insert('value 2');
      list.append('value 3');
      let totalNodes = list.nodeCounter();
      expect(totalNodes).toStrictEqual(3);
      
    });

    it('If multiple nodes are added to the list, head should always point to the first node.', () => {

      /** insert always adds new nodes to the front of the list */
      let list = new LL();
      list.insert('value 1');
      list.insert('value 2');
      list.insert('value 3');
      expect(list.head.value).toEqual('value 3');
      list.insert('new head value');
      expect(list.head.value).toEqual('new head value');
      
    });

  });

  describe('Testing ability to search for a value in the linked list and return true/false.', () => {

    it('Should return true if searched value is found.', () => {

      let list = new LL();
      list.insert('value 1');
      list.insert('value 2');
      list.insert('value 3');
      list.insertBefore('value 2', 'new value');
      expect(list.includes('value 2')).toBe(true);
      expect(list.includes('new value')).toBe(true);
      
    });

    it('Should return false if searched value is not found.', () => {

      let list = new LL();
      list.insert('value 1');
      list.insert('value 2');
      list.insert('value 3');
      expect(list.includes('nonexistent value')).toBe(false);
      
    });

  });

  describe('Testing the ability to return a collection of all the values that exist in the linked list', () => {

    it('Can return a string of all values of a linked list', () => {

      let list = new LL();
      list.insert(3);
      list.insert(2);
      list.insert(1);
      let actual = list.toString();
      expect(actual).toEqual(' { 1 }  ->  { 2 }  ->  { 3 }  ->  NULL');

    });

  });

  describe('Testing for k-th from end method on the linked list class', () => {

    it('should return the head if there is only one node in the linked list.', () => {

      let list = new LL();
      list.insert(1);
      let actual = list.kthFromEnd(5);

      expect(actual).toStrictEqual(list.head);
      
    });

    it('should return the string "error" if k is greater than the number of nodes in the list', () => {

      let list = new LL();
      list.insert(2);
      list.insert(1);
      let actual = list.kthFromEnd(5);

      expect(actual).toStrictEqual('error');
      
    });

    it('should return the string "error" if there is no head of the linked list /list is empty', () => {
      
      let list = new LL();
      let actual = list.kthFromEnd(5);

      expect(actual).toStrictEqual('error');

    });

    it('should return the string "error" if k is a negative number', () => {

      let list = new LL();
      list.insert(1);
      list.insert(2);
      list.insert(3);
      let actual = list.kthFromEnd(-5);

      expect(actual).toStrictEqual('error')
      
    });

    it('should return the value of the node when given a number == happy path test', () => {

      let list = new LL();
      list.insert(1)
      list.insert(2)
      list.insert(3)
      list.insert(4)
      list.insert(5)
      let actual = list.kthFromEnd(2);

      expect(actual).toStrictEqual(3)
      
    });

  });

});