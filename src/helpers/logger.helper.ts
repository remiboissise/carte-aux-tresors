import { Board } from "../models/board";
import { Mountain } from "../models/mountain";
import { Treasure } from "../models/treasure";
import { Adventurer } from "../models/adventurer";
import _ from 'lodash';

export class LoggerHelper {

    static writeBoard(board: Board): string {
        return `C - ${board.board.length} - ${board.board[board.board.length - 1].length}`
    }

    static writeMountain(mountain: Mountain): string {
        return `M - ${mountain.coordinates.xAxis} - ${mountain.coordinates.yAxis}`
    }

    static writeTreasure(treasure: Treasure): string {
        return `T - ${treasure.coordinates.xAxis} - ${treasure.coordinates.yAxis} - ${treasure.number}`
    }

    static writeAdventurer(adventurer: Adventurer): string {
        return `A - ${adventurer.name} - ${adventurer.coordinates.xAxis} - ${adventurer.coordinates.yAxis} - ${adventurer.orientation.value} - ${adventurer.treasure}`
    }
}