# Find pairs with a given sum in the array

### Given an unsorted array of integers, find  indices of pairs whose sum is a given number.

For example:

```js
arr = [8, 7, 2, 5, 3, 1]
sum = 10

findPairWithGivenSumInTheArray(arr, sum)
```

returns

```js
[[0, 2], [1, 4]]
```

##### Solution in English

Look at each number. Before moving on to the next number, look at each following number. Before moving on to the next following number, check if the sum of the number and the following number is the given sum. If it is, store the indices of the number and the other number in a result.

##### Time complexity
O(n<sup>2</sup>)

---
Based on [this](http://www.techiedelight.com/find-pair-with-given-sum-array/)
