import { Line } from "../models/line";
import _ from 'lodash';
import { Mountain } from "../models/mountain";
import { Adventurer } from "../models/adventurer";
import { Board } from "../models/board";
import { Treasure } from "../models/treasure";
import { analyzeBoard } from "./board";
import { analyzeTreasure } from "./treasure";
import { analyzeAdventurer } from "./adventurer";
import { analyzeMountain } from "./mountain";

export class Lines {

    constructor() { }

    analyze: (lines: Array<Line>) =>
        {
            Mountains: Array<Mountain>,
            Adventurers: Array<Adventurer>,
            Treasures: Array<Treasure>,
            Board: Board
        } = (lines: Array<Line>) => {

            var board: any;
            var mountains = new Array<Mountain>();
            var adventurers = new Array<Adventurer>();
            var treasures = new Array<Treasure>();
            var isBoardExist: boolean = false;

            _.forEach(lines, (line) => {
                switch (line.type) {
                    case 'BOARD':
                        if (!isBoardExist) {
                            board = analyzeBoard(line);
                            isBoardExist = true;
                        }
                        break;
                    case 'MOUNTAIN':
                        mountains.push(analyzeMountain(line));
                        break;
                    case 'TREASURE':
                        treasures.push(analyzeTreasure(line));
                        break;
                    case 'ADVENTURER':
                        adventurers.push(analyzeAdventurer(line));
                        break;
                    case 'COMMENT':
                        break;
                }
            });

            if (board instanceof Board) {
                return {
                    Mountains: mountains,
                    Adventurers: adventurers,
                    Treasures: treasures,
                    Board: board
                }
            } else {
                throw new Error(`Board is missing! Please insert a line to create a board (example : C - 3 - 4)`);
            }
        }
}