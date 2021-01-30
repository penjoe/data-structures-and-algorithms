'use strict'

const reverse = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while ( start <= end) {
    let temp = arr[start];
    console.log('temp', temp);
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
    console.log('start', start);
    console.log('end', end);
  };
  return arr;
};

module.exports = reverse;