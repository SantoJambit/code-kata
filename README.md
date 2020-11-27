# jambit-kata
Jambit Code-Kata Jewels and Stones and Happy Numbers

## Description Jeweles and Stones
Create a function which takes two string parameters: 'stones' and 'jewels' and returns an integer.

Both strings can contain any number of upper or lower case letters. However, in the case of 'jewels', all letters must be distinct.

The function should count (and return) how many 'stones' are 'jewels' or, in other words, how many letters in 'stones' are also letters in 'jewels'.


Note that:
- Only letters in the ISO basic Latin alphabet i.e. 'A to Z' or 'a to z' need be considered.A lower case letter is considered to be different to its upper case equivalent for this purpose i.e. 'a' != 'A'.The parameters do not need to have exactly the same names.Validating the arguments is unnecessary.

## Examples
### Example 1
Input:
```
stones := "aAAbbbb"
jewels := "aA"
```
Result:
```
3
```
### Example 2
Input:
```
stones := "ZZ"
jewels := "z"
```
Result:
```
0
```

## Happy Numbers
A happy number is defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 


Those numbers for which this process end in 1 are happy numbers, 
while those numbers that do not end in 1 are unhappy numbers. 


### Task

Find and print the first 8 happy numbers.

Display an example of your output here on this page. 

First 8 happy numbers for validation:
```
[1, 7, 10, 13, 19, 23, 28, 31]
```


### Performance Comparison

I've written a simple benchmark to compare different approaches. The result is quite interesting:

- Recursive:
  - Using a Set to remember which numbers have already been checked: `2311ms`
  - Using a list to remember which numbers have already been checked: `1632ms`
- Iterative using a list to remember which numbers have already been checked: `1548ms`

It seems, that in javascript, the list beats the set. Probably, because most numbers don't have that many entries in the set to look up.
