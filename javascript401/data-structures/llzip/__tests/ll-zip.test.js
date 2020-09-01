'use strict';

/* 
Unit tests:
1. Will zippedList.next.value be the same as the original L2.head.value?
2. Will L1.nodeCounter() + L2.nodeCounter() === zippedList.nodeCounter()?
3. What will happen if L1 and L2 are different lengths?
4. Are either L1 or L2 an empty list? Will it work if L2 is empty and L1 is not? Vice versa?
*/

const zipLists = require('../ll-zip');

console.log(typeof zipLists)