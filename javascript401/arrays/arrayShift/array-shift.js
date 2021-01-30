'use strict'

const insertShiftArray = (array, value) => {
  let mid = Math.floor(array.length/2);
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
      };
    };
  return newArr;
}

module.exports = insertShiftArray;