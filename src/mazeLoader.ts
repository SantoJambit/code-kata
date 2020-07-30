import * as fs from 'fs';
import * as path from 'path';

export function loadMaze(path: string) {
    const lines = fs.readFileSync(path, 'utf-8').split('\n');
    const data: string[][] = [];
    const results: { [s: string]: number[] } = {};

    while (lines.length) {
        // Pop first line
        const line = lines.shift();
        if (line.startsWith('-')) {
            // Maze is done, rest are result lines
            break;
        }
        data.push(line.split(''));
    }
    while (lines.length) {
        // Pop first line
        const line = lines.shift();
        if (!line.trim()) continue;

        const parts = line.split(':');
        const inColumn = parseInt(parts[0].trim(), 10);

        if (parts.length !== 2) {
            throw new Error('Ill formatted string' + line);
        }

        results[inColumn] = parts[1]
            .split(' ')
            .map((str) => str.trim())
            .filter((str) => !!str)
            .map((str) => parseInt(str, 10));
    }
    return {
        path,
        data,
        results,
    };
}

export function loadAllMazes() {
    const files = fs.readdirSync('./mazes');
    return files
        .map((file) => path.join('./mazes', file))
        .filter((file) => file.endsWith('.txt') && fs.statSync(file).isFile())
        .map(loadMaze);
}
