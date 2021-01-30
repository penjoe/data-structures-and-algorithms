'use strict';

const insertionSort = require('../insertion-sort.js');

describe('Unit tests for the insertion sort array algorithm', () => {

  it('In an array of 2 numbers, the left one should be smaller', () => {
    
    let nums = [3, 2];
    let sortedNums = insertionSort(nums);

    expect(sortedNums).toStrictEqual([2, 3]);

  });

  it('A random index should be greater than that index - 1', () => {

    let nums = [20,18,12,8,5,-2];
    let sortedNums = insertionSort(nums);

    expect(sortedNums[3]).toBeGreaterThan(sortedNums[2]);

  });

  it('should ignore indexes in the array that are not numbers', () => {
    
    let nums = [20,18,'a',12,8,5,-2]; //index position 2 is 'a'
    let sortedNums = insertionSort(nums);

    expect(sortedNums[2]).toStrictEqual('a'); // index position of sorted arr is still 'a'

  });
  
});