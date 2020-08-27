import * as fs from 'fs';

export interface Vector {
    x: number;
    y: number;
}

export interface IndexedVector extends Vector {
    index: number;
}

export function loadHuntingGround(path: string) {
    const lines = fs.readFileSync(path, 'utf-8').split('\n');
    // Pop first line
    const bunnyCount = parseInt(lines.shift(), 10);
    if (lines.length !== bunnyCount)
        throw new Error(`expected ${bunnyCount} bunnies, but got ${lines.length}`);

    const positions: IndexedVector[] = [];
    while (lines.length) {
        // Pop first line
        const line = lines.shift();
        const coords = line.split(' ').map((s) => parseInt(s, 10));
        if (coords.length !== 2)
            throw new Error(
                `Bunny must have exactly 2 coordinates, got: ${JSON.stringify(coords)}!`,
            );
        const [x, y] = coords;
        positions.push({ x, y, index: positions.length });
    }
    return positions;
}
