# jambit-kata
Jambit Code-Kata I before E except after C

## Task

The phrase ["I before E except after C"](https://en.wikipedia.org/wiki/I_before_E_except_after_C) is a widely known mnemonic which is supposed to help when spelling English words.

Using the wordlist from: http://wiki.puzzlers.org/pub/wordlists/unixdict.txt, check if the two sub-clauses of the phrase are plausible individually:

- "I before E when not preceded by C"
- "E before I when preceded by C"

If both sub-phrases are plausible then the original phrase can be said to be plausible.

Something is plausible if the number of words having the feature is more than two times the number of words having the opposite feature (where
feature is 'ie' or 'ei' preceded or not by 'c' as appropriate).

## Results

You'll need npm installed. After that, run:
- `npm ci` to install dependencies
- `npm t` => run plausibility check
