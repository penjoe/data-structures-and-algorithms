'use strict';

/** Test suite for a simple Hashtable implementation */

/*
Adding a key/value to your hashtable results in the value being in the data structure
Retrieving based on a key returns the value stored
Successfully returns null for a key that does not exist in the hashtable
Successfully handle a collision within the hashtable
Successfully retrieve a value from a bucket within the hashtable that has a collision
Successfully hash a key to an in-range value
*/

const Hashtable = require('../hashtable.js');

describe('Test suite for Hashtable implementation', () => {

  let test;
  beforeEach( () => {
    test = new Hashtable(1000);
    test._set('name', 'joe');
    test._set('sawyer', 'loves treats');
    test._set('meghan', 'is wifey');
    test._set('some random key', 'some random value');
    test._set('foo', 'bar');
  })

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {

    expect(test._contains('foo')).toBeTruthy();
    expect(test._get('foo')).toBe('bar');
    expect(test._contains('should be false')).toBeFalsy();

  });

  it('Retrieving based on a key returns the value stored', () => {

    expect(test._get('name')).toStrictEqual('joe');
    expect(test._get('some random key')).toStrictEqual('some random value');
    
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {

    expect(test._contains('not here')).toBeFalsy();

  });

  it('Successfully handle a collision within the hashtable', () => {

    expect(test._hash('test')).toBeGreaterThan(0);
    expect(test._hash('test')).toBeLessThan(1001);

  })

});

describe('testing Hashtable collisions', () => {

  it('Successfully handle a collision within the hashtable', () => {

    test = new Hashtable(1);
    test._set('name', 'joe');
    test._set('sawyer', 'loves treats');
    test._set('meghan', 'is wifey');
    test._set('some random key', 'some random value');
    test._set('foo', 'bar');

    expect(test._get('name')).toBe('joe');
    expect(test._get('meghan')).toBe('is wifey');
    
  });

});

