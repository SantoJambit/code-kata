import {
    countJewels,
    getHappyNumbers,
    isHappyNumberRecursiveSet,
    isHappyNumberRecursive,
    isHappyNumber,
} from './jewels';
import { StopWatch } from './lib';

const a = {
    stones: 'aAAbbbb',
    jewels: 'aA',
};
const b = { stones: 'ZZ', jewels: 'z' };

describe('countJewels', () => {
    test('a', () => {
        expect(countJewels(a.stones, a.jewels)).toBe(3);
    });
    test('b', () => {
        expect(countJewels(b.stones, b.jewels)).toBe(0);
    });
});

describe('isHappyNumberRecursive', () => {
    test.each([1, 7, 10])('%d', (i) => {
        expect(isHappyNumberRecursive(1)).toBe(true);
    });
    test.each([2, 3, 4, 5, 6, 8, 9])('%d', (i) => {
        expect(isHappyNumberRecursive(i)).toBe(false);
    });
});

describe('isHappyNumberRecursiveSet', () => {
    test.each([1, 7, 10])('%d', (i) => {
        expect(isHappyNumberRecursiveSet(1)).toBe(true);
    });
    test.each([2, 3, 4, 5, 6, 8, 9])('%d', (i) => {
        expect(isHappyNumberRecursiveSet(i)).toBe(false);
    });
});

describe('isHappyNumber', () => {
    test.each([1, 7, 10])('%d', (i) => {
        expect(isHappyNumber(1)).toBe(true);
    });
    test.each([2, 3, 4, 5, 6, 8, 9])('%d', (i) => {
        expect(isHappyNumber(i)).toBe(false);
    });
});

describe('getHappyNumbers', () => {
    test('8', () => {
        expect(getHappyNumbers(8)).toEqual([1, 7, 10, 13, 19, 23, 28, 31]);
    });
});
