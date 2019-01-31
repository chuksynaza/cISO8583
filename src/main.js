"use strict";

const hexbin = require("./hexbin");

let HexBin = new hexbin();

const bitmap = require("./bitmap");

const packModule = require("./pack");

const unpack = require("./unpack");

class Main {

    constructor(optionalConfig = null){

        this.optionalConfig = optionalConfig;

    }

    pack(mti, dataElements, options = null){

        //TODO: Add options such as null MTI and more

        let response = {};
        response.error = false;

        let Pack = new packModule(dataElements, this.optionalConfig);
        Pack.setDataElements();

        if(mti !== null){

            Pack.setMTI(mti);

        }

        let binaryBitmap = Pack.binaryBitmap;
        let dataElementPart = Pack.dataElementPart;
        let theMTI = Pack.MTI;
        let secondaryBitmapValue = Pack.secondaryBitmapBit;

        let secondaryBitmap = (secondaryBitmapValue == '1' ? true : false);

        let hexadecimalBitmap = HexBin.binaryCharactersToHex(binaryBitmap);

        let isoMessage = `${theMTI}${hexadecimalBitmap}${dataElementPart}`;

        response.binaryBitmap = binaryBitmap;
        response.hexadecimalBitmap = hexadecimalBitmap;
        response.secondaryBitmap = secondaryBitmap;
        response.dataElementPart = dataElementPart;
        response.mti = theMTI;
        response.isoMessage = isoMessage;

        return response;

    }

    unpack(message, options = null){

        //TODO: Add options such as null MTI and more

        let response = {};
        response.error = false;

        let MTILength = 4;

        let theMTI = message.substr(0, 4);

        let Bitmap = new bitmap(HexBin);

        let fullBitmap = Bitmap.getFullBitmap(message, true);

        let secondaryBitmap = ((fullBitmap.length > 64) ? true : false);

        let dataElementPart = message.substring((fullBitmap.length/4) + MTILength, message.length);

        let Unpack = new unpack(fullBitmap, dataElementPart, this.optionalConfig);
        Unpack.getDataElements();

        let dataElements = Unpack.dataElements;

        response.dataElementPart = dataElementPart;
        response.binaryBitmap = fullBitmap;
        response.secondaryBitmap = secondaryBitmap;
        response.dataElements = dataElements;
        response.mti = theMTI;

        return response;

    }

}

module.exports = Main;