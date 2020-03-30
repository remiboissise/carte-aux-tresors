import { Line, TypeGameObject } from "../../models/line"
import { analyzeBoard } from "../../analyzers/board";
import { Board } from "../../models/board";

describe('Board Analyzer', () => {
    it(`should return an board's instance`, () => {
        const line: Line = new Line('C - 3 - 4', TypeGameObject.C);
        const board: Board = analyzeBoard(line);
        expect(board).toStrictEqual(new Board(3, 4));
    });

    it(`should trow an error - lack of information`, () => {
        const line: Line = new Line('C - 3', TypeGameObject.C);
        expect(() => analyzeBoard(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: C - 3 - 4)`)
    });

    it(`should trow an error - type of object`, () => {
        const line: Line = new Line('A - 3 - 4', TypeGameObject.C);
        expect(() => analyzeBoard(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: C - 3 - 4)`)
    });

    it(`should trow an error - no negative number`, () => {
        const line: Line = new Line('C - -3 - 4', TypeGameObject.C);
        expect(() => analyzeBoard(line)).toThrow(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: C - 3 - 4)`)
    });
});