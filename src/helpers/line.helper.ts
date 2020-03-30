import { TypeGameObject } from '../models/line';
import _ from 'lodash';

export class LineHelper {

    /**
     * Vérifie si la ligne d'entrée est valide en fonction d'une expression régulière
     * @param regex expression régulière
     * @param line ligne d'entrée
     */
    static isValidLine(regex: RegExp, line: string): boolean {
        return regex.test(line);
    }

    /**
     * 
     * @param line 
     * @param separator 
     */
    static getTypeOfGameObject(line: string, separator: string = '-'): TypeGameObject {
        const type : string = _.split(line, separator)[0].trim() as string;
        var value: TypeGameObject;
        switch (type) {
            case '#': value = TypeGameObject[type]; break;
            case 'C': value = TypeGameObject[type]; break;
            case 'M': value = TypeGameObject[type]; break;
            case 'T': value = TypeGameObject[type]; break;
            case 'A': value = TypeGameObject[type]; break;
            default: throw new Error(`Line '${line}' is not compatible with the game !`);
        }
        return value;
    }

    /**
     * Permet de scinder et mettre en forme une ligne d'entrée
     * @param line 
     * @param separator 
     */
    static splitAndTrimString(line: string, separator: string = '-'): Array<any> {
        return _.split(line, separator).map((string: string) => {
            string = _.trimStart(string);
            string = _.trimEnd(string);
            return string;
        });
    }

    /**
     * Convertir une chaîne de caractère en un entier (si possible)
     * @param value chiffre | retourne (-1) en cas d'échec
     */
    static stringToNumber(value: string) {
        const number = parseInt(value);
        return (Number.isInteger(number)) ? number : -1;
    }
}