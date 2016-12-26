'use strict';

/*
 * balancedParentheses
 * 
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 * 
 * Eg:
 * 
 *   input: '(x + y)'
 *   returns: true
 * 
 *   input: '(x + y'
 *   returns: false
 * 
 *   input: 'foo bar baz'
 *   returns: false
 * 
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
  if (input == null) return false;

  var count = 0;
  var flag = false;

  for (var i = 0; i < input.length; i++) {
    if (input[i] == '(') {
      flag = true;    
      count++;
    }
    else if (input[i] == ')')
      count--;
  }

  if (count === 0 && flag == true)
    return true;
  else
    return false;
};

