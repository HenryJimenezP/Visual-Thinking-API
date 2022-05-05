const Reader = require("../../lib/utils/Reader")
const VisualPartnerService = require("../../lib/services/VisualPartnerService")

class VisualPartnerController{
    static getPartnerVisual(){
        const partners = Reader.readJsonFile("visualpartners.json");
        return VisualPartnerService.getStudensByVisual(partners);
    }

    static getPartnerCertification(){
        const partners = Reader.readJsonFile("visualpartners.json");
        return VisualPartnerService.getFilterByCertification(partners);
    }

    static getPartnerCredits(){
        const partners = Reader.readJsonFile("visualpartners.json");
        return VisualPartnerService.getfilterByCredits(partners);
    }
}

module.exports = VisualPartnerController