'use strict';

/** Insertion Sort Algorithm */

/**
 * A simple Insertion Sort implementation taking in an array of numbers.
 * @param {*} arr - an unsorted array of numbers
 * @return a sorted array of numbers
 */
const insertionSort = (arr) => {

  for (let i = 1; i < arr.length; i++) {

    let j = i - 1;
    let temp = arr[i];
    
    while (j >= 0 && temp < arr[j]) {

      arr[j + 1] = arr[j];
      j = j - 1;

    };

    arr[j + 1] = temp;

  };
  
  return arr;

};

module.exports = insertionSort;