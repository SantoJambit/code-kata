# jambit-kata
Jambit Code-Kata Wabbit-Hunt

## Description

<a href="https://www.flickr.com/photos/mark_gilmour/5480561182" title="Bugs Bunny and Elmer Fudd by Mark Gilmour"><img alt="Bugs Bunny and Elmer Fudd by Mark Gilmour" src="https://live.staticflickr.com/5300/5480561182_e44bba51de_c.jpg" align="right" width="400" /></a>
A good hunter kills two wabbits with one shot. Of course, it can be easily done since for any two points we can always draw a line containing the both. But killing three or more wabbits in one shot is much more difficult task. To be the best hunter in the world one should be able to kill the maximal possible number of wabbits. Assume that wabbit is a point on the plane with integer x and y coordinates. Having a set of wabbits you are to find the largest number of wabbits that can be killed with single shot, i.e. maximum number of points lying exactly on the same line. No two wabbits sit at one point.

### Input

An input contains an integer N (3 ≤ N ≤ 200) specifying the number of wabbits. Each of the next N lines in the input contains the x coordinate and the y coordinate (in this order) separated by a space (−2000 ≤ x, y ≤ 2000).

### Output

The output contains the maximal number of wabbits situated in one line.

## Examples

### Example 1

```
7
11 190
8 139
12 190
7 122
11 173
0 3
10 156
```

<details><summary>Show/Hide Result</summary>

```
5 // straight line and a stray bunny
```
</details>


### Example 2

```
7
11 190
8 139
12 190
7 122
11 173
0 3
10 156
```

<details><summary>Show/Hide Result</summary>

```
4 // two parallel lines, but one is longer
```
</details>


### Example 3


```
7
0 10
10 173
11 190
0 200
-100 1
0 100
0 400
```

<details><summary>Show/Hide Result</summary>

```
4 // a vertical line is a special case depending on your algorithm
```
</details>


### Example 4

```
8
7 122
8 139
8 173
9 156
10 173
10 139
11 122
12 105
```

<details><summary>Show/Hide Result</summary>

```
5 // one point is shared by a crossing line in opposite direction
```
</details>