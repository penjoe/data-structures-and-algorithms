'use strict'

let array = [1,2,3,4,5,6]

function reverseArray(arr) {
  let result = [];
  let length = arr.length -1;
  for (length; length >= 0; length --) {
    result.push(arr[length]);
  }
  return result;
}

reverseArray(array);