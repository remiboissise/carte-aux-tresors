import { AnalyzerService } from './services/analyzer.service';
import { Lines } from './analyzers/lines';
import { GameService } from './services/game.service';
import * as yargs from 'yargs';
import * as fs from "fs";
const path = require("path");
import { LoggerService } from './services/logger.service';

const argv = yargs.options({
    file: {
        alias: 'f',
        type: 'string',
        demandOption: true,
        description: 'game file'
    }
}).coerce('file', file => {
    const filePath = path.resolve(file);
    if (!fs.existsSync(filePath)) {
        throw new Error(`The file ${file} doesn't exist. Please verify the path of the file (path : ${filePath}).`);
    }
    return filePath;
}).argv;



export const launch = async (file: string) => {
    try {
        const parser = new AnalyzerService();
        // On récupère notre jeu de données
        await parser.read(file);
        // On analyse notre jeu de données / création de nos instances
        const instancesOfGame = new Lines().analyze(parser.lines);
        // Création du jeu
        const game = new GameService(instancesOfGame.Board, instancesOfGame.Adventurers, instancesOfGame.Treasures, instancesOfGame.Mountains);
        // Lancement du jeu
        const result = game.start();
        // Résultat sortie
        const logger = new LoggerService(result);
        logger.write();
        console.log(logger.result);
    } catch (error) {
        console.error(error.message);
    }

}

launch(argv.file);





