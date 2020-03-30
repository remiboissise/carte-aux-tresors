import { BoardHelper } from "../../helpers/board.helper";
import { Board } from "../../models/board";
import { Coordinates } from "../../models/coordinates";
import { Adventurer, Orientation, MovementAdventurer } from "../../models/adventurer";

describe('Board Helpers', () => {

    it(`should return true - is a treasure location`, () => {
        const board = new Board(3, 4);
        board.board[1][1].treasure = 2;
        expect(BoardHelper.isTreasureLocation(board.board, new Coordinates(1, 1)))
            .toStrictEqual(true);
    });

    it(`should return false - is not a treasure location`, () => {
        const board = new Board(3, 4);
        board.board[1][1].treasure = 0;
        expect(BoardHelper.isTreasureLocation(board.board, new Coordinates(1, 1)))
            .toStrictEqual(false);
        expect(BoardHelper.isTreasureLocation(board.board, new Coordinates(2, 1)))
            .toStrictEqual(false);
    });

    it(`should return true - is a valid location`, () => {
        const board = new Board(3, 4);
        board.board[1][1].isMountain = true;
        board.board[2][2].adventurer = new Adventurer('Lara', 2, 2, Orientation.south, [MovementAdventurer.F]);
        expect(BoardHelper.isValidLocation(board.board, new Coordinates(1, 2)))
            .toStrictEqual(true);
        expect(BoardHelper.isValidLocation(board.board, new Coordinates(0, 0)))
            .toStrictEqual(true);
    });

    it(`should return false - is not a valid location`, () => {
        const board = new Board(3, 4);
        board.board[1][1].isMountain = true;
        board.board[2][2].adventurer = new Adventurer('Lara', 2, 2, Orientation.south, [MovementAdventurer.F]);
        expect(BoardHelper.isValidLocation(board.board, new Coordinates(1, 1)))
            .toStrictEqual(false);
        expect(BoardHelper.isValidLocation(board.board, new Coordinates(2, 2)))
            .toStrictEqual(false);
    });


    it(`should return true - next move is inside board`, () => {
        const board = new Board(3, 4);
        expect(BoardHelper.nextMoveIsInsideBoard(board.board, new Coordinates(2, 3)))
            .toStrictEqual(true);
        expect(BoardHelper.isValidLocation(board.board, new Coordinates(2, 2)))
            .toStrictEqual(true);
    });

    it(`should return false - next move is not inside board`, () => {
        const board = new Board(3, 4);
        expect(BoardHelper.nextMoveIsInsideBoard(board.board, new Coordinates(-4, 2)))
            .toStrictEqual(false);
        expect(BoardHelper.isValidLocation(board.board, new Coordinates(0, 5)))
            .toStrictEqual(false);
    });

    it(`should return an error - board dimension`, () => {
        const board = new Board(-1, -1);
        expect(() => BoardHelper.nextMoveIsInsideBoard(board.board, new Coordinates(1, 2)))
            .toThrow();
    });
});