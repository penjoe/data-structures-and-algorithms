'use strict';

const LinkedList = require('./lib/linked-list');

let list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert('Joe');
list.insert('Meghan');
list.insert('Coding is fun!');
list.includes('Joe'); // should return true
list.includes('Billy'); //should return false
list.includes();
list.toString();

console.log('linked list', list);