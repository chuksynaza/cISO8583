const assert = require('assert');
const expect = require('chai').expect;

const hexbin = require("../../../src/hexbin");

let HexBin = new hexbin();

const bitmap = require("../../../src/bitmap");

let Bitmap = new bitmap(HexBin);

describe('Bitmap', () => {

    describe('isSecondaryBitmap', () => {

        it('should return false if it is a primary bitmap', () => {

            expect(Bitmap.isSecondaryBitmap("2020000000800000")).to.be.false;

        });

        it('should return true if it is a secondary bitmap', () => {

            expect(Bitmap.isSecondaryBitmap("F4570004A41100F8")).to.be.true;

        });

    });

    describe('getFullBitmap', () => {

        it('should return the full bitmap in binary', () => {

            assert.equal(Bitmap.getFullBitmap("F23C46D129E09220000000000000002116"), '11110010001111000100011011010001001010011110000010010010001000000000000000000000000000000000000000000000000000000000000000100001');

        });

        it('should return the full bitmap in binary even if the mti is present in the message', () => {

            assert.equal(Bitmap.getFullBitmap("0200F23C46D129E09220000000000000002116", true), '11110010001111000100011011010001001010011110000010010010001000000000000000000000000000000000000000000000000000000000000000100001');

        });

        it('should return a bitmap of length 64 for a primary bitmap', () => {

            assert.equal(Bitmap.getFullBitmap("2020000000800000").length, 64);

        });

        it('should return the first bit as 0 for a primary bitmap', () => {

            assert.equal(Bitmap.getFullBitmap("35001180C0100000")[0], 0);

        });

        it('should return a bitmap of length 128 for a secondary bitmap', () => {

            assert.equal(Bitmap.getFullBitmap("F23C46D129E09200000000000000002116").length, 128);

        });

        it('should return the first bit as 1 for a secondary bitmap', () => {

            assert.equal(Bitmap.getFullBitmap("F23C46D129E09200000000000000002116")[0], 1);

        });

    });

    describe('isDataElementPresent', () => {

        it('should return true if the data element is present', () => {

            expect(Bitmap.isDataElementPresent("11110010001111000100011011010001001010011110000010010010001000000000000000000000000000000000000000000000000000000000000000100001", 35)).to.be.true;

        });

        it('should return false if the data element is not present', () => {

            expect(Bitmap.isDataElementPresent("F4570004A41100F8", 1)).to.be.false;

        });

        it('should return true if the data element is present ', () => {

            assert.equal(Bitmap.getFullBitmap("35001180C0100000").length, 64);

        });

        it('should return true if the data element is present and the bitmap is passed in hexadecimal form', () => {

            expect(Bitmap.isDataElementPresent("F23C46D129E09220000000000000002116", 7, true)).to.be.true;

        });

        it('should return false if the data element is not present and the bitmap is passed in hexadecimal form', () => {

            expect(Bitmap.isDataElementPresent("F23C46D129E09220000000000000002116", 8, true)).to.be.false;

        });

    });

});