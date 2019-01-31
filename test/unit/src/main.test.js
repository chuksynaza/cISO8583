const assert = require('chai').assert;
const expect = require('chai').expect;

const main = require("../../../src/main");

let Main = new main();

const optionalConfig = {
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


let MainWithConfig = new main(optionalConfig);

const dataElements = {
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

const isoMessage = '0200F23C46D129E09220000000000000002116533446672367672300100000000002000008080917450917450917450808170553000510010004D0000000006522340345334466723676723D1705221001418237310000020159322120331L142092I9928808203MEKO STORES INTERNATIONAL            LTD56670197C326024961B2128RHG3GH39GHURHGUHLJJHJSH208HSHDUGHW8HGU9H3E7GH9FH37EFG79FG3Y4G9YG92EYFGY29GFY29GFY49GFY292Y4FG49GF72G4F729FG729G29FG247FG47FG247FG247FG247FG2947FG27GF9724GF429FUSLHAFKHFPQIPQGHUQUGUQHGIUGQG93G3GG3RF93RWUFFBU20566022Gucci bagsbelt~Leather0155101015113441017D0AE8EA0FC770A3627EEF1C19710438D180DE316A92DCA9CE2C5C2F006F7649';

const dataElements2 = {
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

const isoMessage2 = '020042000400000000021612345678901234560609173030123109789ABC1000123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';

describe('Main', () => {

    describe('constructor', () => {

        it('should set the optional configuration correctly if it is provided', () => {

            assert.deepEqual(MainWithConfig.optionalConfig, optionalConfig);

        });

    });

    describe('unpack', () => {

        it('should return the correct response', () => {

            const expectedResponse =
            {
                error: false,
                dataElementPart: '16533446672367672300100000000002000008080917450917450917450808170553000510010004D0000000006522340345334466723676723D1705221001418237310000020159322120331L142092I9928808203MEKO STORES INTERNATIONAL            LTD56670197C326024961B2128RHG3GH39GHURHGUHLJJHJSH208HSHDUGHW8HGU9H3E7GH9FH37EFG79FG3Y4G9YG92EYFGY29GFY29GFY49GFY292Y4FG49GF72G4F729FG729G29FG247FG47FG247FG247FG247FG2947FG27GF9724GF429FUSLHAFKHFPQIPQGHUQUGUQHGIUGQG93G3GG3RF93RWUFFBU20566022Gucci bagsbelt~Leather0155101015113441017D0AE8EA0FC770A3627EEF1C19710438D180DE316A92DCA9CE2C5C2F006F7649',
                binaryBitmap: '11110010001111000100011011010001001010011110000010010010001000000000000000000000000000000000000000000000000000000000000000100001',
                secondaryBitmap: true,
                dataElements:
                {
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
                },
                mti: '0200'
            };

            assert.deepEqual(MainWithConfig.unpack(isoMessage), expectedResponse);

        });

        it('should return the correct response for primary bitmap types and without optional config', () => {

            const expectedResponse = {
                error: false,
                dataElementPart: '1612345678901234560609173030123109789ABC1000123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789',
                binaryBitmap: '0100001000000000000001000000000000000000000000000000000000000010',
                secondaryBitmap: false,
                dataElements:
                {
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
                },
                mti: '0200'
            };

            assert.deepEqual(Main.unpack(isoMessage2), expectedResponse);

        });

        it('should return the secondary bitmap as true for secondary bitmap types', () => {

            expect(MainWithConfig.unpack(isoMessage).secondaryBitmap).to.be.true;

        });

        it('should return the secondary bitmap as false for primary bitmap types', () => {

            expect(Main.unpack(isoMessage2).secondaryBitmap).to.be.false;

        });

    });

    describe('pack', () => {

        it('should return the correct response', () => {

            const expectedResponse = {
                error: false,
                binaryBitmap: '11110010001111000100011011010001001010011110000010010010001000000000000000000000000000000000000000000000000000000000000000100001',
                hexadecimalBitmap: 'F23C46D129E092200000000000000021',
                secondaryBitmap: true,
                dataElementPart: '16533446672367672300100000000002000008080917450917450917450808170553000510010004D0000000006522340345334466723676723D1705221001418237310000020159322120331L142092I9928808203MEKO STORES INTERNATIONAL            LTD56670197C326024961B2128RHG3GH39GHURHGUHLJJHJSH208HSHDUGHW8HGU9H3E7GH9FH37EFG79FG3Y4G9YG92EYFGY29GFY29GFY49GFY292Y4FG49GF72G4F729FG729G29FG247FG47FG247FG247FG247FG2947FG27GF9724GF429FUSLHAFKHFPQIPQGHUQUGUQHGIUGQG93G3GG3RF93RWUFFBU20566022Gucci bagsbelt~Leather0155101015113441017D0AE8EA0FC770A3627EEF1C19710438D180DE316A92DCA9CE2C5C2F006F7649',
                mti: '0200',
                isoMessage: '0200F23C46D129E09220000000000000002116533446672367672300100000000002000008080917450917450917450808170553000510010004D0000000006522340345334466723676723D1705221001418237310000020159322120331L142092I9928808203MEKO STORES INTERNATIONAL            LTD56670197C326024961B2128RHG3GH39GHURHGUHLJJHJSH208HSHDUGHW8HGU9H3E7GH9FH37EFG79FG3Y4G9YG92EYFGY29GFY29GFY49GFY292Y4FG49GF72G4F729FG729G29FG247FG47FG247FG247FG247FG2947FG27GF9724GF429FUSLHAFKHFPQIPQGHUQUGUQHGIUGQG93G3GG3RF93RWUFFBU20566022Gucci bagsbelt~Leather0155101015113441017D0AE8EA0FC770A3627EEF1C19710438D180DE316A92DCA9CE2C5C2F006F7649'
            };

            assert.deepEqual(MainWithConfig.pack('0200', dataElements), expectedResponse);

        });

        it('should return the correct response when the MTI is not specified', () => {

            const expectedResponse = {
                error: false,
                binaryBitmap: '11110010001111000100011011010001001010011110000010010010001000000000000000000000000000000000000000000000000000000000000000100001',
                hexadecimalBitmap: 'F23C46D129E092200000000000000021',
                secondaryBitmap: true,
                dataElementPart: '16533446672367672300100000000002000008080917450917450917450808170553000510010004D0000000006522340345334466723676723D1705221001418237310000020159322120331L142092I9928808203MEKO STORES INTERNATIONAL            LTD56670197C326024961B2128RHG3GH39GHURHGUHLJJHJSH208HSHDUGHW8HGU9H3E7GH9FH37EFG79FG3Y4G9YG92EYFGY29GFY29GFY49GFY292Y4FG49GF72G4F729FG729G29FG247FG47FG247FG247FG247FG2947FG27GF9724GF429FUSLHAFKHFPQIPQGHUQUGUQHGIUGQG93G3GG3RF93RWUFFBU20566022Gucci bagsbelt~Leather0155101015113441017D0AE8EA0FC770A3627EEF1C19710438D180DE316A92DCA9CE2C5C2F006F7649',
                mti: '',
                isoMessage: 'F23C46D129E09220000000000000002116533446672367672300100000000002000008080917450917450917450808170553000510010004D0000000006522340345334466723676723D1705221001418237310000020159322120331L142092I9928808203MEKO STORES INTERNATIONAL            LTD56670197C326024961B2128RHG3GH39GHURHGUHLJJHJSH208HSHDUGHW8HGU9H3E7GH9FH37EFG79FG3Y4G9YG92EYFGY29GFY29GFY49GFY292Y4FG49GF72G4F729FG729G29FG247FG47FG247FG247FG247FG2947FG27GF9724GF429FUSLHAFKHFPQIPQGHUQUGUQHGIUGQG93G3GG3RF93RWUFFBU20566022Gucci bagsbelt~Leather0155101015113441017D0AE8EA0FC770A3627EEF1C19710438D180DE316A92DCA9CE2C5C2F006F7649'
            };

            assert.deepEqual(MainWithConfig.pack(null, dataElements), expectedResponse);

        });

        it('should return the correct response for primary bitmap types and without optional config', () => {

            const expectedResponse = {
                error: false,
                binaryBitmap: '0100001000000000000001000000000000000000000000000000000000000010',
                hexadecimalBitmap: '4200040000000002',
                secondaryBitmap: false,
                dataElementPart: '1612345678901234560609173030123109789ABC1000123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789',
                mti: '',
                isoMessage: '42000400000000021612345678901234560609173030123109789ABC1000123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'
            };

            assert.deepEqual(Main.pack(null, dataElements2), expectedResponse);

        });

        it('should return the secondary bitmap as true for secondary bitmap types', () => {

            expect(MainWithConfig.pack(null, dataElements).secondaryBitmap).to.be.true;

        });

        it('should return the secondary bitmap as false for primary bitmap types', () => {

            expect(Main.pack(null, dataElements2).secondaryBitmap).to.be.false;

        });

    });

});
