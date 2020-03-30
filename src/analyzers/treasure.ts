import { Line } from "../models/line";
import { LineHelper } from '../helpers/line.helper';
import { Treasure } from "../models/treasure";

export const analyzeTreasure: (line: Line) => Treasure = (line: Line) => {
    const regex = /^T - (\d+) - (\d+) - (\d+)$/;
    const isValidLine = LineHelper.isValidLine(regex, line.line);
    // Cas : Manque d'information(s) pour la création d'un trésor
    if (!isValidLine) {
        throw new Error(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: T - 1 - 1 - 3)`);
    }
    const lineSplit = LineHelper.splitAndTrimString(line.line);
    const xAxis = LineHelper.stringToNumber(lineSplit[1]);
    const yAxis = LineHelper.stringToNumber(lineSplit[2]);
    const numberTreasures = LineHelper.stringToNumber(lineSplit[3]);
    return new Treasure(xAxis, yAxis, numberTreasures);
}