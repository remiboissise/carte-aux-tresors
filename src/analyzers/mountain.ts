import { Line } from "../models/line";
import { LineHelper } from '../helpers/line.helper';
import { Mountain } from "../models/mountain";

export const analyzeMountain: (line: Line) => Mountain = (line: Line) => {
    const regex = /^M - (\d+) - (\d+)$/;
    const isValidLine = LineHelper.isValidLine(regex, line.line);
    // Cas : Manque d'information(s) pour la création de la montagne
    if (!isValidLine) {
        throw new Error(`Impossible to create the ${line.type}! Check the line ${line.line} to create a ${line.type} (example: M - 1 - 1)`);
    }
    const lineSplit = LineHelper.splitAndTrimString(line.line);
    const xAxis = LineHelper.stringToNumber(lineSplit[1]);
    const yAxis = LineHelper.stringToNumber(lineSplit[2]);
    return new Mountain(xAxis, yAxis);
}