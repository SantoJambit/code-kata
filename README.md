# jambit-kata
Jambit Code-Kata Word-Puzzle

## Task

Given two words of equal length, write a program that can build a chain of words connecting the first to the second. Each word in the chain must be in this word list and every step along the chain changes only one letter from the previous word. For example, given the start word "cat" and the end word "dog", a valid chain would be:

```
"cat", "cot", "cog", "dog"
```
Another example "duck" to "ruby" would have a valid word chain:
```
"duck", "ruck", "rusk", "ruse", "rube", "ruby"
```

If you get your code working, try timing it. Does it take less than a second for the above examples? And is the timing the same forwards and backwards? Does your code find the shortest possible valid word chain?

The dictionary can be found here: https://nwrug.org/words.txt

## Results

You'll need npm installed. After that, run:
- `npm ci` to install dependencies
- `npm run wordchain <start-word> <end-word>`

## Example output:

```
> npm run wordchain duck ruby

Reading wordlist
 -> 14ms to complete task

Creating from and to leafs
 -> 1ms to complete task

Gathering paths for a maximum of 1 steps
 -> 6ms to complete task

Gathering paths for a maximum of 2 steps
 -> 37ms to complete task

Gathering paths for a maximum of 3 steps
 -> 143ms to complete task

Gathering paths for a maximum of 4 steps
 -> 331ms to complete task

Gathering paths for a maximum of 5 steps
 -> 1038ms to complete task

Shortest path(s):
 - duck -> dunk -> dun -> dub -> rub -> ruby
 - duck -> dunk -> dun -> run -> rub -> ruby
 - duck -> dunk -> dune -> rune -> rube -> ruby
 - duck -> dusk -> rusk -> ruse -> rube -> ruby
 - duck -> ruck -> rusk -> ruse -> rube -> ruby

 Done => 1571ms to finish
```