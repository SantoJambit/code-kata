import { maze0, maze3b, maze1, maze2, maze3, maze4 } from './maze';
import {
    findStartPositions,
    findDropRow,
    findDropColumns,
    findOutColumns,
    marbleResults,
} from './marble';

describe('findStartPositions', () => {
    test('should compute correct starting position for a simple maze', () => {
        expect(findStartPositions(maze0)).toEqual([1]);
    });
});

describe('findDropRow', () => {
    test('should compute correct drop position from start of simple maze', () => {
        expect(findDropRow(maze0, 1, 1)).toEqual(1);
    });
});

describe('findDropColumns', () => {
    test('should compute correct drop columns from start of simple maze', () => {
        expect(findDropColumns(maze3b, 14, 2)).toEqual([10, 20]);
    });
    test('should compute correct drop columns from start of simple maze', () => {
        expect(findDropColumns(maze0, 1, 2)).toEqual([3]);
    });
});

describe('findOutColumns', () => {
    test('should compute correct out columns from start of simple maze', () => {
        expect(findOutColumns(maze0, 1, 1)).toEqual([3]);
    });
});

describe('marbleResults', () => {
    test('should compute correct out columns', () => {
        expect(marbleResults(maze0)).toEqual({
            1: [3],
        });
        expect(marbleResults(maze1)).toEqual({
            2: [2],
            8: [],
            23: [21],
        });
        expect(marbleResults(maze2)).toEqual({
            1: [],
        });
        expect(marbleResults(maze3)).toEqual({
            14: [1, 27],
        });
        expect(marbleResults(maze3b)).toEqual({
            14: [10, 20],
        });
        expect(marbleResults(maze4)).toEqual({
            1: [],
        });
    });
});
