import { getArguments } from "./lib";
import * as fs from "fs";
import { fail } from "assert";

const IS_NUMERIC = /^[0-9]+$/;

const ROMAN_VALUES = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

const ROMAN_LETTERS = {
    0: '',
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
};

/** Returns the roman char for a numeric value */
const romanChar = (value: number) => ROMAN_LETTERS[value];
/** Returns the roman chars symbolizing the subtraction of the specified values */
const subtractRomanChar = (value: number, subtractedValue: number) => ROMAN_LETTERS[subtractedValue] + ROMAN_LETTERS[value];

/**
 * @param input the value to convert
 * @param size  the highest value we expect to find
 */
function toRomanRecursive(input: number, size: number) {
    if (input >= size)
        return romanChar(size) + toRomanRecursive(input - size, size);

    const halfSize = size/2;
    if (size <= 1 || input === halfSize)
        return romanChar(input);

    const nextSize = size/10;
    if (input > halfSize && input < (size - nextSize))
        return romanChar(halfSize) + toRomanRecursive(input - halfSize, nextSize);

    for (const sizeFrom of [size, halfSize]) {
        const subtractAbove = (sizeFrom - nextSize);
        if (input >= subtractAbove)
            return subtractRomanChar(sizeFrom, nextSize) + toRomanRecursive(input - subtractAbove, nextSize);
    }
    return toRomanRecursive(input, nextSize);
}

function toRoman(input: number) {
    if (input < 1 || input > 3000)
        fail('Value must be between 1 and 3000');

    return toRomanRecursive(input, 1000);
}

function fromRoman(input: string) {
    let value = 0;
    let rightCharValue = 0;
    // iterate string in reverse order
    const reversedChars = input.split('').reverse();
    for(const c of reversedChars) {
        const charValue = ROMAN_VALUES[c];
        if(!charValue)
            fail(`Invalid char: ${c}`);

        // subtract the value if right char > current char
        if (rightCharValue > charValue) {
            value -= charValue;
        } else {
            value += charValue;
        }
        rightCharValue = charValue;
    }

    return value;
}

// This is just the command line interpretation:
const value = getArguments(1)[0];
if (value === 'samples') {
    // try samples from txt file
    const romans = fs.readFileSync('./roman.txt', 'utf-8').trim().split('\n');
    let failed = false;
    for(let i=0; i<romans.length; i++) {
        const [num, roman] = romans[i].split(' ');
        const romanAsNum = fromRoman(roman);
        if (romanAsNum !== parseInt(num, 10)) {
            console.error(`expected ${roman} to be ${num}, was ${romanAsNum}`);
            failed = true;
        }
        const numAsRoman = toRoman(parseInt(num, 10));
        if (numAsRoman !== roman) {
            console.error(`expected ${num} to be ${roman}, was ${numAsRoman}`);
            failed = true;
        }
    }
    if (!failed) {
        console.log(`${romans.length} samples match!`);
    }
} else if (value.includes(':')) {
    // compare results of fromRoman with toRoman
    const parts = value.split(':');
    const from = parseInt(parts[0], 10);
    const to = parseInt(parts[1], 10);
    if (isNaN(from) || from < 0  || isNaN(to) || to > 3000 || from > to)
        fail('Invalid range');
    let failed = false;
    const values = [];
    for(let i=from; i<=to; i++) {
        const roman = toRoman(i);
        const romanAsNum = fromRoman(roman);
        if (romanAsNum !== i) {
            console.error(`toRoman(${i}) returned "${roman}", but fromRoman("${roman}") returned ${romanAsNum}`);
            failed = true;
        } else {
            values.push(roman);
        }
    }
    if (!failed) {
        console.log(values.join(', '));
        console.log(`All values in range ${value} match!`);
    }
} else if(IS_NUMERIC.test(value)) {
    // convert numeric to roman
    console.log(`Roman value of ${value} is ${toRoman(parseInt(value, 10))}`);
} else {
    // convert roman to numeric
    console.log(`Numeric value of ${value} is ${fromRoman(value.toUpperCase())}`);
}
