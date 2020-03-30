import { Orientation, MovementAdventurer, Adventurer } from "../../models/adventurer";
import { AdventurerHelper } from "../../helpers/adventurer.helper";
import { Coordinates } from "../../models/coordinates";

describe('Adventurer Helpers', () => {
    it(`should return the orientation of adventurer (south)`, () => {
        expect(AdventurerHelper.retrieveOrientationOfAdventurer('S'))
            .toStrictEqual(Orientation.south);
    });

    it(`should return the orientation of adventurer (north)`, () => {
        expect(AdventurerHelper.retrieveOrientationOfAdventurer('N'))
            .toStrictEqual(Orientation.north);
    });

    it(`should return the orientation of adventurer (east)`, () => {
        expect(AdventurerHelper.retrieveOrientationOfAdventurer('E'))
            .toStrictEqual(Orientation.east);
    });

    it(`should return the orientation of adventurer (west - french)`, () => {
        expect(AdventurerHelper.retrieveOrientationOfAdventurer('O'))
            .toStrictEqual(Orientation.west);
    });

    it(`should return the orientation of adventurer (west)`, () => {
        expect(AdventurerHelper.retrieveOrientationOfAdventurer('W'))
            .toStrictEqual(Orientation.west);
    });

    it(`should return an error - orientation not exist`, () => {
        const orientation = "C";
        expect(() => AdventurerHelper.retrieveOrientationOfAdventurer(orientation))
            .toThrow();
    });

    it(`should return the movements of adventurer Lara`, () => {
        expect(AdventurerHelper.retrieveMovementsOfAdventurer('Lara', 'AARLGGDDF'))
            .toStrictEqual([
                MovementAdventurer.F,
                MovementAdventurer.F,
                MovementAdventurer.R,
                MovementAdventurer.L,
                MovementAdventurer.L,
                MovementAdventurer.L,
                MovementAdventurer.R,
                MovementAdventurer.R,
                MovementAdventurer.F
            ]);
    });

    it(`should return an error - the movement of adventurer Lara`, () => {
        expect(() => AdventurerHelper.retrieveMovementsOfAdventurer('Lara', 'AAGGDDFU'))
            .toThrow("The following movement 'U' doesn't exist for the adventurer Lara")
    });


    it(`should return true - Adventurer has movement(s)`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.F], 1);
        expect(AdventurerHelper.adventurersHasMovement([adventurer]))
            .toStrictEqual(true);
    });

    it(`should return true - Adventurers has movement(s)`, () => {
        const firstAdventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.F], 1);
        const secondAdventurer = new Adventurer('Roger', 4, 2, Orientation.north, [], 1);
        expect(AdventurerHelper.adventurersHasMovement([firstAdventurer, secondAdventurer]))
            .toStrictEqual(true);
    });

    it(`should return false - Adventurers has no movement`, () => {
        const firstAdventurer = new Adventurer('Lara', 1, 1, Orientation.south, [], 1);
        const secondAdventurer = new Adventurer('Roger', 4, 2, Orientation.north, [], 1);
        expect(AdventurerHelper.adventurersHasMovement([firstAdventurer, secondAdventurer]))
            .toStrictEqual(false);
    });

    it(`should return the next orientation of adventurer - south - forward => south`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.F], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.south);
    });

    it(`should return the next orientation of adventurer - south - right => west`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.R], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.west);
    });

    it(`should return the next orientation of adventurer - south - left => east`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.L], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.east);
    });

    it(`should return the next orientation of adventurer - north - forward => north`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.north, [MovementAdventurer.F], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.north);
    });

    it(`should return the next orientation of adventurer - north - left => west`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.north, [MovementAdventurer.L], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.west);
    });

    it(`should return the next orientation of adventurer - north - right => east`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.north, [MovementAdventurer.R], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.east);
    });

    it(`should return the next orientation of adventurer - east - forward => east`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.east, [MovementAdventurer.F], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.east);
    });

    it(`should return the next orientation of adventurer - east - left => north`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.east, [MovementAdventurer.L], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.north);
    });

    it(`should return the next orientation of adventurer - east - right => south`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.east, [MovementAdventurer.R], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.south);
    });

    it(`should return the next orientation of adventurer - west - forward => west`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.west, [MovementAdventurer.F], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.west);
    });

    it(`should return the next orientation of adventurer - west - left => south`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.west, [MovementAdventurer.L], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.south);
    });

    it(`should return the next orientation of adventurer - west - right => north`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.west, [MovementAdventurer.R], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.north);
    });

    it(`should return the next orientation of adventurer - west - right => north`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.west, [MovementAdventurer.R], 1);
        expect(AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toStrictEqual(Orientation.north);
    });

    it(`should return an error - the current orientation is not defined by the game rules`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.west, ['P' as MovementAdventurer], 1);
        expect(() => AdventurerHelper.getNextOrientationOfAdventurer(
            adventurer.movements.shift() as MovementAdventurer,
            adventurer.orientation))
            .toThrow();
    });

    it(`should return the next coordinates of adventurer - south`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.south, [MovementAdventurer.F], 1);
        expect(AdventurerHelper.getNextCoordinatesOfAdventurer(
            adventurer.coordinates,
            adventurer.orientation))
            .toStrictEqual(new Coordinates(1, 2));
    });

    it(`should return the next coordinates of adventurer - west`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.west, [MovementAdventurer.F], 1);
        expect(AdventurerHelper.getNextCoordinatesOfAdventurer(
            adventurer.coordinates,
            adventurer.orientation))
            .toStrictEqual(new Coordinates(0, 1));
    });

    it(`should return the next coordinates of adventurer - north`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.north, [MovementAdventurer.F], 1);
        expect(AdventurerHelper.getNextCoordinatesOfAdventurer(
            adventurer.coordinates,
            adventurer.orientation))
            .toStrictEqual(new Coordinates(1, 0));
    });

    it(`should return the next coordinates of adventurer - east`, () => {
        const adventurer = new Adventurer('Lara', 1, 1, Orientation.east, [MovementAdventurer.F], 1);
        expect(AdventurerHelper.getNextCoordinatesOfAdventurer(
            adventurer.coordinates,
            adventurer.orientation))
            .toStrictEqual(new Coordinates(2, 1));
    });

});