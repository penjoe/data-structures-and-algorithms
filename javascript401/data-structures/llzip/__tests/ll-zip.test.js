'use strict';

/* 
Unit tests:
1. Will zippedList.next.value be the same as the original L2.head.value?
2. Will L1.nodeCounter() + L2.nodeCounter() === zippedList.nodeCounter()?
3. What will happen if L1 and L2 are different lengths?
4. Are either L1 or L2 an empty list? Will it work if L2 is empty and L1 is not? Vice versa?
*/

const LL = require('../../linked-lists/lib/linked-list');
const zipLists = require('../ll-zip');

let ll1 = new LL();
let ll2 = new LL();

ll1.insert(7);
ll1.insert(5);
ll1.insert(3);
ll1.insert(1);
ll2.insert(8);
ll2.insert(6);
ll2.insert(4);
ll2.insert(2);

describe('Test suite for ll-zip', () => {

  it('The new zipped list should contain the same amount of nodes as the two original lists', () => {

    expect(zipLists(ll1, ll2).nodeCounter()).toEqual(8);
    
  });
  
});