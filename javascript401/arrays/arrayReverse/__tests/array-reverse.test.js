'use strict'

const arrayReverse = require('../array-reverse');

describe('Testing for arrayReverse function, JS 401 Code Challenge 01', () => {
  it('Function should reverse the contents of an array regardless of the contents of said array.', () => {
    let input = [1,2,3,4,5,6,7,8];
    let actual = [8,7,6,5,4,3,2,1];

    expect(arrayReverse(input)).toEqual(actual);
    expect(arrayReverse([1,2,3])).toEqual([3,2,1]);
  });
});