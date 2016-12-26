'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FINDER: exports finder method', t => {
    t.ok( fpt.finder, 'has finder export' );
    t.equal( typeof fpt.finder, 'function', 'finder is a function' );
    t.end();
} );


test( 'FINDER: returns empty array for empty input', t => {
    const input = null;
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.deepEqual( result, [], 'returns empty string for empty input' );
    t.end();
} );

test( 'FINDER: returns empty array for empty test', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.finder( input, value => null );

    t.deepEqual( result, [], 'returns empty string for empty test' );
    t.end();
} );

test( 'FINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.deepEqual( result, [ 'ant', 'allegory' ], 'finds correct strings that start with a' );
    t.end();
} );

