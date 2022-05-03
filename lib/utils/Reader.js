const fs = require("fs");

class Reader{
    static readJsonFile (path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

const explorers = Reader.readJsonFile("visualpartners.json");

module.exports = Reader