const assert = require('chai').assert;

const unpack = require("../../../src/unpack");

let binaryBitmap = '11110010001111000100011011010001001010011110000010010010001000000000000000000000000000000000000000000000000000000000000000100001';
let dataElementPart = '16533446672367672300100000000002000008080917450917450917450808170553000510010004D0000000006522340345334466723676723D1705221001418237310000020159322120331L142092I9928808203MEKO STORES INTERNATIONAL            LTD56670197C326024961B2128RHG3GH39GHURHGUHLJJHJSH208HSHDUGHW8HGU9H3E7GH9FH37EFG79FG3Y4G9YG92EYFGY29GFY29GFY49GFY292Y4FG49GF72G4F729FG729G29FG247FG47FG247FG247FG247FG2947FG27GF9724GF429FUSLHAFKHFPQIPQGHUQUGUQHGIUGQG93G3GG3RF93RWUFFBU20566022Gucci bagsbelt~Leather0155101015113441017D0AE8EA0FC770A3627EEF1C19710438D180DE316A92DCA9CE2C5C2F006F7649';
let dataElement3Part = '00100000000002000008080917450917450917450808170553000510010004D0000000006522340345334466723676723D1705221001418237310000020159322120331L142092I9928808203MEKO STORES INTERNATIONAL            LTD56670197C326024961B2128RHG3GH39GHURHGUHLJJHJSH208HSHDUGHW8HGU9H3E7GH9FH37EFG79FG3Y4G9YG92EYFGY29GFY29GFY49GFY292Y4FG49GF72G4F729FG729G29FG247FG47FG247FG247FG247FG2947FG27GF9724GF429FUSLHAFKHFPQIPQGHUQUGUQHGIUGQG93G3GG3RF93RWUFFBU20566022Gucci bagsbelt~Leather0155101015113441017D0AE8EA0FC770A3627EEF1C19710438D180DE316A92DCA9CE2C5C2F006F7649';

//let primaryDataElementPart = '1612345678901234560609173030123456789ABC1000123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';

let primaryDataElementPart = '1612345678901234560609173030123109789ABC1000123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';

let primaryBitmap = '0100001000000000000001000000000000000000000000000000000000000010';

let PrimaryUnpack = new unpack(primaryBitmap, primaryDataElementPart);

//console.log(PrimaryUnpack.getDataElements());

let Unpack = new unpack(binaryBitmap, dataElementPart);

let optionalConfig = {
    "52": {
        "fixedLength": true,
        "contentLength": 16,
        "minLength": 0,
        "maxLength": 0,
        "contentType": "ans",
        "slug": null,
        "nestedElements": {}
    }
};

let UnpackWithConfig = new unpack(binaryBitmap, dataElementPart, optionalConfig);

let defaultConfig = require(__dirname + '/../../../src/dataelement-config.json');


describe('Unpack', () => {

    describe('constructor', () => {

        it('should set the configuration as an object without optional configuration', () => {

            assert.isObject(Unpack.config, 'Default configuration must be a JSON Object');

        });

        it('should set the configuration as an object with optional configuration', () => {

            assert.isObject(UnpackWithConfig.config, 'Optional configuration must be a JSON Object');

        });

        it('should use the default configuration if no optional configuration is supplied', () => {

            //Same reference
            assert.equal(Unpack.config, defaultConfig);

        });

        it('should use the new configuration if optional configuration is supplied', () => {

            let mergedConfig = { ...defaultConfig, ...optionalConfig };

            //Deep equal asserting two different objects are equal
            assert.deepEqual(UnpackWithConfig.config, mergedConfig);

        });

    });

    describe('getElement', () => {

        it('should return an object', () => {

            assert.isObject(Unpack.getElement(2, dataElementPart));

        });

        it('should return field length greater than the data length for variable length types', () => {

            assert.isAbove(Unpack.getElement(2, dataElementPart).fieldLength, Unpack.getElement(2, dataElementPart).dataLength);

        });

        it('should return field length same as the data length for fixed length types', () => {

            assert.equal(Unpack.getElement(3, dataElement3Part).fieldLength, Unpack.getElement(3, dataElement3Part).dataLength);

        });

        it('should return field length same as the length specified in the config for fixed length types', () => {

            assert.equal(Unpack.getElement(3, dataElement3Part).fieldLength, defaultConfig[3].contentLength);

        });

        it('should return slug same as the slug specified in the config', () => {

            assert.equal(Unpack.getElement(3, dataElement3Part).slug, defaultConfig[3].slug);

        });

        it('should return the actual data expected for variable length type', () => {

            assert.equal(Unpack.getElement(2, dataElementPart).fieldData, '5334466723676723');

        });

        it('should return the actual data expected for fixed length type', () => {

            assert.equal(Unpack.getElement(3, dataElement3Part).fieldData, '001000');

        });

        it('the substr from the start of the dataElement Part moving the length of (the field length - the data length) taken and parsed as an Integer should be the data length for variable length types', () => {

            let theVariableLengthElement = Unpack.getElement(2, dataElementPart);
            let theFieldLength = theVariableLengthElement.fieldLength;
            let theDataLength = theVariableLengthElement.dataLength;

            let theSubstr = dataElementPart.substr(0, (theFieldLength - theDataLength));
            let theSubstrInt = parseInt(theSubstr);

            assert.equal(Unpack.getElement(2, dataElementPart).fieldData.length, theSubstrInt);

        });

    });

    describe('getDataElements', () => {

        it('should return an object', () => {

            assert.isObject(UnpackWithConfig.getDataElements());

        });

        it('should set a data element to null if it is not present in the bitmap', () => {

            let returnedDataElements = UnpackWithConfig.getDataElements();

            for(let i = 1; i < binaryBitmap.length; i++){

                if(binaryBitmap[i] == "0"){

                    assert.isNull(returnedDataElements[i+1]);

                }

            }

        });

        it('should set a data element to not null if it is present in the bitmap', () => {

            let returnedDataElements = UnpackWithConfig.getDataElements();

            for (let i = 1; i < binaryBitmap.length; i++) {

                if (binaryBitmap[i] != "0") {

                    assert.isNotNull(returnedDataElements[i + 1]);

                }

            }

        });


        it('should reduce the next data element if an element is present', () => {

            assert.isObject(UnpackWithConfig.getDataElements());

        });

        it('should not reduce the next data element if an element is not present', () => {

            assert.isObject(UnpackWithConfig.getDataElements());

        });

        it('should get the value of field 4 to be 000000020000 with the data element above', () => {

            assert.equal(UnpackWithConfig.getDataElements()[4], '000000020000');

        });

        it('should return an object of length (128 - 1) if it is a secondary bitmap', () => {

            assert.equal(Object.keys(UnpackWithConfig.getDataElements()).length, (128 - 1));

        });

        it('should return an object length (64 - 1) if it is a primary bitmap', () => {

            assert.isObject(PrimaryUnpack.getDataElements(), (64 - 1));

        });

        it('should return the same data elements as below with primary bitmap and default configuration', () => {

            let theExpectedDataElements = {
                '2': '1234567890123456',
                '3': null,
                '4': null,
                '5': null,
                '6': null,
                '7': '0609173030',
                '8': null,
                '9': null,
                '10': null,
                '11': null,
                '12': null,
                '13': null,
                '14': null,
                '15': null,
                '16': null,
                '17': null,
                '18': null,
                '19': null,
                '20': null,
                '21': null,
                '22': '123',
                '23': null,
                '24': null,
                '25': null,
                '26': null,
                '27': null,
                '28': null,
                '29': null,
                '30': null,
                '31': null,
                '32': null,
                '33': null,
                '34': null,
                '35': null,
                '36': null,
                '37': null,
                '38': null,
                '39': null,
                '40': null,
                '41': null,
                '42': null,
                '43': null,
                '44': null,
                '45': null,
                '46': null,
                '47': null,
                '48': null,
                '49': null,
                '50': null,
                '51': null,
                '52': null,
                '53': null,
                '54': null,
                '55': null,
                '56': null,
                '57': null,
                '58': null,
                '59': null,
                '60': null,
                '61': null,
                '62': null,
                '63': '789ABC1000123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789',
                '64': null
            };

            assert.deepEqual(PrimaryUnpack.getDataElements(), theExpectedDataElements);

        });

        it('should return the same data elements as below with secondary bitmap and optional config', () => {

            let theExpectedDataElements = {
                '2': '5334466723676723',
                '3': '001000',
                '4': '000000020000',
                '5': null,
                '6': null,
                '7': '0808091745',
                '8': null,
                '9': null,
                '10': null,
                '11': '091745',
                '12': '091745',
                '13': '0808',
                '14': '1705',
                '15': null,
                '16': null,
                '17': null,
                '18': '5300',
                '19': null,
                '20': null,
                '21': null,
                '22': '051',
                '23': '001',
                '24': null,
                '25': '00',
                '26': '04',
                '27': null,
                '28': 'D00000000',
                '29': null,
                '30': null,
                '31': null,
                '32': '522340',
                '33': null,
                '34': null,
                '35': '5334466723676723D17052210014182373',
                '36': null,
                '37': '100000201593',
                '38': null,
                '39': null,
                '40': '221',
                '41': '20331L14',
                '42': '2092I9928808203',
                '43': 'MEKO STORES INTERNATIONAL            LTD',
                '44': null,
                '45': null,
                '46': null,
                '47': null,
                '48': null,
                '49': '566',
                '50': null,
                '51': null,
                '52': '70197C326024961B',
                '53': null,
                '54': null,
                '55': '8RHG3GH39GHURHGUHLJJHJSH208HSHDUGHW8HGU9H3E7GH9FH37EFG79FG3Y4G9YG92EYFGY29GFY29GFY49GFY292Y4FG49GF72G4F729FG729G29FG247FG47FG247FG247FG247FG2947FG27GF9724GF429FUSLHAFKHFPQIPQGHUQUGUQHGIUGQG93G3GG3RF93RWUFFBU20566',
                '56': null,
                '57': null,
                '58': null,
                '59': 'Gucci bagsbelt~Leather',
                '60': null,
                '61': null,
                '62': null,
                '63': null,
                '64': null,
                '65': null,
                '66': null,
                '67': null,
                '68': null,
                '69': null,
                '70': null,
                '71': null,
                '72': null,
                '73': null,
                '74': null,
                '75': null,
                '76': null,
                '77': null,
                '78': null,
                '79': null,
                '80': null,
                '81': null,
                '82': null,
                '83': null,
                '84': null,
                '85': null,
                '86': null,
                '87': null,
                '88': null,
                '89': null,
                '90': null,
                '91': null,
                '92': null,
                '93': null,
                '94': null,
                '95': null,
                '96': null,
                '97': null,
                '98': null,
                '99': null,
                '100': null,
                '101': null,
                '102': null,
                '103': null,
                '104': null,
                '105': null,
                '106': null,
                '107': null,
                '108': null,
                '109': null,
                '110': null,
                '111': null,
                '112': null,
                '113': null,
                '114': null,
                '115': null,
                '116': null,
                '117': null,
                '118': null,
                '119': null,
                '120': null,
                '121': null,
                '122': null,
                '123': '510101511344101',
                '124': null,
                '125': null,
                '126': null,
                '127': null,
                '128': '7D0AE8EA0FC770A3627EEF1C19710438D180DE316A92DCA9CE2C5C2F006F7649'
            };

            assert.deepEqual(UnpackWithConfig.getDataElements(), theExpectedDataElements);

        });

    });

});