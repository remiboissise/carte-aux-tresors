import { Game } from '../models/game';
import { LoggerHelper } from '../helpers/logger.helper';
import _ from 'lodash';

export class LoggerService {

    private _game: Game;
    private _result: string;

    constructor(game: Game) {
        this._game = game;
        this._result = "";
    }

    write() {
        this._result = LoggerHelper.writeBoard(this._game.board) + '\n';
        _.forEach(this._game.mountains, mountain => {
            this._result += LoggerHelper.writeMountain(mountain) + '\n';
        });
        _.forEach(this._game.treasures, treasure => {
            this._result += LoggerHelper.writeTreasure(treasure) + '\n';
        });
        _.forEach(this._game.adventurers, adventurer => {
            this._result += LoggerHelper.writeAdventurer(adventurer) + '\n';
        });
    }

    get result(): string {
        return this._result;
    }
}