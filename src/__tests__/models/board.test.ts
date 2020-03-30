import { Board } from "../../models/board";
import { Cell } from "../../models/cell";

describe('Board Model', () => {
    it(`should return an board's instance`, () => {
        const board: Board = new Board(1, 2);
        const complexBoard = new Board(3, 4);
        expect(board).toBeInstanceOf(Board);
        expect(board.board).toStrictEqual(
            [
                [
                    new Cell(0, 0),
                    new Cell(0, 1)
                ]
            ]
        )
        expect(complexBoard.board).toStrictEqual(
            [
                [
                    new Cell(0, 0),
                    new Cell(0, 1),
                    new Cell(0, 2),
                    new Cell(0, 3)
                ],
                [
                    new Cell(1, 0),
                    new Cell(1, 1),
                    new Cell(1, 2),
                    new Cell(1, 3)
                ],
                [
                    new Cell(2, 0),
                    new Cell(2, 1),
                    new Cell(2, 2),
                    new Cell(2, 3)
                ]
            ]
        )
    });
});