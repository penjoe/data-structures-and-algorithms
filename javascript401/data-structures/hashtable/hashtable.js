'use strict';

const LL = require('../linked-lists/lib/linked-list.js');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  };

  _add(key, value) {

    let hash = this._hash(key); // gets the index position for the key/value pair

    if (!this.storage[hash]) {
      let ll = new LL();
      ll.insert([key, value]);
      this.storage[hash] = ll;
    }
    else {
      this.storage[hash].insert([key, value]);
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
    let hash = this._hash(key)
    this.storage[hash].toString();
  };

  /**
   * A JavaScript inplementation of the `djb2` hash function.
   * @param {*} key - the string to run through the hash fucntion that will determine the array index
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

let test = new Hashtable(5);
test._add('foo', 'bar');
test._add('cool', 'beans');
test._add('remote', 'sucks');
test._add('sawyer', 'puppers');
test._add('meghan', 'wifey');
test._add('joe', 'is tired');
test._add('joe', 'is hungry');
test._add('joe', 'is funny');
test._add('joe', 'is funny');
test._add('joe', 'is funny');
test._add('joe', 'is funny');
test._contains('joe');

module.exports = Hashtable;