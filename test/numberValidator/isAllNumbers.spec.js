import NumbersValidator from "../../app/NumbersValidator.js";
import {expect} from "chai";

describe('isAllNumbers', () => {
    let validator;
    
    beforeEach(function () {
        validator = new NumbersValidator();
    })
    
    afterEach(function () {
        validator = null;
    })

    it('should return true if all elements in the given array are numbers', () => {
        const array = [1,2,3,4,5,6];
        expect(validator.isAllNumbers(array)).to.be.true;
    });

    it('should return false if not all elements in the given array are numbers', () => {
        const array = [1,2,3,4,"e",6];
        expect(validator.isAllNumbers(array)).to.be.false;
    });

    /*it('should return false when provided an empty array', () => {
        const array = [];
        expect(validator.isAllNumbers(array)).to.be.false;
    });*/

    it('should throw an error when provided a String', () => {
        const string = "S";
        expect(function () {
            validator.isAllNumbers(string);
        }).to.throw(`[${string}] is not an array`)
    });

    it('should throw an error when provided a Number', () => {
        const number = 4;
        expect(function () {
            validator.isAllNumbers(number);
        }).to.throw(`[${number}] is not an array`)
    });
});