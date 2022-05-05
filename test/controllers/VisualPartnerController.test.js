const Reader = require("../../lib/utils/Reader")
const VisualPartnerController = require("../../lib/controllers/VisualPartnerController")

describe("Tests para VisualPartnerController", () => {
    test("Prueba 1: Consultar todos los estudiantes dentro de Visual Partner-Ship", () => {
        const studentsTotal = VisualPartnerController.getPartnerVisual();
        expect(studentsTotal.length).toBe(51)
    });

    test("Prueba 2: Consultar los estudiantes con certificación", () => {
        const studentsCertification = VisualPartnerController.getPartnerCertification();
        expect(studentsCertification.length).toBe(29);
    });

    test("Prueba 3: Consultar todos los estudiantes que tengan credits mayor a 500", () => {
        const studentsCredits = VisualPartnerController.getPartnerCredits();
        expect(studentsCredits.length).toBe(27);
    });
})