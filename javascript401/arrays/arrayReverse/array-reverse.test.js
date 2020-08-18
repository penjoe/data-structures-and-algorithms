'use strict'

const arrayReverse = require('./array-reverse');

describe('Testing for arrayReverse function, JS 401 Code Challenge 01', () => {
  test('Function should reverse the contents of an array regardless of the contents of said array.', () => {
    expect(arrayReverse([1,2,3,4,5]).toStrictEqual([5,4,3,2,1]));
  });
});