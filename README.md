# jambit-kata
Jambit Code-Kata Water Towers

## Description

In a two dimensional world, there is a place where some towers were build. When it rains for a long time, all convex enclosures are completely filled with water.


### Task

Write a method/function to calculate the amount of collected water (in Units), which is collected between the towers.

### Output

If you have enough time, create a visualization :)

- in text mode
- in graphic mode with animated water ;) (in 3D (big grin) with hardware acceleration [OpenGL/Vulkan/DirectX])

## Examples

### Example 1

Input
```
[5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
```

```
9               ██
8               ██
7     ██≈≈≈≈≈≈≈≈██
6     ██≈≈██≈≈≈≈██
5 ██≈≈██≈≈██≈≈████
4 ██≈≈██≈≈████████
3 ██████≈≈████████
2 ████████████████≈≈██
1 ████████████████████
```


### Example Data

input levels
```json
[
    [1, 5, 3, 7, 2],
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2],
    [2, 6, 3, 5, 2, 8, 1, 4, 2, 2, 5, 3, 5, 7, 4, 1],
    [5, 5, 5, 5],
    [5, 6, 7, 8],
    [8, 7, 7, 6],
    [6, 7, 10, 7, 6],
]
```

<details><summary>Show/Hide Result</summary>

```
[
    2,
    14,
    35,
    0,
    0,
    0,
    0,
];

```
</details>

