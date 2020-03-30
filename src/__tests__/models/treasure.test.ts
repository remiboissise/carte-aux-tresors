import { Treasure } from "../../models/treasure";

describe('Treasure Model', () => {
    it(`should return an treasure's instance`, () => {
        const treasure: Treasure = new Treasure(0, 0, 2);
        expect(treasure).toBeInstanceOf(Treasure);
    });

    it(`should return value of treasure's properties`, () => {
        const treasure: Treasure = new Treasure(0, 0, 2);
        expect(treasure.coordinates.xAxis).toStrictEqual(0);
        expect(treasure.coordinates.yAxis).toStrictEqual(0);
        expect(treasure.number).toStrictEqual(2);
    })


});