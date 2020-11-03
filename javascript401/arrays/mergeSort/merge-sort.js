'use strict'

/*
----- PSEUDO -----

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

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

  while (left.length > 0) {
    arr[k] = left[i];
  };
  while (right.length > 0) {
    arr[k] = right[j];
  };

  return arr;

};

let nums = [8,4,23,42,16,15];
console.log(mergeSort(nums));

module.exports = mergeSort;














/*

------- pseudo from wikipedia below -------------

function merge_sort(list m) is
    // Base case. A list of zero or one elements is sorted, by definition.
    if length of m ≤ 1 then
        return m

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    // This assumes lists start at index 0.
    var left := empty list
    var right := empty list
    for each x with index i in m do
        if i < (length of m)/2 then
            add x to left
        else
            add x to right

    // Recursively sort both sublists.
    left := merge_sort(left)
    right := merge_sort(right)

    // Then merge the now-sorted sublists.
    return merge(left, right)

function merge(left, right) is
    var result := empty list

    while left is not empty and right is not empty do
        if first(left) ≤ first(right) then
            append first(left) to result
            left := rest(left)
        else
            append first(right) to result
            right := rest(right)

    // Either left or right may have elements left; consume them.
    // (Only one of the following loops will actually be entered.)
    while left is not empty do
        append first(left) to result
        left := rest(left)
    while right is not empty do
        append first(right) to result
        right := rest(right)
    return result

wikipedia attempt-------------

const mergeSort = (arr) =>{

  // returns the array if 1 or less element in array since that won't need to be sorted
  if (arr.length <= 1){
    return arr;
  };

  let left = [];
  let right = [];
  for ( let i = 0; i , arr.length; i++){
    if (i < arr.length){
      left[left.length] = i;
    }
    else {
      right[right.length] = i
    };
  };

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);

};

const merge = (left, right) => {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result[result.length] = left[0];
    }
    else {
      result[result.length] = right[0];
    };
  };

  while (left.length > 0) {
    result[result.length] = left[0];
  };
  while (right.length > 0) {
    result[result.length] = right[0];
  };

  return result;

};

*/