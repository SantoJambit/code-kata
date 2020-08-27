import { loadHuntingGround } from "./load_hunting_ground";
import { findBestShot, getBunnyCountOnLine, findBestShotForIndex } from "./wabbit_hunt";
import { StopWatch } from "./lib";

const crossing = loadHuntingGround('./hunting-grounds/crossing.txt');
const parallel = loadHuntingGround('./hunting-grounds/parallel.txt');
const straightAndAStray = loadHuntingGround('./hunting-grounds/straight-and-a-stray.txt');
const vertical = loadHuntingGround('./hunting-grounds/vertical.txt');

// Tests for subroutines
test('It finds 5 wabbits on the hunting ground "straight-and-a-stray" when looking at the line from the first to the second rabbit', () => {
    expect(getBunnyCountOnLine(straightAndAStray, 0, 1)).toEqual(5);
});

test('It finds 5 wabbits on the hunting ground "straight-and-a-stray" when looking at the first rabbit', () => {
    expect(findBestShotForIndex(straightAndAStray, 0)).toEqual(5);
});

// Actual hunting ground tests
test('It shoots 5 wabbits on the hunting ground "straight-and-a-stray"', () => {
    expect(findBestShot(straightAndAStray)).toEqual(5);
});

test('It shoots 4 wabbits on the hunting ground "parallel"', () => {
    expect(findBestShot(parallel)).toEqual(4);
});

test('It shoots 4 wabbits on the hunting ground "vertical"', () => {
    expect(findBestShot(vertical)).toEqual(4);
});

test('It shoots 5 wabbits on the hunting ground "crossing"', () => {
    expect(findBestShot(crossing)).toEqual(5);
});

// Duration tests
const watch = new StopWatch();
test.each([
    [crossing, 'crossing'],
    [parallel, 'parallel'],
    [straightAndAStray, 'straight-and-a-stray'],
    [vertical, 'vertical'],
])('It completes in less than a second', (positions, name) => {
    watch.start(name);
    findBestShot(positions);
    watch.stop();
    expect(watch.getLastDuration()).toBeLessThan(1000);
});
