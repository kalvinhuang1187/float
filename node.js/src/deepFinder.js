'use strict';

/*
 * deepFinder
 * 
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {

  function recursiveFind(input, test, valid=[]) {

    if (input == null || test == null || input.length < 1) return valid;

    for (var i in input) {
      if (typeof(input[i]) == 'object')
        recursiveFind(input[i], test, valid);
      else if (typeof(input[i]) === 'string' && test(input[i]))
        valid.push(input[i]);
    }
    return valid;
  }

  return recursiveFind(input, test)  
};

