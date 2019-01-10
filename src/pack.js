"use strict";

class Pack {

    constructor(dataElements, config = null) {

        this.dataElements = dataElements;

        let defaultConfig = require(__dirname + '/dataelement-config.json');

        if (config !== null) {

            this.config = { ...defaultConfig, ...config };

        } else {

            this.config = defaultConfig;

        }

        this.binaryBitmap = '';
        this.dataElementPart = '';
        this.secondaryBitmapBit = '0';
        this.MTI = '';

    }

    setMTI(mti){

        this.MTI = mti;

    }

    setElement(field, fieldData){

        let response = {};
        response.error = false;
        response.field = field;

        //Get the field data using the config
        let fieldConfig = this.config[field];
        let dataLength, variableLength, minimumDataLength;

        if (fieldConfig.fixedLength === true) {

            variableLength = '';
            dataLength = fieldConfig.contentLength;
            minimumDataLength = fieldConfig.contentLength;


        } else {

            //Get the number of length characters LL, LLL, etc
            let minimumLengthCharacters = fieldConfig.contentLength;
            minimumDataLength = fieldConfig.minLength;
            dataLength = fieldData.length;
            variableLength = dataLength.toString();
            response.minimumLengthCharacters = minimumLengthCharacters;
            response.dataLengthChars = dataLength;

            //Be sure the data length is the same as the number of L's

            if(variableLength.length < minimumLengthCharacters){

                //If it is less than the required number of L's then pad with zeros
                variableLength = variableLength.padStart(minimumLengthCharacters, '0');

            }

        }

        //check if the data length is up to the required fixed length or pad with zeros if numeric or space if not

        if (fieldData.length < minimumDataLength) {

            if (fieldConfig.contentType == "n") {

                //Numeric Data Type so pad start with zeros
                fieldData = fieldData.toString().padStart(minimumDataLength, '0');

            } else {

                //Non numeric data type
                fieldData = fieldData.toString().padEnd(minimumDataLength, ' ');

            }

        }

        response.actualData = fieldData;

        //Append the length to the field data
        fieldData = variableLength + fieldData;

        response.fieldData = fieldData;
        response.dataLength = dataLength;
        response.variableLength = variableLength;

        return response;

    }

    setDataElements(){

        this.binaryBitmap = '';
        this.dataElementPart = '';
        this.secondaryBitmapBit = '0';

        //Loop through the Data Elements
        for (let i = 1; i <= Object.keys(this.dataElements).length; i++) {

            let field = i + 1;
            let elementData;
            let dataElementPart = '';
            let binaryBitmapBit = '0';

            //Check if it is a secondary bitmap and set
            if(this.dataElements[field] !== undefined && field > 64){

                this.secondaryBitmapBit = '1';

            }

            if (this.dataElements[field] === null || this.dataElements[field] === undefined) {

                //Field is not present

            } else {

                //Field is present
                binaryBitmapBit = '1';

                elementData = this.dataElements[field];

                let theElement = this.setElement(field, elementData);

                dataElementPart = theElement.fieldData;

            }

            this.dataElementPart += dataElementPart;
            this.binaryBitmap += binaryBitmapBit;

        }

        //Prepend Secondary Bitmap Bit
        this.binaryBitmap = this.secondaryBitmapBit + this.binaryBitmap;

    }

}

module.exports = Pack;