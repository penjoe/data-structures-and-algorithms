'use strict';

/**
 * A simple implementation of a quick sort algorithm.
 * @param {*} arr - an unsorted array of numbers.
 * @param {*} left - the lowest index that needs to be sorted.
 * @param {*} right - the last index of the array that will be used as the pivot value.
 * @returns a sorted arry of numbers.
 */
const quickSort = (arr, left = 0, right = arr.length -1) => {

  /** return the given array if empty or if it contains only one value */
  if (arr.length <= 1) {
    return arr;
  };

  /** as long as the smallest index is less than the pivot value: */
  /** set the pivot value as the last index in the array */
  /** run the quickSort function on the left partition of the array */
  /** run the quickSort function on the right partition of the array */
  if (left < right) {
    let pivot = partition(arr, left, right); 
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  };

  return arr;

};

/**
 * A helper function for quickSort that will set a pivot value and divide the array into less than pivot and greater than pivot 'partitions'.
 * @param {*} arr - The array to be sorted by quickSort.
 * @param {*} left - The smallest array index to be sorted.
 * @param {*} right - The last array index to be sorted which will be used as the pivot value.
 * @returns the value to be used as the pivot.
 */
const partition = (arr, left, right) => {

  /* Set the pivot to arr.length -1 */
  let pivot = arr[right];
  let pointer = left - 1; // also could be considered [j] in the for loop

  /** Loop over the array so long as left is less than right */
  /** if the current inde of the for loop is less than or equal to the pivot value (arr.length -1) */
  /** move the pointer up one index */
  /** call the swap function that will swap the pointer ([j]) with the current index of the for loop */
  for (let i = left; i < right; i++) {
    
    if ( arr[i] <= pivot) {
      pointer++;
      swap(arr, i, pointer);
    };
  };

  /** run swap again to swap the pivot value with the pointer +1, placing the pivot in the middle of the two 'partitions' */
  swap(arr, right, pointer + 1);

  return pointer + 1;

};

/**
 * A simple helper function that swaps values.
 * @param {*} arr - the array being sorted by quickSort.
 * @param {*} i - one of the two values to be swapped, typically the index of the for loop in the partition function
 * @param {*} pointer - the other value to be swapped, typically the pointer, or the [j] value inside the for loop of partition
 */
const swap = (arr, i, pointer) => {

  /** swap [i] with [pointer], [pointer] with [i] */
  let temp;
  temp = arr[i];
  arr[i] = arr[pointer];
  arr[pointer] = temp;

};

module.exports = quickSort;