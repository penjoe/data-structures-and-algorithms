'use strict';

const LL = require('./ll.js');

class Hashtable {

  /**
   * Constructor function to make a new hashtable via an array
   * @param {*} size - the pre determined size of the hash tables storage
   */
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  };

  /**
   * Method that takes in a key/value pair and adds the value to the hashtable using the hashed key to point to the correct index
   * @param {*} key - the key that is ran through the hashing function
   * @param {*} value - the value to be stored in the hashtable
   */
  _add(key, value) {

    let hash = this._hash(key); // gets the index position for the key/value pair

    if (!this.storage[hash]) {
      let ll = new LL();
      ll._llAdd([key, value]);
      this.storage[hash] = ll;
    }
    else {
      this.storage[hash]._llAdd([key, value]);
    };

  };

  /* use the LL method at each hash to get a specific key value pair */
  _get(key) {

    let hash = this._hash(key);

    if (!this.storage[hash]) {
      return null;
    }
    else {
      this.storage[hash].getValue(key)
    };

  };

  /* use a LL method to cehck if a specific value exists at this hash*/
  _contains(key) {
    // hash the key to find the correct index    
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

let test = new Hashtable(500);

console.log(test._add('foo', 'bar'))

module.exports = Hashtable;