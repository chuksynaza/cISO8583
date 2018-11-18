"use strict";

const hexbin = require("./hexbin");

let HexBin = new hexbin();

class Bitmap {

    isSecondaryBitmap(firstBitmapBit){

        let firstBitmapBitBin = HexBin.hex2Bin(firstBitmapBit);

        if(firstBitmapBitBin[0] == "1"){
            return true;
        } else {
            return false;
        }

    }

}

module.exports = Bitmap;