const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

    it('should submit fizz, buzz, or fizzbuzz on 3, 5, and 15, depending on value', function (){

        const normalCases = [
            { a: 3, expected: "fizz"},
            { a: 5, expected: "buzz"},
            { a: 15, expected: "fizz-buzz"}
        ];

        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input.a);
            answer.should.equal(input.expected);           
        });

    });

    it('should raise errors if args are not numbers', function(){

        const badInputs = ['a', "beans", "fizz buzz", "fifteen"];
        
        badInputs.forEach(function(input){
            (function (){
                fizzBuzzer(input);
            }).should.throw(Error);
        });

    });

});