import * as fs from "fs";

export function isPalindrome(s: string) {
    s = s.toLowerCase();
    const half = Math.floor(s.length/2);
    for(let i=0, j=s.length-1; i<half; i++, j--) {
        if(s[i] !== s[j])
            return false;
    }
    return true;
}

export const normalizeForAnagram = (s: string) => s.toLowerCase().split("").sort().join("");
export const isAnagram = (a: string, b: string) => normalizeForAnagram(a) === normalizeForAnagram(b);

export function getAnagramSetsFromWordlist(filename: string) {
    const words = fs.readFileSync(filename, "utf8").split(/\r?\n/);
    const wordMap = {};
    const possibleAnagrams = [];
    for(const word of words) {
        const normalized = normalizeForAnagram(word);
        let list = wordMap[normalized];
        if(!list) {
            list = wordMap[normalized] = [];
            possibleAnagrams.push(list);
        }
        list.push(word);
    }
    return possibleAnagrams.filter((list) => list.length > 1);
}

export function getArguments(count: number) {
    const args = process.argv.slice(2);
    if(args.length !== count) {
        console.error(`expecting exactly ${count} argument(s), got: ${JSON.stringify(args)}`);
        process.exit(-1);
    }
    return args;
}