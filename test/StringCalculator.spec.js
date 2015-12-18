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
        expect(expectedResult).to.be.equal(5);
    });

    it("should return the sum of the numbers if it have 2 numbers", function() {
        var data = "1,2";
        var expectedResult = stringCalculator.Add(data);
        expect(expectedResult).to.be.equal(3);
    });

    it("should return the sum of the numbers if it have more than 3 numbers", function() {
        var data = "1,2,3";
        var expectedResult = stringCalculator.Add(data);
        expect(expectedResult).to.be.equal(6);
    });

    it("should return the sum if the string have a return line to separate numbers", function() {
        var data = "1\n2,3";
        var expectedResult = stringCalculator.Add(data);
        expect(expectedResult).to.be.equal(6);
    });

    it("should detect delimiter and split with it", function() {
        var data = "//;\n1;2";
        var expectedResult = stringCalculator.Add(data);
        expect(expectedResult).to.be.equal(3);
    });
});