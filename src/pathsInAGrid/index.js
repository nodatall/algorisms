const largestSum = ( arr, y, x ) => {
  const currentNumber = arr[y][x]

  if ( x === 0 && y === 0 ) return currentNumber
  if ( y === 0 ) {
    return largestSum( arr, 0, x - 1) + currentNumber
  } else if ( x === 0 ) {
    return largestSum( arr, y - 1, 0 ) + currentNumber
  }
  return Math.max( largestSum( arr, y, x - 1), largestSum( arr, y - 1, x) ) + currentNumber
}

export default largestSum
