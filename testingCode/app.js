let earth = {
    isRound: true,
    numberFromSun: 3
}

// JASMINE TEST
describe("Earth", () => {
    it("is round", () => {
        expect(earth.isRound).toBe(true)
    });
    it("is the third planet from the sun", () => {
        expect(earth.numberFromSun).toBe(3)
    });
});