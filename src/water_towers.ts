export function getWaterBetweenTowers(towers: number[], indexA: number, indexB: number) {
    const highestTower = Math.max(...towers.slice(indexA + 1, indexB + 1));
    const waterLevel = Math.min(highestTower, towers[indexA]);
    let waterSum = 0;
    let index = indexA + 1;
    while (index < indexB) {
        waterSum += waterLevel - towers[index];
        index++;
    }
    return waterSum;
}

export function getSectionEnd(towers: number[], startIndex: number) {
    const highestTower = Math.max(...towers.slice(startIndex + 1));
    const waterLevel = Math.min(highestTower, towers[startIndex]);
    let index = startIndex + 1;
    while (index < towers.length) {
        const currentLevel = towers[index];
        if (currentLevel >= waterLevel) return index;
        index++;
    }
    return null;
}

export function getWaterAmount(towers: number[]) {
    let water = 0;
    let index = 0;
    do {
        const end = getSectionEnd(towers, index);
        if (end === null) break;
        water += getWaterBetweenTowers(towers, index, end);
        index = end;
    } while (index < towers.length);
    return water;
}
