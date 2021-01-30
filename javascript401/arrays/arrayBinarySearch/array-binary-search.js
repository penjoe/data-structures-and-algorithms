'use strict'

function binarySearch(arr, key) {

  let min = 0; 
  let max = arr.length - 1;

  while( min <= max ) {
    let mid = Math.floor(( min + max ) / 2);
    if ( arr[mid] === key ) {
      return mid;
    } else if ( arr[mid] < key ) {
      min = mid + 1;
    } else { 
      max = mid - 1;
    };
  };
  return -1;
};

module.exports = binarySearch;