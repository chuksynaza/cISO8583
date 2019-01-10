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

            assert.equal(HexBin.hex2Bin('FFA2'), '1111111110100010');

        });

        it('should return the binary value of a hexadecimal string', () => {

            assert.equal(HexBin.hex2Bin('2'), '0010');

        });

    });

    describe('bin2Hex', () => {

        it('should return the hexadecimal value of a binary string', () => {

            assert.equal(HexBin.bin2Hex('0010'), '2');

        });

        it('should return the hexadecimal value of a binary string of one character', () => {

            assert.equal(HexBin.bin2Hex('1'), '1');

        });

        it('should return the hexadecimal value of a binary long string', () => {

            assert.equal(HexBin.bin2Hex('1111111110100010'), 'FFA2');

        });

    });

    describe('binaryCharactersToHex', () => {

        it('should return the hexadecimal value of a binary string', () => {

            assert.equal(HexBin.binaryCharactersToHex('11110010001111000100011011010001001010011110000010010010001000000000000000000000000000000000000000000000000000000000000000100001'), 'F23C46D129E092200000000000000021');

        });

    });

});


