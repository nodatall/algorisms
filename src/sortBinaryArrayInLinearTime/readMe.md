# Sort binary array in linear time

### Given a binary array, sort it in linear time and constant space. Output should contain all zeros followed by all ones.

For example:

```js
arr = [1, 0, 1, 0, 1, 0, 0, 1]

sortBinaryArrayInLinearTime(arr, sum)
```

returns

```js
[0, 0, 0, 0, 1, 1, 1, 1]
```

##### Solution in English

Iterate through array, adding 0's to the front of a result array and 1's to the end of a result array.

##### Time complexity
O(n)

##### Space complexity
O(1)

---
Based on [this](http://www.techiedelight.com/sort-binary-array-linear-time/)
