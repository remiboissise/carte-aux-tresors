import { Board } from "./board";
import { Adventurer } from "./adventurer";
import { Mountain } from "./mountain";
import { Treasure } from "./treasure";
import _ from 'lodash';

export class Game {

    private _board: Board;
    private _adventurers: Array<Adventurer>;
    private _mountains: Array<Mountain>;
    private _treasures: Array<Treasure>;

    constructor(
        board: Board,
        adventurers: Array<Adventurer>,
        mountains: Array<Mountain>,
        treasures: Array<Treasure>
    ) {
        this._board = board;
        this._adventurers = adventurers;
        this._mountains = mountains;
        this._treasures = treasures;
        // Initialisation des montagnes et des trésors et des aventuriers
        this.initializeMountains(mountains);
        this.initializeTreasures(treasures);
        this.initializeAdventurers(adventurers);
    }

    private initializeMountains(mountains: Array<Mountain>) {
        _.forEach(mountains, (mountain) => {
            this.board.board[mountain.coordinates.xAxis][mountain.coordinates.yAxis].isMountain = true
        });
    }

    private initializeTreasures(treasures: Array<Treasure>) {
        _.forEach(treasures, (treasure) => {
            if (!this.board.board[treasure.coordinates.xAxis][treasure.coordinates.yAxis].isMountain) {
                this.board.board[treasure.coordinates.xAxis][treasure.coordinates.yAxis].treasure = treasure.number 
            }
        });
    }

    private initializeAdventurers(adventurers: Array<Adventurer>) {
        _.forEach(adventurers, (adventurer) => {
            (!this.board.board[adventurer.coordinates.xAxis][adventurer.coordinates.yAxis].isMountain
                && _.isEmpty(this.board.board[adventurer.coordinates.xAxis][adventurer.coordinates.yAxis].treasure))
                ? this.board.board[adventurer.coordinates.xAxis][adventurer.coordinates.yAxis].adventurer = adventurer
                : new Error(`Impossible d'ajouter l'aventurier ${adventurer.name} au jeu.`);
        })
    }

    get board(): Board {
        return this._board;
    }

    get adventurers(): Array<Adventurer> {
        return this._adventurers;
    }

    get mountains(): Array<Mountain> {
        return this._mountains;
    }

    get treasures(): Array<Treasure> {
        var treasures: Treasure[] = new Array<Treasure>();
        _.forEach(this._treasures, (treasure) => {
            if (this.board.board[treasure.coordinates.xAxis][treasure.coordinates.yAxis].treasure as number > 0) {
                treasures.push(new Treasure(treasure.coordinates.xAxis, treasure.coordinates.yAxis, this.board.board[treasure.coordinates.xAxis][treasure.coordinates.yAxis].treasure as number));
            }
        })
        return treasures;
    }
}