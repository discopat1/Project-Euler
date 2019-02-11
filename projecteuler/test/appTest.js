const assert = require('chai').assert;
const expect = require('chai').expect;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
const findMultiples = require('../exercise1').findMultiples;

// test2....

describe('App', function(){
    // it('sayHello should return hello', function(){
    //     assert.equal(sayHello(), 'hello')
    // });

    // it('sayHello should return type string', function() {
    //     let result = sayHello();
    //     assert.typeOf(result, 'string');
    // });

    // it('addNumbers should be above 5', function() {
    //     let result = addNumbers(5,5);
    //     assert.isAbove(result, 5);
    // });

    // it('addNumbers should return type number', function() {
    //     let result = addNumbers(5,5);
    //     assert.typeOf(result, 'number');
    // });
    it('findMultiples should return number which divided by 3 or 5 have remainder of 0', function() {
        let result = findMultiples(20);
        assert.equal(result, true);
    });
    it('addNumbers should create sum of all numbers divisible by 3 or 5 under 1000', function() {
        let result = addNumbers();
        assert.equal(result, 332667);
    });
});