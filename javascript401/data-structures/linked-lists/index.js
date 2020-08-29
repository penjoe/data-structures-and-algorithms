'use strict';

const LinkedList = require('./lib/linked-list');

let list = new LinkedList();

console.log(list)

list.insert(9);
list.insert(8);
list.insert(7);
list.insert(6);
list.insert(4);
list.insert(1);
list.append(10);
list.append(11);
list.append(12);
list.insertBefore(4, 3);
list.insertBefore(3, 2);
list.insertAfter(4, 5);
list.includes(5); // should return true
list.includes('Billy'); // should return false
list.includes(); // should return false
list.toString();
list.kthFromEnd(6);

// list.nodeCounter();

// console.log(list);

// console.log('linked list', JSON.stringify(list, null, 2));