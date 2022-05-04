const fs = require("fs");

class Reader{
    static readJsonFile (path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

const partners = Reader.readJsonFile("visualpartners.json");
const partnersTest = Reader.readJsonFile("test/data/visualpartnersTest.json")

module.exports = Reader