# jambit-kata
Jambit Code-Kata ABC Blocks

## Task

You are given a collection of ABC blocks. There are twenty blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. 

The sample collection of blocks:

```
(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
```

Write a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.


The rules are simple:

- Once a letter on a block is used that block cannot be used again  
- The function should be case-insensitive  
- Show the output

## Results

You'll need npm installed. After that, run:
- `npm ci` to install dependencies
- `npm t` to start test runner
