import { Vector, IndexedVector } from './load_hunting_ground';

function cross(a: Vector, b: Vector) {
    return a.x * b.y - b.x * a.y;
}

function vectorTo(from: Vector, to: Vector): Vector {
    return {
        x: to.x - from.x,
        y: to.y - from.y,
    };
}

export function getBunnyCountOnLine(positions: IndexedVector[], indexA: number, indexB: number) {
    const posA = positions[indexA];
    const posB = positions[indexB];
    const vecAB = vectorTo(posA, posB);

    const positionsOnLine = positions.filter((posC) => {
        if (posC.index === indexA || posC.index === indexB) return false;
        const vecAC = vectorTo(posA, posC);
        return cross(vecAB, vecAC) === 0;
    });
    return 2 + positionsOnLine.length;
}

export function findBestShotForIndex(positions: IndexedVector[], index: number) {
    const otherPositions = positions.filter((p) => p.index !== index);
    const bunnyCounts = otherPositions.map((p) => getBunnyCountOnLine(positions, index, p.index));
    return Math.max(...bunnyCounts);
}

export function findBestShot(positions: IndexedVector[]) {
    const bunnyCounts = positions.map((_, i) => findBestShotForIndex(positions, i));
    return Math.max(...bunnyCounts);
}
