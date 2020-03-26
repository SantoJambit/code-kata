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
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
};

function toRomanRec(input: number, size: number) {
    let prefix = '';
    while(input >= size) {
        prefix += ROMAN_LETTERS[size];
        input -= size;
    }
    if (size <= 1)
        return prefix + (ROMAN_LETTERS[input] || '');
    if (input === 0)
        return prefix;

    const halfSize = size/2;
    if (input === halfSize)
        return prefix + ROMAN_LETTERS[input];

    const nextSize = size/10;
    const subtractAbove1 = (size - nextSize);
    if (input >= subtractAbove1) {
        const mid = ROMAN_LETTERS[nextSize] + ROMAN_LETTERS[size];
        if (input === subtractAbove1)
            return prefix + mid;
        return prefix + mid + toRomanRec(input - subtractAbove1, nextSize);
    }
    if (input > halfSize)
        return prefix + ROMAN_LETTERS[halfSize] + toRomanRec(input - halfSize, nextSize);

    const subtractAbove2 = (halfSize - nextSize);
    if (input >= subtractAbove2) {
        const mid = ROMAN_LETTERS[nextSize] + ROMAN_LETTERS[halfSize];
        if (input === subtractAbove2)
            return prefix + mid;
        return prefix + mid + toRomanRec(input - subtractAbove2, nextSize);
    }
    return prefix + toRomanRec(input, nextSize);
}

function toRoman(input: number) {
    if (input < 1 || input > 3000)
        fail('Value must be between 1 and 3000');

    return toRomanRec(input, 1000);
}

function fromRoman(input: string) {
    let value = 0;
    let rightCharValue = 0;
    const reversedChars = input.split('').reverse();
    for(const c of reversedChars) {
        const charValue = ROMAN_VALUES[c];
        if(!charValue)
            fail(`Invalid char: ${c}`);

        if (rightCharValue > charValue) {
            value -= charValue;
        } else {
            value += charValue;
        }
        rightCharValue = charValue;
    }

    return value;
}

const value = getArguments(1)[0];
if (value === 'all') {
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
} else if(IS_NUMERIC.test(value)) {
    console.log(`Roman value of ${value} is ${toRoman(parseInt(value, 10))}`);
} else {
    console.log(`Numeric value of ${value} is ${fromRoman(value.toUpperCase())}`);
}
