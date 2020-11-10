'use strict';

const quickSort = require('../quick-sort.js');

describe('Unit tests for quickSort algorithm', () => {

  it('should return an empty array if quickSort is given an empty array', () => {

    let nums = [];
    let sortedNums = quickSort(nums);

    expect(sortedNums[0]).toBeUndefined();
    expect(sortedNums.length).toStrictEqual(0);
    
  });

  it('should return an array of 1 if quickSort is given an array with only 1 index', () => {

    let nums = [5];
    let sortedNums = quickSort(nums);

    expect(sortedNums[0]).toStrictEqual(5);
    expect(sortedNums.length).toStrictEqual(1);
    
  });

  it('index 0 should be less than index 1', () => {

    let nums = [20,18,12,8,5,-2];
    let sortedNums = quickSort(nums);

    expect(sortedNums[0]).toBeLessThan(sortedNums[1]);
    
  });

  it('a random index should be greater than that index - 1', () => {

    let nums = [20,18,12,8,5,-2];
    let sortedNums = quickSort(nums);

    expect(sortedNums[4]).toBeGreaterThan(sortedNums[3]);
    
  });

  it('index 0 should be the smallest number in the array', () => {

    let nums = [8,4,23,42,16,15];
    let sortedNums = quickSort(nums);

    expect(sortedNums[0]).toStrictEqual(4);
    
  });

});