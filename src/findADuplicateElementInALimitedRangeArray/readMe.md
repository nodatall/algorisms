# Find a duplicate element in a limited range array

### Given a limited range array of size n where array contains elements between 1 to n - 1 with one element repeating, find the duplicate number in it.

For example:

```js
arr = [1, 2, 3, 4, 4]

findADuplicateElementInALimitedRangeArray(arr)
```

returns

```js
4
```

##### Solution in English

Iterate through array adding each number as a key to an object (hash). Check if key is in object already, if so return current number otherwise continue.

##### Time complexity
O(n)

---
Based on [this](http://www.techiedelight.com/find-duplicate-element-limited-range-array/)
