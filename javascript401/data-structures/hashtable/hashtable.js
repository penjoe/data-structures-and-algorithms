'use strict';

const LL = require('./ll.js');
const Node = require('./node.js');

class Hashtable {

  /**
   * Constructor function to make a new hashtable via an array
   * @param {*} size - the pre determined size of the hash tables storage
   */
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
    this.count = 0;
  };

  /**
   * Method that takes in a key/value pair and adds the value to the hashtable using the hashed key to point to the correct index. Uses a linked list implementation as the storage type of each "bucket"
   * @param {*} key - the key that is ran through the hashing function
   * @param {*} value - the value to be stored in the hashtable
   */
  _set(key, value) {

    let index = this._hash(key); // gets the index position for the key/value pair
    let bucket = this.storage[index];
    let data = new Node([key, value]);  // index [0] is the key and index [1] is the value i.e. bucket.(head || current).value([0] || [1])

    if (!this.storage[index]) {

      bucket = new LL(data);  // bucket is now a linked list and can be traversed or mutated as such
      this.storage[index] = bucket;
      bucket.count++;
      this.count++;

      return 'new bucket created at index ' + index;

    }
    else {

      // should add some validation to either prevent dup keys or otherwise accomodate them
      // also validation to require a value if a key is given. no NULL values allowed

      let current = bucket.head;

      while (current.next) {
        current = current.next;
      };
      current.next = data;
      bucket.count++;
      this.count++;

      return 'new item placed in bucket at position ' + bucket.count;
    };

  };

  /**
   * Takes in a key, hashes the key to find the correct index of the hash table, traverses the corresponding linked list to see if the key value pair exists and returns the value associated with the key
   * @param {string} key - the key uses to hash for the index position of the hash table
   * @returns the value associated with the provided key
   */
  _get(key) {

    let index = this._hash(key);
    let bucket = this.storage[index];

    if (!bucket) {
      return 'these are not the droids you are looking for';
    };

    let current = bucket.head;

    while (current) {
      if (current.value[0] === key) {
        return current.value[1];
      };
      current = current.next;
    };

  };

  /**
   * Takes in a key, hashes the key to find the index position and traverses the list to see if the key belongs to a key value pair
   * @param {string} key - the key used to hash for the index position of the hash table
   * @returns a boolean value if the key/value pair exists
   */
  _contains(key) {

    let index = this._hash(key);
    let bucket = this.storage[index];

    if (!bucket) {
      return false;
    };

    let current = bucket.head;

    while (current) {
      if (current.value[0] === key) {
        return true;
      };
      current = current.next;
    };

    return false;
       
  };

  /**
   * A JavaScript inplementation of the `djb2` hash function.
   * @param {*} key - the string to run through the hash fucntion that will determine the array index
   * @returns the hashed key, or the index of the hashtable the key points to.
   */
  _hash(key) {
    let length = key.length; 
    let h = 5381;

    for (let i = 0; i < length; i++) {
      h = h * 33 ^ key.charCodeAt(i);
    };
    let hash = h >>> 0;
    return hash % this.size;
  };

};

module.exports = Hashtable;