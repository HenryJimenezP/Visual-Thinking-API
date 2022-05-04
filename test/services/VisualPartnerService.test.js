const Reader = require("../../lib/utils/Reader")
const VisualPartnerService = require("./../../lib/services/VisualPartnerService")

describe("Tests para VisualPartnerService", () => {
    test("Prueba 1: Consultar todos los estudiantes dentro de Visual Partner-Ship", () => {
        const partners = Reader.readJsonFile("test/data/visualpartnersTest.json")
        const studentsTotal = VisualPartnerService.getStudensByVisual(partners);
        expect(studentsTotal.length).toBe(3)
    });
})