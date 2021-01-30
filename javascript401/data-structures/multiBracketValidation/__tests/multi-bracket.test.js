'use strict'

const isBalanced = require('../multi-bracket-validation.js');

describe('Unit test for multi bracket validation', () => {

  it('should return true on a string with balanced brackets', () => {

    let string = '(){}[]';
    let actual = isBalanced(string)
    expect(actual).toBe(true);
    
  });

  it('should return false on a string with unbalanced brackets', () => {

    let string = '(){}]';
    expect(isBalanced(string)).toBe(false);
    
  });

  it('should return false on a string with a length of 1', () => {

    let string = '{';
    expect(isBalanced(string)).toBe(false);
    
  });

  it('should return false if given no string', () => {

    expect(isBalanced()).toBe(false);
    
  });

  it('should return true on a string with no brackets', () => {

    let string = 'no brackets';
    expect(isBalanced(string)).toBe(true);
    
  });

});