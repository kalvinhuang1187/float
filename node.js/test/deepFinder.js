'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'DEEPFINDER: exports deepFinder method', t => {
    t.ok( fpt.deepFinder, 'has deepFinder export' );
    t.equal( typeof fpt.deepFinder, 'function', 'deepFinder is a function' );
    t.end();
} );

test( 'DEEPFINDER: returns empty array for empty input', t => {
    const input = null;
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.deepEqual( result, [], 'returns empty string for empty input' );
    t.end();
} );

test( 'DEEPFINDER: returns empty array for empty test', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.finder( input, value => null );

    t.deepEqual( result, [], 'returns empty string for empty test' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'aardvark', 'allegory' ], 'result is correct' );
    t.end();
} );

