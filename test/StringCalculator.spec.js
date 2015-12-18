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

    it("should throw error if contains any negative number", function() {
        var data = "-2,4,-5";
        expect((function() {
            stringCalculator.Add(data)
        })).to.throw(Error, /-2,-5/);
    });

    it("should throw error if contains any negative number with delimiter", function() {
        var data = "//;\n1;-2;3";
        expect((function() {
            stringCalculator.Add(data)
        })).to.throw(Error, /-2/);
    });

    it("should ignore numbers bigger than 1000", function() {
        var data = "1,2,1000,5,1030";
        var expectedResult = stringCalculator.Add(data);
        expect(expectedResult).to.be.equal(8);
    });

    it("should return split with custom delimiter", function() {
        var data = "//[***]\n1***2***3";
        var expectedResult = stringCalculator.Add(data);
        expect(expectedResult).to.be.equal(6);
    });

    //it("should return split with custom delimiters", function() {
    //    var data = "//[*][%]\n1*2%3";
    //    var expectedResult = stringCalculator.Add(data);
    //    expect(expectedResult).to.be.equal(6);
    //});
});
