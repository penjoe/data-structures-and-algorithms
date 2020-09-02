'use strict';

/**
 * Takes in two linked lists and 'zips' them together.
 * @param {*} L1 - First linked list to be zipped into.
 * @param {*} L2 - Second linked list to zip into first.
 * @returns Both linked lists zipped into one.
 */
module.exports = function (list1, list2) {

  /** Checks to see if either list is empty. */
  if(!list1.head) {
    return list2;
  } else if (!list2.head) {
    return list1;
  };

  let current1 = list1.head;
  let temp1 = current1.next;
  let current2 = list2.head;
  let temp2;

  while( current1.next ) {
 
    /** Saves the 'next' value of current2.head */
    temp2 = current2.next; 

    /** Points current1 next() to current2 head. Points current2 head to current2 next(). */
    current1.next = current2;
    current2 = temp2;

    /** Increments current1 and sets the current1 next() value back to original current1.head.next(). */
    current1 = current1.next;
    current1.next = temp1;

    /** Increments current1 and saves the value of current1 next(). */
    current1 = current1.next;
    temp1 = current1.next;

  };

  /** Does the last incremental to ensure traversal makes it to end of linked current. */
  current1.next = current2;
  current1 = current1.next;
  current1.next = temp1;

  return list1;

};