import { Line, TypeGameObject } from "../../models/line"
import { Adventurer, Orientation, MovementAdventurer } from "../../models/adventurer";
import { analyzeAdventurer } from "../../analyzers/adventurer";

describe('Adventurer Analyzer', () => {
    it(`should return an adventurer's instance`, () => {
        const line: Line = new Line('A - Lara - 1 - 1 - S - A', TypeGameObject.A);
        const adventurer: Adventurer = analyzeAdventurer(line);
        expect(adventurer).toStrictEqual(new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.F]));
    });

    it(`should trow an error - lack of information`, () => {
        const line: Line = new Line('A - Lara - 1 - 1 - AA', TypeGameObject.A);
        expect(() => analyzeAdventurer(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create an ${line.type} (example: A - Lara - 1 - 1 - S - FFLR)`)
    });

    it(`should trow an error - type of object`, () => {
        const line: Line = new Line('C - Lara - 1 - 2 - S - AA', TypeGameObject.A);
        expect(() => analyzeAdventurer(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create an ${line.type} (example: A - Lara - 1 - 1 - S - FFLR)`)
    });

    it(`should trow an error - no negative number`, () => {
        const line: Line = new Line('A - Lara - 1 - -2 - S - AA', TypeGameObject.A);
        expect(() => analyzeAdventurer(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create an ${line.type} (example: A - Lara - 1 - 1 - S - FFLR)`)
    });
});