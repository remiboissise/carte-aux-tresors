import * as fs from 'fs';
import nexline from 'nexline';
import { Line } from '../models/line';
import { LineHelper } from '../helpers/line.helper';

export class AnalyzerService {

    public lines: Array<Line>;

    constructor() {
        this.lines = [];
    }

    read = async (file: string) => {
        try {
            const fd = fs.openSync(file, 'r');
            const nl = nexline({
                input: fd,
                reverse: false,
            });
            while (true) {
                const line = await nl.next();
                if (line === null) break;
                this.lines.push(
                    new Line(line, LineHelper.getTypeOfGameObject(line))
                );
            }
            fs.closeSync(fd);
        } catch (error) {
            console.error("Read file", error)
        }
    }
}