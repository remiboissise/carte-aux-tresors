import { Game } from "../../models/game";
import { Board } from "../../models/board";
import { MovementAdventurer, Adventurer, Orientation } from "../../models/adventurer";
import { Treasure } from "../../models/treasure";
import { Mountain } from "../../models/mountain";

describe('Game Model', () => {

    const board: Board = new Board(3, 4);
    const adventurers: Array<Adventurer> = [
        new Adventurer('Lara', 1, 1, Orientation.south,
            [MovementAdventurer.F, MovementAdventurer.F, MovementAdventurer.R,
            MovementAdventurer.F, MovementAdventurer.R, MovementAdventurer.F, MovementAdventurer.L,
            MovementAdventurer.L, MovementAdventurer.F
            ])
    ];
    const treasures: Array<Treasure> = [
        new Treasure(0, 3, 0),
        new Treasure(1, 3, 3)
    ];
    const mountains: Array<Mountain> = [
        new Mountain(1, 0),
        new Mountain(2, 1)
    ];

    const game = new Game(board, adventurers, mountains, treasures);

    it(`should return an game's instance`, () => {
        expect(game).toBeInstanceOf(Game);
    });

    it(`should return value of coordinates' properties`, () => {
        expect(game.treasures).toStrictEqual([
            new Treasure(1, 3, 3)
        ]);

        expect(game.mountains).toStrictEqual([
            new Mountain(1, 0),
            new Mountain(2, 1)
        ]);
    });    
});