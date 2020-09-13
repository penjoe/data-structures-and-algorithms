'use strict';

const Stack = require('./lib/stack.js');
const Queue = require('./lib/queue.js');

let stack = new Stack();
let queue = new Queue();

// pre test tests
stack.push(1);
stack.push(2);
stack.push('joe');
stack.push('sarah')
stack.push('edgar')
// stack.pop();
stack.peek();
stack.isEmpty();

queue.enqueue(1);

console.log({stack});
console.log({queue});
