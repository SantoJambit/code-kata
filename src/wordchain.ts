import * as fs from "fs";

const words = fs.readFileSync("./wordlist.txt", "utf8").split(/\r?\n/);

interface WordLeaf {
    word: string;
    leafs: WordLeaf[];
    words: string[];
}

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

function getWordGoals(word: string, possibleWords: string[]): string[] {
    return possibleWords.filter((otherWord) => {
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

function getWordTree(word: string, possibleWords: string[]): WordLeaf {
    const leafMap: { [s: string]: WordLeaf } = {};
    for (const w of possibleWords) {
        leafMap[w] = {
            word: w,
            leafs: [],
            words: getWordGoals(w, possibleWords)
        };
    }
    for (const w of possibleWords) {
        const leaf = leafMap[w];
        leaf.leafs = leaf.words.map((w2) => leafMap[w2]);
    }

    return leafMap[word];
}

const paths: string[][] = [];
function gatherPaths(tree: WordLeaf, to: string, walkedWords: string[], depth: number) {
    if (depth === 0)
        return;
    if (tree.leafs.some((leaf) => leaf.word === to)) {
        paths.push(walkedWords);
        return;
    }

    for (const leaf of tree.leafs) {
        if (walkedWords.indexOf(leaf.word) < 0)
            gatherPaths(leaf, to, [...walkedWords, leaf.word], depth - 1);
    }
}

function test(from: string, to: string) {
    const lenMin = from.length > to.length ? to.length : from.length;
    const lenMax = from.length < to.length ? to.length : from.length;
    const possibleStepWords = words.filter((word) => word.length >= lenMin && word.length <= lenMax);

    const tree = getWordTree(from, possibleStepWords);

    for (let i = 1; paths.length === 0; i++)
        gatherPaths(tree, to, [], i);

    paths.sort((a, b) => a.length - b.length);
    console.log(paths);
}
// "cat", "cot", "cog", "dog"

test("duck", "dogma");
