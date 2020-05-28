import * as fs from 'fs';

const wordsTxt = fs
    .readFileSync('./words.txt', 'utf8')
    .split(/\r?\n/)
    .map((word) => word.toLowerCase());

const linesFreq = fs
    .readFileSync('./freq.txt', 'utf8')
    .split(/\r?\n/)
    .map((word) => word.toLowerCase());
// remove header
linesFreq.shift();
const wordsFreq = linesFreq
    // filter only lines which match the pattern <tab>text<tab>text<tab>text
    .filter((line) => /^\t([^\t]+)\t([^\t]+)\t([^\t]+)$/.test(line))
    // split by tab and take the second part (since the first tab is preceded by nothing)
    .map((line) => line.split('\t')[1].toLowerCase());

function iBeforeE(words: string[]) {
    const ieWords = words.filter((word) => word.includes('ie'));
    const matchingIeWords = ieWords.filter((word) => {
        const match = /(.)ie/.exec(word);
        return !match || match[1] !== 'c';
    });
    const nonMatchingIeWords = ieWords.filter((word) => {
        const match = /(.)ie/.exec(word);
        return match && match[1] === 'c';
    });

    console.log('I before E when not preceded by C:');
    console.log(
        `  ${matchingIeWords.length} matching vs : ${nonMatchingIeWords.length} non-matching.`,
    );
    console.log(
        `  Plausible: ${matchingIeWords.length > 2 * nonMatchingIeWords.length ? 'yes' : 'no'}`,
    );
}

function eBeforeI(words: string[]) {
    const eiWords = words.filter((word) => word.includes('ei'));
    const matchingEiWords = eiWords.filter((word) => {
        const match = /(.)ei/.exec(word);
        return match && match[1] === 'c';
    });
    const nonMatchingIeWords = eiWords.filter((word) => {
        const match = /(.)ei/.exec(word);
        return !match || match[1] !== 'c';
    });

    console.log('E before I when preceded by C:');
    console.log(
        `  ${matchingEiWords.length} matching vs : ${nonMatchingIeWords.length} non-matching.`,
    );
    console.log(
        `  Plausible: ${matchingEiWords.length > 2 * nonMatchingIeWords.length ? 'yes' : 'no'}`,
    );
}

console.log('------- words.txt -------');
console.log(`Total words: ${wordsTxt.length}`);
iBeforeE(wordsTxt);
eBeforeI(wordsTxt);

console.log('');
console.log('------- freq.txt -------');
console.log(`Total words: ${wordsFreq.length}`);
iBeforeE(wordsFreq);
eBeforeI(wordsFreq);
