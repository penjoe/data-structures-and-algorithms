'use strict'

const arrayShift = require('./array-shift.js');

describe('Testing array-shift code challenge', () => {
  it('Should insert a value into an array without using built in JS methods', () => {
    const testArray = [2,4,6,8];
    const testValue = 5;
    const shiftArray = arrayShift(testArray, testValue);

    expect(shiftArray).toStrictEqual([2,4,5,6,8]);
  });
});