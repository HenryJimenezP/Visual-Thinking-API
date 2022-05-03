const Reader =  require("../../lib/utils/Reader")

describe ("Test para  Reader", () => {
    test("Prueba 1: Calcular todos los explorer en la mision", () => {
        const explorersTest = Reader.readJsonFile("test/data/visualpartnersTest.json");
        expect(explorersTest.length).toBe(3);
    })
})