# Print Matrix in Spiral Order

### Given an M by N matrix, print the elements in spiral order.

For example:

```js
matrix = [
  [  1,  2,  3,  4, 5 ],
  [ 16, 17, 18, 19, 6 ],
  [ 15, 24, 25, 20, 7 ],
  [ 14, 23, 22, 21, 8 ],
  [ 13, 12, 11, 10, 9 ]
]

printMatrixInSpiralOrder(matrix)
```

returns

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
```

##### Solution in English
Output outer layer in clockwise order starting from the top left.
Remove outer layer.
Call above pattern on new matrix.
Repeat.
When the height or width is 1, output matrix and end. (base case)

##### Time complexity

---
Based on [this](http://www.techiedelight.com/print-matrix-spiral-order/)
