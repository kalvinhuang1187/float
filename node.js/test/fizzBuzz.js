'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FIZZBUZZ: exports fizzBuzz method', t => {
    t.ok( fpt.fizzBuzz, 'has fizzBuzz export' );
    t.equal( typeof fpt.fizzBuzz, 'function', 'fizzBuzz is a function' );
    t.end();
} );


test( 'FIZZBUZZ: returns empty array if length is less than 1', t => {
    const result = fpt.fizzBuzz( 0 );

    t.deepEqual( result, [], 'empty array case is correct' );
    t.notEqual( result, [ 'fizzbuzz' ], 'empty array case does not return fizzbuzz' )
    t.end();
} );

test( 'FIZZBUZZ: returns empty array if input is not a number', t => {
    const result = fpt.fizzBuzz( "string" );

    t.deepEqual( result, [], 'input is not a number case is correct' );
    t.end();
} );

test( 'FIZZBUZZ: returns a proper array based on input length', t => {
    const result = fpt.fizzBuzz( 15 );

    t.deepEqual( result, [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz' ], 'result is correct' );
    t.end();
} );

