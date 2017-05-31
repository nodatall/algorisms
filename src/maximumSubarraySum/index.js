// Solution 1
/*
export default arr => {
  let result = 0
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = i; j < arr.length; j++ ) {
      let temp = 0
      for ( let k = i; k <= j; k++ ) {
        temp = temp + arr[k]
      }
      result = Math.max(result, temp)
    }
  }
  return result
}
*/

//Solution 2
/*
export default arr => {
  let result = 0
  for ( let i = 0; i < arr.length; i++ ) {
    let temp = 0
    for ( let j = i; j < arr.length; j++ ) {
      temp += arr[j]
      result = Math.max(result, temp)
    }
  }
  return result
}
*/

//Solution 3 Kadane's Algorithm
export default arr => {
  let currentMax = 0, maxSoFar = 0
  for ( let i = 0; i < arr.length; i++ ) {
    maxSoFar = Math.max( arr[i], maxSoFar + arr[i] )
    currentMax = Math.max( maxSoFar, currentMax )
  }
  return currentMax
}
