import { Coordinates } from "./coordinates";

export class Treasure {
    private _coordinates: Coordinates;
    private _number: number;

    constructor(xAxis: number, yAxis: number, number: number) {
        this._coordinates = new Coordinates(xAxis, yAxis);
        this._number = number;
    }

    get coordinates(): Coordinates {
        return this._coordinates;
    }

    get number(): number {
        return this._number;
    }
}