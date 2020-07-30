import {
    findStartPositions,
    findDropRow,
    findDropColumns,
    findOutColumns,
    marbleResults,
} from './marble';
import { loadMaze, loadAllMazes } from './mazeLoader';

const simpleMaze = loadMaze('./mazes/simple.txt');
const stillJustTwo = loadMaze('./mazes/still-just-two-results.txt');
const allMazes = loadAllMazes();

describe('findStartPositions', () => {
    test('should compute correct starting position for a simple maze', () => {
        expect(findStartPositions(simpleMaze.data)).toEqual([1]);
    });
});

describe('findDropRow', () => {
    test('should compute correct drop position from start of simple maze', () => {
        expect(findDropRow(simpleMaze.data, 1, 1)).toEqual(1);
    });
});

describe('findDropColumns', () => {
    test('should compute correct drop columns from start of simple maze', () => {
        expect(findDropColumns(stillJustTwo.data, 14, 2)).toEqual([10, 20]);
    });
    test('should compute correct drop columns from start of simple maze', () => {
        expect(findDropColumns(simpleMaze.data, 1, 2)).toEqual([3]);
    });
});

describe('findOutColumns', () => {
    test('should compute correct out columns from start of simple maze', () => {
        expect(findOutColumns(simpleMaze.data, 1, 1)).toEqual([3]);
    });
});

describe('marbleResults', () => {
    test.each(allMazes.map(({ path, data, results }) => [path, results, data] as const))(
        'Maze %s should match results: %j',
        (path, results, data) => {
            expect(marbleResults(data)).toEqual(results);
        },
    );
});
