"use strict";

class Unpack {

    constructor(binaryBitmap, dataElementPart, config = null){

        this.binaryBitmap = binaryBitmap;
        this.dataElementPart = dataElementPart;

        let defaultConfig = require(__dirname + '/dataelement-config.json');

        if(config !== null){

            this.config = { ...defaultConfig, ...config };

        } else {

            this.config = defaultConfig;

        }

        this.dataElements = {};

    }

    getElement(field, currentDataElementPart){

        let response = {};
        response.error = false;

        //Get the field data using the config
        let fieldConfig = this.config[field];
        let dataLength, variableLength, fieldLength, nextDataElementPart, fieldData;

        if(fieldConfig.fixedLength === true){

            variableLength = 0;
            dataLength = fieldConfig.contentLength;

        } else {

            //Get the number of length characters LL, LLL, etc
            variableLength = fieldConfig.contentLength;
            dataLength = parseInt(currentDataElementPart.substring(0, variableLength));

        }

        fieldLength = dataLength + variableLength;
        fieldData = currentDataElementPart.substring(variableLength, fieldLength);
        nextDataElementPart = currentDataElementPart.substring(fieldLength);

        response.nextDataElementPart = nextDataElementPart;
        response.fieldNumber = field;
        response.fieldData = fieldData;
        response.fieldLength = fieldLength;
        response.dataLength = dataLength;
        response.slug = fieldConfig.slug;

        //TODO: Validate the field; length and value
        response.valid = true;

        return response;

    }

    getDataElements(){

        let currentDataElementPart = this.dataElementPart;

        //Loop through the Bitmap
        for(let i =  1; i < this.binaryBitmap.length; i++){

            let field = i + 1;
            let elementData;

            if(this.binaryBitmap[i] == "0"){

                //Field is not present
                this.dataElements[field] = null;

            } else {

                //Field is present
                elementData = this.getElement(field, currentDataElementPart);

                this.dataElements[field] = elementData.fieldData;

                //Set the current data element part after taking out the data of the previous field
                currentDataElementPart = elementData.nextDataElementPart;

            }

        }

        return this.dataElements;

    }

}

module.exports = Unpack;