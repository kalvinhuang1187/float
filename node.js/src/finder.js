'use strict';

/*
 * finder
 * 
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 * 
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {
  var valid = [];

  // return empty array for null input and test for now, product question
  if (input == null || test == null || input.length < 1) return valid;

  for (var i = 0; i < input.length; i++) {
    if (typeof input[i] == 'string' && test(input[i]))
      valid.push(input[i]);
  }

  return valid;
};

