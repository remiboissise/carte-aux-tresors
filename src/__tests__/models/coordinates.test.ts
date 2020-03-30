import { Coordinates } from "../../models/coordinates";

describe('Coordinates Model', () => {
    it(`should return an coordinates' instance`, () => {
        const coordinates: Coordinates = new Coordinates(0, 0);
        expect(coordinates).toBeInstanceOf(Coordinates);
    });

    it(`should return value of coordinates' properties`, () => {
        const coordinates: Coordinates = new Coordinates(0, 0);
        expect(coordinates.xAxis).toStrictEqual(0);
        expect(coordinates.yAxis).toStrictEqual(0);
    })

    it(`should set values of adventurer's properties`, () => {
        const coordinates: Coordinates = new Coordinates(0, 0);
        coordinates.xAxis = 1;
        coordinates.yAxis = 2;
        expect(coordinates.xAxis).toStrictEqual(1);
        expect(coordinates.yAxis).toStrictEqual(2);
    })
});