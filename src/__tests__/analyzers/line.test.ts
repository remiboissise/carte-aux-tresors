import { Line, TypeGameObject } from "../../models/line"
import { Lines } from "../../analyzers/lines";
import { Mountain } from "../../models/mountain";
import { Adventurer, MovementAdventurer, Orientation } from "../../models/adventurer";
import { Treasure } from "../../models/treasure";
import { Board } from "../../models/board";

describe('Line Analyzer', () => {

    const arrayOfValidLines = [
        new Line('C - 3 - 4', TypeGameObject.C),
        new Line('M - 1 - 0', TypeGameObject.M),
        new Line('T - 1 - 1 - 1', TypeGameObject.T),
        new Line('A - Lara - 2 - 1 - S - AA', TypeGameObject.A)
    ];

    const arrayOfInvalidLines = [
        new Line('C - -3 - 4', TypeGameObject.C),
        new Line('M - 1 - 0', TypeGameObject.M),
        new Line('T - 1 - 1 - 1', TypeGameObject.T),
        new Line('A - Lara - 2 - 1 - S - AA', TypeGameObject.A)
    ];

    const arrayOfLackOfLines = [
        new Line('M - 1 - 0', TypeGameObject.M),
        new Line('T - 1 - 1 - 1', TypeGameObject.T),
        new Line('A - Lara - 2 - 1 - S - AA', TypeGameObject.A)
    ];

    const arrayOfValidLinesWithComment = [
        new Line('# - Ceci est un commentaire', TypeGameObject["#"]),
        new Line('C - 3 - 4', TypeGameObject.C),
        new Line('M - 1 - 0', TypeGameObject.M),
        new Line('T - 1 - 1 - 1', TypeGameObject.T),
        new Line('A - Lara - 2 - 1 - S - AA', TypeGameObject.A)
    ];

    const arrayOfValidLinesWithBoards = [
        new Line('C - 3 - 4', TypeGameObject.C),
        new Line('M - 1 - 0', TypeGameObject.M),
        new Line('T - 1 - 1 - 1', TypeGameObject.T),
        new Line('A - Lara - 2 - 1 - S - AA', TypeGameObject.A),
        new Line('C - 2 - 1', TypeGameObject.C),
    ];

    it(`should return an object with game's information`, () => {
        const lines: Array<Line> = arrayOfValidLines;
        const analyze = new Lines().analyze(lines);

        expect(analyze).toStrictEqual({
            Mountains: [new Mountain(1, 0)],
            Adventurers: [new Adventurer('Lara', 2, 1, Orientation.south, [MovementAdventurer.F, MovementAdventurer.F])],
            Treasures: [new Treasure(1, 1, 1)],
            Board: new Board(3, 4)
        })
    });

    it(`should return an object with game's information`, () => {
        const lines: Array<Line> = arrayOfValidLinesWithComment;
        const analyze = new Lines().analyze(lines);

        expect(analyze).toStrictEqual({
            Mountains: [new Mountain(1, 0)],
            Adventurers: [new Adventurer('Lara', 2, 1, Orientation.south, [MovementAdventurer.F, MovementAdventurer.F])],
            Treasures: [new Treasure(1, 1, 1)],
            Board: new Board(3, 4)
        })
    });

    it(`should return an object with game's information - multiple boards`, () => {
        const lines: Array<Line> = arrayOfValidLinesWithBoards;
        const analyze = new Lines().analyze(lines);

        expect(analyze).toStrictEqual({
            Mountains: [new Mountain(1, 0)],
            Adventurers: [new Adventurer('Lara', 2, 1, Orientation.south, [MovementAdventurer.F, MovementAdventurer.F])],
            Treasures: [new Treasure(1, 1, 1)],
            Board: new Board(3, 4)
        })
    });

    it(`should trow an error - lack of information`, () => {
        const lines: Array<Line> = arrayOfLackOfLines;
        expect(() => new Lines().analyze(lines)).toThrow(`Board is missing! Please insert a line to create a board (example : C - 3 - 4)`)
    });
});