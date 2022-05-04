const Reader = require("./../utils/Reader")

class VisualPartnerService{
    static getStudensByVisual(partner){
        return partner
    }

    static getFilterByCertification(partner){
        const partnerCertification = partner.filter((partner) => partner.haveCertification == true);
        const partnerEmails = partnerCertification.map((partner) => partner.email);
        return partnerEmails
    }

    static getfilterByCredits(partners){
        const partnerCredits = partners.filter((partner) => partner.credits > 500);
        return partnerCredits
    }
}

module.exports = VisualPartnerService