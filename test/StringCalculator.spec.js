var chai = require('chai');
var expect = chai.expect;
var it = require('mocha/lib/mocha.js').it;
var describe = require('mocha/lib/mocha.js').describe;

var StringCalculator = require('../src/StringCalculator');

describe("String Calculator", function() {
    var stringCalculator = new StringCalculator();

    it("should return 0 if string is empty", function() {
        var data = "";
        var expectedResult = stringCalculator.Add(data);
        expect(expectedResult).to.be.equal(0);
    });

    it("should return the same number if only pass one", function() {
        var data = "5";
        var expectedResult = stringCalculator.Add(data);
        expect(expectedResult).to.be.equal("5");
    });

});