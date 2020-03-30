import { Line, TypeGameObject } from "../../models/line"
import { analyzeMountain } from "../../analyzers/mountain";
import { Mountain } from "../../models/mountain";

describe('Mountain Analyzer', () => {
    it(`should return an mountain's instance`, () => {
        const line: Line = new Line('M - 3 - 4', TypeGameObject.M);
        const mountain: Mountain = analyzeMountain(line);
        expect(mountain).toStrictEqual(new Mountain(3, 4));
    });

    it(`should trow an error - lack of information`, () => {
        const line: Line = new Line('M - 2', TypeGameObject.M);
        expect(() => analyzeMountain(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: M - 1 - 1)`)
    });

    it(`should trow an error - type of object`, () => {
        const line: Line = new Line('E - 3 - 4', TypeGameObject.M);
        expect(() => analyzeMountain(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: M - 1 - 1)`)
    });

    it(`should trow an error - no negative number`, () => {
        const line: Line = new Line('M - -3 - 4', TypeGameObject.M);
        expect(() => analyzeMountain(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: M - 1 - 1)`)
    });
});