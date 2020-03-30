export enum TypeGameObject { "A" = "ADVENTURER", "C" = "BOARD", "M" = "MOUNTAIN", "T" = "TREASURE", "#" = "COMMENT" }

export class Line {
    private _line: string;
    private _type: TypeGameObject;

    constructor(line: string, type: TypeGameObject) {
        this._line = line;
        this._type = type;
    }

    get line(): string {
        return this._line;
    }

    get type(): TypeGameObject {
        return this._type;
    }
}