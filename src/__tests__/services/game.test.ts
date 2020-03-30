import { Orientation, MovementAdventurer, Adventurer } from "../../models/adventurer";
import { Coordinates } from "../../models/coordinates";
import { GameService } from "../../services/game.service";
import { Board } from "../../models/board";
import { Treasure } from "../../models/treasure";
import { Mountain } from "../../models/mountain";
import { Game } from "../../models/game";

describe('Game Service', () => {
    it(`should return an adventurer's instance`, () => {

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

        const game = new GameService(board, adventurers, treasures, mountains);
        game.start();
        expect(game.game).toBeInstanceOf(Game);
    });
});