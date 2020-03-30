import { Line, TypeGameObject } from "../../models/line"
import { analyzeTreasure } from "../../analyzers/treasure";
import { Treasure } from "../../models/treasure";

describe('Treasure Analyzer', () => {
    it(`should return an treasure's instance`, () => {
        const line: Line = new Line('T - 3 - 4 - 1', TypeGameObject.T);
        const treasure: Treasure = analyzeTreasure(line);
        expect(treasure).toStrictEqual(new Treasure(3, 4, 1));
    });

    it(`should trow an error - lack of information`, () => {
        const line: Line = new Line('T - 3 - 4 -', TypeGameObject.T);
        expect(() => analyzeTreasure(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: T - 1 - 1 - 3)`)
    });

    it(`should trow an error - type of object`, () => {
        const line: Line = new Line('E - 3 - 4', TypeGameObject.T);
        expect(() => analyzeTreasure(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: T - 1 - 1 - 3)`)
    });

    it(`should trow an error - no negative number`, () => {
        const line: Line = new Line('M - -3 - 4', TypeGameObject.T);
        expect(() => analyzeTreasure(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: T - 1 - 1 - 3)`)
    });
});