import { Adventurer } from "./adventurer";

export class Cell {
    private _x: number;
    private _y: number;
    private _treasure: number | undefined;
    private _isMountain: boolean;
    private _adventurer: Adventurer | undefined;

    constructor(x: number, y: number) {
        if(x < 0 || y < 0) {
            throw new Error('Cell not exist');
        }
        this._x = x;
        this._y = y;
        this._isMountain = false;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get isMountain(): boolean {
        return this._isMountain;
    }

    set isMountain(isMountain: boolean) {
        this._isMountain = isMountain;
    }

    get treasure(): number | undefined {
        return this._treasure;
    }

    set treasure(treasure) {
        this._treasure = treasure;
    }

    get adventurer(): Adventurer | undefined {
        return this._adventurer;
    }

    set adventurer(adventurer) {
        this._adventurer = adventurer;
    }
}