// Solution 1
/*
export default ( arr, num ) => {
  let start = 0, end = arr.length

  while ( start < end ) {
    const pivot = Math.ceil( ( start + end ) / 2 )
    if ( arr[pivot] === num ) return pivot
    if ( arr[pivot] > num ) end = pivot - 1
    else start = pivot + 1
  }
}
*/

// Solution 2
export default ( arr, num ) => {
  let searchIndex = 0

  for ( let i = Math.ceil(arr.length / 2); i >= 1; i /= 2 ) {
    while ( searchIndex + i < arr.length && arr[searchIndex + i] <= num ) {
      searchIndex += i
    }
    if ( arr[searchIndex] === num ) return searchIndex
  }
}
