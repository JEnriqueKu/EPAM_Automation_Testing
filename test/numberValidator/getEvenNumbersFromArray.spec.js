import NumbersValidator from "../../app/NumbersValidator.js";
import {expect} from "chai";

describe("getEvenNumberFromArray", function () {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator();
    })

    afterEach(function () {
        validator=null;
    })

    it('Should return an array containing only the even numbers from the given array', () => {
        const array = [1,2,3,4,5,6,7,8];
        const arrayOfEven = [2,4,6,8];
        expect(validator.getEvenNumbersFromArray(array)).to.be.deep.equal(arrayOfEven);
    });

    it('Should return an empty array when the given array does not contain any even numbers', () => {
        const array = [1,3,5,7];
        const arrayOfEven = [];
        expect(validator.getEvenNumbersFromArray(array)).to.be.deep.equal(arrayOfEven);
    });

    it('Should throw an error when provided a String', () => {
        const string = "S";
        expect(function () {
            validator.getEvenNumbersFromArray(string);
        }).to.throw(`[${string}] is not an array of "Numbers"`);
    });

    it('Should throw an error when provided a Number', () => {
        const number = 4;
        expect(function () {
            validator.getEvenNumbersFromArray(number);
        }).to.throw(`[${number}] is not an array of "Numbers"`);
    });

    it('Should throw an error when provided with an array containing non-numeric values', () => {
        const array = [4,6,"E",2];
        expect(function () {
            validator.getEvenNumbersFromArray(array);
        }).to.throw(`[${array}] is not an array of "Numbers"`);
    });
})