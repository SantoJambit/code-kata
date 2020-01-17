import * as fs from "fs";
import { getArguments, StopWatch } from "./lib";

const stopWatch = new StopWatch();
stopWatch.start('Reading wordlist');
const words = fs.readFileSync("./wordlist.txt", "utf8").split(/\r?\n/);
stopWatch.stop();

enum WordLeafType {
    FROM,
    TO,
    STEP
};

class WordLeaf {
    private _leafs?: WordLeaf[];
    public constructor(
        public readonly word: string,
        public readonly type: WordLeafType = WordLeafType.STEP
    ) {
    }

    public get leafs() {
        if (!this._leafs) {
            if (this.type === WordLeafType.TO)
                this._leafs = [];
            else
                this._leafs = getWordGoals(this.word)
                    .map((word) => getLeaf(word));
        }
        return this._leafs;
    }
}
const leafMap: { [s: string]: WordLeaf } = {};

function isOneCharDiff(a: string, b: string) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diff += 1;
            if (diff > 1)
                return false;
        }
    }
    return diff === 1;
}

function isOneCharAdded(short: string, long: string) {
    let added = false;
    for (let s = 0, l = 0; l < long.length; s++ , l++) {
        if (short[s] !== long[l]) {
            if (added)
                return false;
            added = true;
        }
    }
    return added;
}

function getWordGoals(word: string): string[] {
    return words.filter((otherWord) => {
        if (word === otherWord)
            return false;
        if (word.length === otherWord.length && isOneCharDiff(word, otherWord))
            return true;
        if (word.length === otherWord.length + 1 && isOneCharAdded(word, otherWord))
            return true;
        if (word.length === otherWord.length - 1 && isOneCharAdded(otherWord, word))
            return true;
    });
}

function getLeaf(word: string, type: WordLeafType = WordLeafType.STEP): WordLeaf {
    let leaf = leafMap[word];
    if (!leaf)
        leaf = leafMap[word] = new WordLeaf(word, type);
    return leaf;
}

const paths: string[][] = [];
function gatherPaths(from: WordLeaf, walkedWords: string[], depth: number) {
    if (depth === 0)
        return;
    if (from.leafs.some((leaf) => leaf.type === WordLeafType.TO)) {
        paths.push(walkedWords);
        return;
    }

    for (const leaf of from.leafs) {
        if (walkedWords.indexOf(leaf.word) < 0)
            gatherPaths(leaf, [...walkedWords, leaf.word], depth - 1);
    }
}

function run(from: string, to: string) {
    stopWatch.start(`Creating from and to leafs`);
    const fromLeaf = getLeaf(from, WordLeafType.FROM);
    getLeaf(to, WordLeafType.TO);
    stopWatch.stop();

    for (let i = 1; paths.length === 0; i++) {
        stopWatch.start(`Gathering paths for a maximum of ${i} steps`);
        gatherPaths(fromLeaf, [], i);
        stopWatch.stop();
    }

    console.log('Shortest path(s):');
    for (const path of paths)
        console.log(' - ' + [from, ...path, to].join(' -> '));
}

const args = getArguments(2);
run(args[0], args[1]);
stopWatch.finish();
