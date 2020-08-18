'use strict'

/*
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
*/

function binarySearch(arr, key) {

  let min = 0; // first value in array
  let max = arr.length - 1; // last value in array

  //initialize while min does not meet max
  while( min !== max ) {

    //calculates middle of array
    let mid = Math.floor(( min + max ) / 2);

    //logic to determine middle of array and compare mid to the key
    if ( arr[mid] === key ) {

      return mid ;

    } else if ( arr[mid] < key ) {

      min = mid + 1;

    } else if ( arr[mid] > key ){ 

      max = mid - 1;

    };
  };
  return -1;
};

module.exports = binarySearch;