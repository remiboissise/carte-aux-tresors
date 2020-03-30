import _ from 'lodash';
import { Cell } from "./cell";

export class Board {

    private _board: Cell[][];

    constructor(xAxisLength: number, yAxisLength: number) {
        this._board = _.chunk(new Array<Cell>(xAxisLength * yAxisLength), yAxisLength);
        for (var i = 0; i < yAxisLength; i++) {
            for (var j = 0; j < xAxisLength; j++) {
                this._board[j][i] = new Cell(j, i);
            }
        }
    }

    get board(): Cell[][] {
        return this._board;
    }
}