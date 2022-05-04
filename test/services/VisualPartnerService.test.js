const Reader = require("../../lib/utils/Reader")
const VisualPartnerService = require("./../../lib/services/VisualPartnerService")

describe("Tests para VisualPartnerService", () => {
    test("Prueba 1: Consultar todos los estudiantes dentro de Visual Partner-Ship", () => {
        const partners = Reader.readJsonFile("test/data/visualpartnersTest.json")
        const studentsTotal = VisualPartnerService.getStudensByVisual(partners);
        expect(studentsTotal.length).toBe(3)
    });

    test("Prueba 2: Consultar los estudiantes con certificación", () => {
        const partners = Reader.readJsonFile("test/data/visualpartnersTest.json")
        const partnersByCertification = VisualPartnerService.getFilterByCertification(partners);
        expect(partnersByCertification.length).toBe(3);
    });

    test("Prueba 3: Consultar todos los estudiantes que tengan credits mayor a 500", () => {
        const partners = Reader.readJsonFile("test/data/visualpartnersTest.json")
        const partnerCredits = VisualPartnerService.getfilterByCredits(partners);
        expect(partnerCredits.length).toBe(2);
    });
})