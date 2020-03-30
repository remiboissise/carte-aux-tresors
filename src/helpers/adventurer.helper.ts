import { OrientationAdventurer, MovementAdventurer, Adventurer, Orientation } from "../models/adventurer";
import { Coordinates } from "../models/coordinates";
import { LineHelper } from "./line.helper";
import _ from 'lodash';

export class AdventurerHelper {

    /**
     * Récupère l'orientation de l'aventurier
     * @param orientation 
     */
    static retrieveOrientationOfAdventurer(orientation: string): OrientationAdventurer {
        var value: OrientationAdventurer;
        switch (orientation) {
            case 'N': value = Orientation.north; break;
            case 'S': value = Orientation.south; break;
            case 'W': value = Orientation.west; break;
            case 'O': value = Orientation.west; break;
            case 'E': value = Orientation.east; break;
            default: throw new Error(`The orientation '${orientation}' is not compatible with the game! 
                Please verify that the orientation is either N ('North' | 'Nord');
                S ('South' | 'Sud'); W or O ('West' | 'Ouest'); E ('East' | 'Est')`);
        }
        return value;
    }

    /**
     * Récupère la liste des mouvements de l'utilisateur
     * @param name Nom de l'aventurier
     * @param movements Liste des mouvement (exemple : AADDGGA);
     */
    static retrieveMovementsOfAdventurer(name: string, movements: string): Array<MovementAdventurer> {
        var arrayOfmovements = new Array<MovementAdventurer>();
        var splitAndTrimMovements = LineHelper.splitAndTrimString(movements, '');
        _.forEach(splitAndTrimMovements, (movement) => {
            switch (movement) {
                case 'F': arrayOfmovements.push(MovementAdventurer.F); break;
                case 'A': arrayOfmovements.push(MovementAdventurer.F); break;
                case 'R': arrayOfmovements.push(MovementAdventurer.R); break;
                case 'D': arrayOfmovements.push(MovementAdventurer.R); break;
                case 'L': arrayOfmovements.push(MovementAdventurer.L); break;
                case 'G': arrayOfmovements.push(MovementAdventurer.L); break;
                default: throw new Error(`The following movement '${movement}' doesn't exist for the adventurer ${name}`)
            }
        });
        return arrayOfmovements;
    }

    /**
     * 
     * @param adventurers 
     */
    static adventurersHasMovement(adventurers: Array<Adventurer>): boolean {
        var hasMovements = false;
        _.forEach(adventurers, (adventurer) => {
            if (adventurer.movements.length > 0) {
                hasMovements = true;
                return;
            }
        });
        return hasMovements;
    }

    /**
     * Récupère la prochaine orientation de l'aventurier
     * @param movement le prochain mouvement
     * @param orientation l'orientation courante
     */
    static getNextOrientationOfAdventurer(movement: MovementAdventurer, orientation: OrientationAdventurer): OrientationAdventurer {
        var value: OrientationAdventurer;
        switch (movement) {
            case 'FORWARD': value = orientation; break;
            case 'RIGHT': value = _.find(Orientation, _.matches({ 'x': orientation.y, 'y': -orientation.x })) as OrientationAdventurer; break;
            case 'LEFT': value = _.find(Orientation, _.matches({ 'x': -orientation.y, 'y': orientation.x })) as OrientationAdventurer; break;
            default: throw new Error(`The orientation '${orientation}' is not compatible with the game !`);
        }
        return value;
    }

    /**
     * Récupère les coordonées de l'aventurier lors du prochain mouvement
     * @param coordinates coordonnées courante de l'aventurier
     * @param nextOrientation prochaine orientation de l'aventurier
     */
    static getNextCoordinatesOfAdventurer(coordinates: Coordinates, nextOrientation: OrientationAdventurer): Coordinates {
        return new Coordinates(coordinates.xAxis + nextOrientation.x, coordinates.yAxis - nextOrientation.y);
    }
}