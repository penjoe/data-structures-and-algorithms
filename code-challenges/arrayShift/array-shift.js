'use strict'

/*
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built in methods available to your language, return an array with the newnvalue added at the middle index.
*/

const insertShiftArray = (array, value) => {
  let mid = Math.round(array.length/2);
  let arr = array;
  let newArr = [];
    for (let i = 0; i < arr.length; i++){
      if (i < mid) {
        newArr[i] = arr[i];
      } else if ( i === mid ) {
        newArr[i] = value;
        newArr[i + 1] = arr[i]; 
      } else if (i > mid) {
        newArr[i + 1] = arr[i];
      }
    }
  console.log(newArr);
  return newArr;
}

console.log(insertShiftArray([2,4,6,8,10], 5));



module.exports = insertShiftArray;