const assert = require('assert');

const hexbin = require("../../../src/hexbin");

describe('HexBin', () => {

    describe('hexadecimalCharacterToBin', () => {

        it('should return the binary value of one hexadecimal character', () => {

            let hbin = new hexbin();

            assert.equal(hbin.hexadecimalCharacterToBin('F', true), '1111');

        });

        it('should return the unpadded version if padding is set to false', () => {

            let hbin = new hexbin();

            assert.equal(hbin.hexadecimalCharacterToBin('2', false), '10');

        });

        it('should return the padded version on default', () => {

            let hbin = new hexbin();

            assert.equal(hbin.hexadecimalCharacterToBin('2'), '0010');

        });

    });

    describe('hex2Bin', () => {

        it('should return the binary value of a hexadecimal string', () => {

            let hbin = new hexbin();

            assert.equal(hbin.hex2Bin('FFA2', true), '1111111110100010');

        });

        it('should return the binary value of a hexadecimal string', () => {

            let hbin = new hexbin();

            assert.equal(hbin.hex2Bin('2', false), '0010');

        });

    });

});


