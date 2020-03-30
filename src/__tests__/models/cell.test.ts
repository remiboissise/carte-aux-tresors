import { Orientation, MovementAdventurer, Adventurer } from "../../models/adventurer";
import { Cell } from "../../models/cell";

describe('Cell Model', () => {
    it(`should return an cell's instance`, () => {
        const cell: Cell = new Cell(0, 0);
        expect(cell).toBeInstanceOf(Cell);
    });

    it(`should return value of cell's properties`, () => {
        const cell: Cell = new Cell(0, 0);
        expect(cell.x).toStrictEqual(0);
        expect(cell.y).toStrictEqual(0);
        expect(cell.isMountain).toStrictEqual(false);
        expect(cell.adventurer).toBeUndefined();
        expect(cell.treasure).toBeUndefined();
    })

    it(`should set values of adventurer's properties`, () => {
        const cell: Cell = new Cell(0, 0);
        cell.isMountain = true;
        cell.treasure = 2;
        cell.adventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.F])
        expect(cell.isMountain).toStrictEqual(true);
        expect(cell.treasure).toStrictEqual(2);
        expect(cell.adventurer).toBeInstanceOf(Adventurer);
    })

    it(`should return an error - cell can't be defined`, () => {
        expect(() => new Cell(-1, 0)).toThrow("Cell not exist");
    })
});