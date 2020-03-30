import { Orientation, MovementAdventurer, Adventurer } from "../../models/adventurer";
import { Coordinates } from "../../models/coordinates";

describe('Adventurer Model', () => {
    it(`should return an adventurer's instance`, () => {
        const adventurer: Adventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.F])
        expect(adventurer).toBeInstanceOf(Adventurer);
    });

    it(`should return value of adventurer's properties`, () => {
        const adventurer: Adventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.F])
        expect(adventurer.coordinates).toStrictEqual(new Coordinates(1, 1));
        expect(adventurer.movements).toStrictEqual([MovementAdventurer.F]);
        expect(adventurer.name).toStrictEqual('Lara');
        expect(adventurer.orientation).toStrictEqual(Orientation.south);
        expect(adventurer.treasure).toStrictEqual(0);
    })

    it(`should set values of adventurer's properties`, () => {
        const adventurer: Adventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.F])
        adventurer.coordinates = new Coordinates(2, 2);
        adventurer.orientation = Orientation.north;
        adventurer.treasure = 2;
        expect(adventurer.coordinates).toStrictEqual(new Coordinates(2, 2));
        expect(adventurer.orientation).toStrictEqual(Orientation.north);
        expect(adventurer.treasure).toStrictEqual(2);
    })
});