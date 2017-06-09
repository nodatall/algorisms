export default (arr, targetSum) => {
  let rightIndex = 0,
    leftIndex = 0,
    sum = arr[0]

  while ( sum !== 8 ) {
    if ( sum + arr[rightIndex + 1] <= 8 ) {
      sum += arr[++rightIndex]
    } else {
      sum -= arr[leftIndex++]
    }
  }

  return arr.slice( leftIndex, rightIndex + 1 )
}
