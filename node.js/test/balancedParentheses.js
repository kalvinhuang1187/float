'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'BALANCED PARENTHESES: exports balancedParentheses method', t => {
    t.ok( fpt.balancedParentheses, 'has balancedParentheses export' );
    t.equal( typeof fpt.balancedParentheses, 'function', 'balancedParentheses is a function' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for balanced string', t => {
    const input1 = '(x + y)';
    const result1 = fpt.balancedParentheses( input1 );
    t.equal( result1, true, 'result is correct balanced string (simple)' );

    const input2 = '(w + ((x + y) * z))';
    const result2 = fpt.balancedParentheses( input2 );
    t.equal( result2, true, 'result is correct balanced string (complex)' );
    
    const input3 = 'x + y)('; 
    const result3 = fpt.balancedParentheses( input3 );

    t.equal( result3, true, 'result is correct balanced string (technically balanced =P)' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for unbalanced string', t => {
    const input1 = 'x + y)';
    const result1 = fpt.balancedParentheses( input1 );
    t.equal( result1, false, 'result is correct unbalanced string 1' );

    const input2 = 'x + y(';
    const result2 = fpt.balancedParentheses( input2 );
    t.equal( result2, false, 'result is correct unbalanced string 2' );

    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for empty string', t => {
    const input = '';
    const result = fpt.balancedParentheses( input );

    t.equal( result, false, 'result is correct for empty string' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for string with no parentheses', t => {
    const input = 'x + y';
    const result = fpt.balancedParentheses( input );

    t.equal( result, false, 'result is correct for no parentheses' );
    t.end();
} );

