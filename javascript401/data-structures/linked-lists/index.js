'use strict';

const LinkedList = require('./lib/linked-list');

let list = new LinkedList();

list.insert(1);
list.insert(3);
list.insert(2);
list.insert('Joe');
list.insert('Meghan');
list.insert('Coding is fun!');
list.append('Hi, I\'m a node!');
list.append('test');
list.append('last node');
list.insertBefore('Joe', 'test');
list.insertBefore('Meghan', 'wifey');
list.insertAfter('wifey', 'testAfter');
list.includes('Joe'); // should return true
list.includes('Billy'); //should return false
list.includes();
list.toString();

list.nodeCounter();

console.log('linked list', list);