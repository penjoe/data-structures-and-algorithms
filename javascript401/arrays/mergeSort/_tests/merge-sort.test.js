'use strict';

const mergeSort = require('../merge-sort.js');

describe('Unit tests for the merge sort algorithm.', () => {
  
  it('index 1 should be greater than index 0', () => {
    
      let nums = [34, 7, 19, 5, 56, 43, -9];
      let sortedNums = mergeSort(nums);

      expect(sortedNums[1]).toBeGreaterThan(sortedNums[0]);

  });

  it('any random index should be greater than that index - 1', () => {

    let nums = [34, 7, 19, 5, 56, 43, -9];
    let sortedNums = mergeSort(nums);

    expect(sortedNums[4]).toBeGreaterThan(sortedNums[4 - 1]);
    
  });

  it('should return an empty array if an empty array is given as an arg', () => {

    let nums = [];
    let sortedNums = mergeSort(nums);

    expect(sortedNums[0]).toBe(undefined);
    
  });

  it('should return an array of 1 if an array with 1 index is given as an arg', () => {

    let nums = [5];
    let sortedNums = mergeSort(nums);

    expect(sortedNums[0]).toStrictEqual(5)
    
  });

});