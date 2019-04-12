import { getArguments, isPalindrome } from "./lib";

const word = getArguments(1)[0];
const result = isPalindrome(word);
console.log(`'${word}' is ${result ? 'a' : 'no'} palindrome`);
