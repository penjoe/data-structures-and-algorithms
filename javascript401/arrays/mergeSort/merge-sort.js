'use strict'

/**
 * Function that takes in an unsorted array as an argument, sorts it using a divide and conquer approach. It calls itself recursively to divide an array in half, then continualy divide until each array is no mroe than one element.
 * @param {*} arr - an unsorted array.
 * @return a sorted array.
 */
const mergeSort = (arr) =>{

  // returns the array if 1 or less element in array since that won't need to be sorted
  if (arr.length <= 1){
    return arr;
  };

  let n = arr.length;

  let mid = n / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);

  return arr;

};

/**
 * A helper function used inside of mergeSort that takes in two arrays and merges them back together. Is called recursively inside of mergeSort to concat the divided arrays back into one complete, sorted array.
 * @param {*} left - the left side array of the divided array from mergeSort.
 * @param {*} right - the right side array of the divided array from mergeSort.
 * @param {*} arr - the new, sorted array that is the result of left and right being concatenated.
 * @return a newly sorted array.
 */
const merge = (left, right, arr) => {

  let i = 0;
  let j = 0;
  let k = 0;
  // let results = [];

  while (i < left.length && j < right.length) {

    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
    }
    else {
      arr[k] = right[j];
      j++;
    };
    k = k + 1;
  };

  if (i === left.length) {
    arr[k] = right[j];
  }
  else {
    arr[k] = left[i]
  };

  return arr;

};

module.exports = mergeSort;