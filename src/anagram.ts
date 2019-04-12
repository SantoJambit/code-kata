import { getArguments, isAnagram } from "./lib";

const [a, b] = getArguments(2);
const result = isAnagram(a, b);
console.log(`'${a}' is ${result ? '' : 'not'} an anagram of ${b}`);
