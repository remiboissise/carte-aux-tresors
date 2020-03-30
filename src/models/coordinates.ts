export class Coordinates {
    private _xAxis: number;
    private _yAxis: number;

    constructor(xAxis: number, yAxis: number) {
        this._xAxis = xAxis;
        this._yAxis = yAxis;
    }

    get xAxis(): number {
        return this._xAxis;
    }

    get yAxis(): number {
        return this._yAxis;
    }

    set xAxis(xAxis: number) {
        this._xAxis = xAxis;
    }

    set yAxis(yAxis: number) {
        this._yAxis = yAxis;
    }
}