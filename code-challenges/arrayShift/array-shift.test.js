'use strict'

const arrayShift = require('./array-shift.js');

describe('Testing array-shift code challenge', () => {
  it('Should insert a value into an array without using built in JS methods', () => {
    const testArray = [2,4,6,8];
    const testValue = 5;
    const shiftArray = arrayShift(testArray, testValue);

    expect(shiftArray).toStrictEqual([2,4,5,6,8]);
    
  });
  it('Should insert a value into an array without built in JS methods, regardless of odd or even array values.', () => {
    const testArray2 = [4,8,15,23,42];
    const testValue2 = 16;
    const shiftArray2 = arrayShift(testArray2, testValue2);

    expect(shiftArray2).toStrictEqual([4,8,15,16,23,42]);
  })
});