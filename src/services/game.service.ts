import { Adventurer } from "../models/adventurer";
import { Board } from "../models/board";
import { Treasure } from "../models/treasure";
import { Mountain } from "../models/mountain";
import { Game } from "../models/game";
import { AdventurerHelper } from "../helpers/adventurer.helper";
import { BoardHelper } from "../helpers/board.helper";
import _ from 'lodash';

export class GameService {

    private _game: Game;

    constructor(
        board: Board,
        adventurers: Array<Adventurer>,
        treasures: Array<Treasure>,
        mountains: Array<Mountain>
    ) {
        this._game = new Game(board, adventurers, mountains, treasures);
    }

    get game(): Game {
        return this._game;
    }

    start(): Game {
        while (AdventurerHelper.adventurersHasMovement(this.game.adventurers)) {
            _.forEach(this.game.adventurers, (adventurer) => {
                this.move(adventurer);
            });
        }
        return this.game;
    }

    /**
     * Déplacement d'un aventurier selon certaines conditions
     * @param adventurer 
     */
    private move(adventurer: Adventurer) {
        var nextMovement = adventurer.movements.shift();
        var orientation = adventurer.orientation;
        var board = this.game.board.board;
        // Cas : L'aventurier dispose encore d'un mouvement
        if (nextMovement) {
            const nextOrientation = AdventurerHelper.getNextOrientationOfAdventurer(nextMovement, orientation);

            // Cas : Changement d'orientation
            if (!_.isEqual(orientation, nextOrientation)) {
                adventurer.orientation = nextOrientation;
                return;
            }

            // Cas : On avance (on ne change pas d'orientation)
            const nextCoordinates = AdventurerHelper.getNextCoordinatesOfAdventurer(adventurer.coordinates, nextOrientation);
            const isValidCoordinates = BoardHelper.nextMoveIsInsideBoard(board, nextCoordinates);
            const isValidLocation = (isValidCoordinates) ? BoardHelper.isValidLocation(board, nextCoordinates) : false;
            if (isValidCoordinates && isValidLocation) {
                // On va avancer l'aventurier et modifier son orientation si nécessaire
                adventurer.orientation = nextOrientation;
                adventurer.coordinates = nextCoordinates;
                // Cas : On avance sur une case trésor
                if (BoardHelper.isTreasureLocation(board, adventurer.coordinates)) {
                    adventurer.treasure = adventurer.treasure + 1;
                    board[adventurer.coordinates.xAxis][adventurer.coordinates.yAxis].treasure = board[adventurer.coordinates.xAxis][adventurer.coordinates.yAxis].treasure as number - 1;
                }
            }
        }
    }
}