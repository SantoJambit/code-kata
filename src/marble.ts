
export function findStartPositions(maze: string[][]) {
    return maze[0].map((c, i) => [c, i] as const).filter(([c, i]) => c === ' ').map(([c, i]) => i);
}

export function findDropRow(maze: string[][], columnIndex: number, rowIndex: number) {
    while(rowIndex < maze.length) {
        if (maze[rowIndex][columnIndex] !== ' ')
            return rowIndex-1;
        rowIndex++;
    }
    return -1;
}

export function findDropColumns(maze: string[][], columnIndex: number, rowIndex: number) {
    let positions: number[] = [];
    for(let i=columnIndex; i >= 0; i--) {
        if (maze[rowIndex-1][i] !== ' ') {
            break;
        }
        if (maze[rowIndex][i] === ' ') {
            positions.push(i);
            break;
        }
    }
    for(let i=columnIndex; i <maze[0].length; i++) {
        if (maze[rowIndex-1][i] !== ' ') {
            break;
        }
        if (maze[rowIndex][i] === ' ') {
            positions.push(i);
            break;
        }
    }
    return positions;
}
function flatDeep<T>(arr: T[], d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                 : arr.slice();
 };

export function findOutColumns(maze: string[][], columnIndex: number, rowIndex: number) {
    const nextRow = findDropRow(maze, columnIndex, rowIndex);
    if (nextRow === -1) {
        return [columnIndex];
    }
    const columns = findDropColumns(maze, columnIndex, nextRow+1);
    const flattened: number[] = flatDeep(columns.map((col) => findOutColumns(maze, col, nextRow+1)));
    // only unique and sorted by order
    return flattened.filter((item, pos) => flattened.indexOf(item) === pos).sort((a, b) => a - b);
}

export function marbleResults(maze: string[][]) {
    const starts = findStartPositions(maze);
    const results = {};
    for(const start of starts) {
        results[start] = findOutColumns(maze, start, 1)
    }
    return results;
}