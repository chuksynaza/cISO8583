const assert = require('assert');
const expect = require('chai').expect;

const bitmap = require("../../../src/bitmap");

let Bitmap = new bitmap();

describe('Bitmap', () => {

    describe('isSecondaryBitmap', () => {

        it('should return false if it is a primary bitmap', () => {

            expect(Bitmap.isSecondaryBitmap("35001180C0100000")).to.be.false;

        });

        it('should return true if it is a secondary bitmap', () => {

            expect(Bitmap.isSecondaryBitmap("F4570004A41100F8")).to.be.true;

        });

    });

});