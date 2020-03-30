import { Line } from "../models/line";
import { LineHelper } from '../helpers/line.helper';
import { Board } from "../models/board";

export const analyzeBoard: (line: Line) => Board = (line: Line) => {
    const regex = /^C - (\d+) - (\d+)$/;
    const isValidLine = LineHelper.isValidLine(regex, line.line);
    // Cas : Manque d'information(s) pour la création du plateau de jeu
    if (!isValidLine) {
        throw new Error(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: C - 3 - 4)`);
    }
    const lineSplit = LineHelper.splitAndTrimString(line.line);
    const xAxis = LineHelper.stringToNumber(lineSplit[1]);
    const yAxis = LineHelper.stringToNumber(lineSplit[2]);
    return new Board(xAxis, yAxis);
}