import { getArguments, getAnagramSetsFromWordlist } from "./lib";

const [filename] = getArguments(1);

const start = Date.now();
const anagramSets = getAnagramSetsFromWordlist(filename);
const duration = Date.now() - start;
console.log(`It took ${duration}ms to read '${filename}' and aggregate its ${anagramSets.length} sets of anagrams`);
console.log('The 4 most often occuring anagrams are:');
const mostOccuring = anagramSets.sort((a, b) => b.length - a.length).slice(0, 4);
mostOccuring.forEach((list) => {
    console.log('- ' + list.join(', '));
});
