import { Coordinates } from "../models/coordinates";
import { Cell } from "../models/cell";
import _ from 'lodash';

export class BoardHelper {

    /**
     * Permet de vérifier si le prochain coup de l'aventurier est dans les limites du plateau de jeu
     * @param board plateau
     * @param next prochain déplacement d'un aventurier
     */
    static nextMoveIsInsideBoard(board: Cell[][], next: Coordinates): boolean {

        if (_.isNil(board.length)) {
            throw new Error(`The game board does not have a good proportion`);
        }

        if(_.isNil(board[board.length - 1].length)) {
            throw new Error(`The game board does not have a good proportion`);
        }

        return (
            board.length > next.xAxis
            && board[board.length - 1].length > next.yAxis
            && next.xAxis >= 0
            && next.yAxis >= 0
        )
    }

    /**
     * Vérifie si la case est disponible pour un aventurier
     * Aucun aventurier est localisé sur la case.
     * Aucune montagne
     * @param board 
     * @param coordinates 
     */
    static isValidLocation(board: Cell[][], coordinates: Coordinates): boolean {
        const cell = board[coordinates.xAxis][coordinates.yAxis];
        if (_.isObject(cell) && !cell.isMountain && !_.has(cell, '_adventurer')) {
            return true;
        }
        return false;
    }

    /**
     * Vérifie s'il s'agit d'une case trésor
     * @param board 
     * @param coordinates 
     */
    static isTreasureLocation(board: Cell[][], coordinates: Coordinates): boolean {
        const cell = board[coordinates.xAxis][coordinates.yAxis];
        if (_.has(cell, '_treasure')) {
            return cell.treasure as number > 0;
        }
        return false;
    }
}