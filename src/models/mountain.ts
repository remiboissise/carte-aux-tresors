import { Coordinates } from "./coordinates";

export class Mountain {
    private _coordinates: Coordinates;

    constructor(xAxis: number, yAxis: number) {
        this._coordinates = new Coordinates(xAxis, yAxis);
    }

    get coordinates(): Coordinates {
        return this._coordinates;
    }
}