import { getSectionEnd, getWaterAmount, getWaterBetweenTowers } from './water_towers';

type Level = [number[], number];

const levels: Level[] = [
    [[1, 5, 3, 7, 2], 2],
    [[5, 3, 7, 2, 6, 4, 5, 9, 1, 2], 14],
    [[2, 6, 3, 5, 2, 8, 1, 4, 2, 2, 5, 3, 5, 7, 4, 1], 35],
    [[5, 5, 5, 5], 0],
    [[5, 6, 7, 8], 0],
    [[8, 7, 7, 6], 0],
    [[6, 7, 10, 7, 6], 0],
];

describe('getWaterBetweenTowers', () => {
    test('works for the first part', () => {
        expect(getWaterBetweenTowers(levels[1][0], 0, 2)).toEqual(2);
        expect(getWaterBetweenTowers(levels[1][0], 7, 9)).toEqual(1);
    });
});

describe('getSectionEnd', () => {
    test('gets the end', () => {
        expect(getSectionEnd(levels[1][0], 0)).toEqual(2);
        expect(getSectionEnd(levels[1][0], 2)).toEqual(7);
        expect(getSectionEnd(levels[1][0], 7)).toEqual(9);
    });
});

describe('getWaterAmount', () => {
    test.each(levels.map((l) => [l[1], l[0]] as const))('water %j for %j', (water, towers) => {
        expect(getWaterAmount(towers)).toEqual(water);
    });
});
