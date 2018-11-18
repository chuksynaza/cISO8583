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

}

module.exports = HexBin;