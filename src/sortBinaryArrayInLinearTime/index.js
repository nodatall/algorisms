// solution 1
// time complexity: O(n) linear (assuming unshift takes the same time as push, which it doesn't)
// space complexity: O(n) linear
/*
export default arr => arr.reduce((acc, num) => {
  if (num) acc.push(num)
  else acc.unshift(num)

  return acc
}, [])
*/

// solution 2
// time complexity: O(n) linear
// space complexity: O(1) constant
export default arr => {
  const counts = arr.reduce((acc, num) => {
    if (num) acc.numOf1++
    else acc.numOf0++

    return acc
  }, {numOf0: 0, numOf1: 0})

  for (let i = 0; i < arr.length; i++) {
    arr[i] = i < counts.numOf0 ? 0 : 1
  }

  return arr
}
