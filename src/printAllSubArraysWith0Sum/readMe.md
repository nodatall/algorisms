# Print all sub-arrays with 0 sum

### Given an array of integers, print all subarrays having 0 sum.

For example:

```js
arr = [4, 2, -3, -1, 0, 4]

printAllSubArraysWith0Sub(arr)
```

returns

```js
[
  [-3, -1, 0, 4],
  [0],
  [-3, -1, 4]
]
```

##### Solution in English

Find all subsets of length n - 1
->  for each subset,
go through all remaining number after index of last number in subset
-> concatenate into subsets
Check every set to see if it meets 0 sum condition
-> if so, save in result

##### Brainstorming

1,2 | 1,0 | 1,3 | 2,0 | 2,3 | 0,3

1,2,0 | 1,2,3 | 1,0,3 | 2,0,3

1,2,0,3

Combinatorics, binomial coefficient (combination formula):
nCr = n! / (n - r)! * r!

##### Time complexity

---
Based on [this](http://www.techiedelight.com/find-sub-array-with-0-sum/)
