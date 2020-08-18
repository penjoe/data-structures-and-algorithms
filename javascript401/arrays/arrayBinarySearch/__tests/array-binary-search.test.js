'use strict'

/* 
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
*/

const binarySearch = require('../array-binary-search');

describe('Testing for array-binary-search code challenge', () => {
  it('Search through array and return the index of the arrays element that is equal to the search key.', () => {
    const testArray = [4,8,15,16,23,42];
    const testValue = 15;
    const result = binarySearch(testArray, testValue);

    expect(result).toStrictEqual(2);
  });
  it('Search array, if target value does not exist then return a static value.', () =>{
    const testArray2 = [11,22,33,44,55,66,77];
    const testValue2 = 90;
    const result2 = binarySearch(testArray2, testValue2);

    expect(result2).toStrictEqual(-1);
  });
});