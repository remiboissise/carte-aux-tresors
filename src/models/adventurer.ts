import { Coordinates } from "./coordinates";

export enum MovementAdventurer { "L" = "LEFT", "R" = "RIGHT", "F" = "FORWARD" }
export type Orientation = keyof typeof Orientation
export class OrientationAdventurer {
    value: string; x: number; y: number;
    constructor(v: string, x: number, y: number) {
        this.value = v;
        this.x = x; this.y = y;
    }
}
export const Orientation = {
    north: new OrientationAdventurer('N', 0, 1),
    south: new OrientationAdventurer('S', 0, -1),
    east: new OrientationAdventurer('E', 1, 0),
    west: new OrientationAdventurer('O', -1, 0)
}

export class Adventurer {
    private _name: string;
    private _coordinates: Coordinates;
    private _orientation: OrientationAdventurer;
    private _movements: Array<MovementAdventurer>;
    private _treasure: number;

    constructor(name: string, xAxis: number, yAxis: number, orientation: OrientationAdventurer, movements: Array<MovementAdventurer>, treasure: number = 0) {
        this._name = name;
        this._coordinates = new Coordinates(xAxis, yAxis);
        this._orientation = orientation;
        this._movements = movements;
        this._treasure = treasure;
    }

    get name(): string {
        return this._name;
    }

    get coordinates(): Coordinates {
        return this._coordinates;
    }

    get orientation(): OrientationAdventurer {
        return this._orientation;
    }

    get movements(): Array<MovementAdventurer> {
        return this._movements;
    }

    get treasure(): number {
        return this._treasure;
    }

    set orientation(orientation: OrientationAdventurer) {
        this._orientation = orientation;
    }

    set coordinates(coordinates: Coordinates) {
        this._coordinates = coordinates;
    }

    set treasure(treasure: number) {
        this._treasure = treasure;
    }
}