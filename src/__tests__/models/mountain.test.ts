import { Mountain } from "../../models/mountain";

describe('Mountain Model', () => {
    it(`should return an mountain's instance`, () => {
        const mountain: Mountain = new Mountain(0, 0);
        expect(mountain).toBeInstanceOf(Mountain);
    });

    it(`should return value of mountain's properties`, () => {
        const mountain: Mountain = new Mountain(0, 1);
        expect(mountain.coordinates.xAxis).toStrictEqual(0);
        expect(mountain.coordinates.yAxis).toStrictEqual(1);
    })
});