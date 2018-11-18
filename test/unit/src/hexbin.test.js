const assert = require('assert');

const hexbin = require("../../../src/hexbin");

let HexBin = new hexbin();

describe('HexBin', () => {

    describe('hexadecimalCharacterToBin', () => {

        it('should return the binary value of one hexadecimal character', () => {

            assert.equal(HexBin.hexadecimalCharacterToBin('F', true), '1111');

        });

        it('should return the unpadded version if padding is set to false', () => {

            assert.equal(HexBin.hexadecimalCharacterToBin('2', false), '10');

        });

        it('should return the padded version on default', () => {

            assert.equal(HexBin.hexadecimalCharacterToBin('2'), '0010');

        });

    });

    describe('hex2Bin', () => {

        it('should return the binary value of a hexadecimal string', () => {

            assert.equal(HexBin.hex2Bin('FFA2', true), '1111111110100010');

        });

        it('should return the binary value of a hexadecimal string', () => {

            assert.equal(HexBin.hex2Bin('2', false), '0010');

        });

    });

});


