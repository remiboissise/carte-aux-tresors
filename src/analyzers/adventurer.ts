import { Line } from "../models/line";
import { LineHelper } from '../helpers/line.helper';
import { Adventurer } from "../models/adventurer";
import { AdventurerHelper } from "../helpers/adventurer.helper";

export const analyzeAdventurer: (line: Line) => Adventurer = (line: Line) => {
    const regex = /^A - (\w+) - (\d+) - (\d+) - ([NSEOW]) - ([AGDFLR]+)$/;
    const isValidLine = LineHelper.isValidLine(regex, line.line);
    // Cas : Manque d'information(s) pour la création de l'aventurier
    if (!isValidLine) {
        throw new Error(`Impossible to create the ${line.type}! Check the line ${line.line} to create an ${line.type} (example: A - Lara - 1 - 1 - S - FFLR)`);
    }
    const lineSplit = LineHelper.splitAndTrimString(line.line);
    const name = lineSplit[1];
    const xAxis = LineHelper.stringToNumber(lineSplit[2]);
    const yAxis = LineHelper.stringToNumber(lineSplit[3]);
    const orientation = AdventurerHelper.retrieveOrientationOfAdventurer(lineSplit[4]);
    const movements = AdventurerHelper.retrieveMovementsOfAdventurer(name, lineSplit[5]);
    return new Adventurer(name, xAxis, yAxis, orientation, movements);
}