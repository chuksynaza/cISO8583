"use strict";

class HexBin {

    hexadecimalCharacterToBin(hexadecimalChar, padded = true){

        let binValue = parseInt(hexadecimalChar, 16).toString(2);

        if(padded){
            binValue = binValue.padStart(4, '0');
        }

        return binValue;

    }

    hex2Bin(theHex){

        let binResult = "";

        theHex.split("").forEach(hexadecimalChar => {
            binResult += this.hexadecimalCharacterToBin(hexadecimalChar, true);
        });

        return binResult;

    }

    bin2Hex(theBin){

        let hexValue = parseInt(theBin, 2).toString(16).toUpperCase();

        return hexValue;

    }

    binaryCharactersToHex(theBinaryCharacters){

        let theHexadecimal = '';

        for (let i = 0; i < theBinaryCharacters.length; i = i + 4){

            let theBinChars = theBinaryCharacters.substr(i, 4);
            let theHex = this.bin2Hex(theBinChars);

            theHexadecimal += theHex;

        }

        return theHexadecimal;

    }

}

module.exports = HexBin;