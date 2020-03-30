import { LineHelper } from "../../helpers/line.helper";
import { TypeGameObject } from "../../models/line";

describe('Line Helpers', () => {

    it(`should return true - line is a valid regex`, () => {
        const regex = /^A - (\w+) - (\d+) - (\d+) - ([NSEOW]) - ([AGDFLR]+)$/;
        const line = 'A - Roger - 2 - 2 - N - AA'
        expect(LineHelper.isValidLine(regex, line))
            .toStrictEqual(true);
    });

    it(`should return false - line is not a valid regex`, () => {
        const regex = /^A - (\w+) - (\d+) - (\d+) - ([NSEOW]) - ([AGDFLR]+)$/;
        const line = 'A - Roger - -2 - 2 - N - AA'
        expect(LineHelper.isValidLine(regex, line))
            .toStrictEqual(false);
    });

    it(`should return the type of game object`, () => {
        const lineComment = '# - Ceci est un commentaire';
        const lineAdventurer = 'A - Lara - 1 - 1 - S - AFRFRFLLF';
        const lineTreasure = 'T - 1 - 3 - 3';
        const lineMountain = 'M - 2 - 1';
        const lineBoard = 'C - 3 - 4';

        expect(LineHelper.getTypeOfGameObject(lineComment))
            .toStrictEqual(TypeGameObject["#"]);

        expect(LineHelper.getTypeOfGameObject(lineAdventurer))
            .toStrictEqual(TypeGameObject.A);

        expect(LineHelper.getTypeOfGameObject(lineTreasure))
            .toStrictEqual(TypeGameObject.T);

        expect(LineHelper.getTypeOfGameObject(lineMountain))
            .toStrictEqual(TypeGameObject.M);

        expect(LineHelper.getTypeOfGameObject(lineBoard))
            .toStrictEqual(TypeGameObject.C);
    });

    it(`should return an error - the type of game object not exist`, () => {
        const line = 'V - Lara - 1 - 1 - S - AFRFRFLLF'
        expect(() => LineHelper.getTypeOfGameObject(line)).toThrow();
    });

    it(`should return a split and trim line`, () => {
        const line = 'A - Lara - 1 - 1 - S - FFF'
        expect(LineHelper.splitAndTrimString(line)).toStrictEqual(
            ['A', 'Lara', '1', '1', 'S', 'FFF']
        );
    });

    it(`should return a number`, () => {
        const number = '10';
        const nan = 'z10';
        expect(LineHelper.stringToNumber(number)).toStrictEqual(10);
        expect(LineHelper.stringToNumber(nan)).toStrictEqual(-1);
    });
});