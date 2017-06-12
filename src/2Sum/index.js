const merge = ( arr1, arr2 ) => {
  const mergedArr = []

  while ( arr1.length || arr2.length ) {
    if ( arr1[0] < arr2[0] || arr2[0] === undefined ) {
      mergedArr.push( arr1.shift() )
    } else {
      mergedArr.push( arr2.shift() )
    }
  }

  return mergedArr
}

const mergeSort = arr => {
  if ( arr.length === 1 ) return arr

  const pivot = Math.floor( arr.length / 2 )

  return merge(
    mergeSort( arr.slice( 0, pivot ) ),
    mergeSort( arr.slice( pivot ) )
  )
}

export default ( arr, targetSum ) => {
  arr = mergeSort( arr )

  let left = 0,
    right = arr.length - 1

  while ( arr[left] + arr[right] !== targetSum ) {
    if ( left > right ) {
      return 'Not found'
    }
    if ( arr[left] + arr[right] < targetSum ) {
      left += 1
    } else {
      right -= 1
    }
  }

  return [ arr[left], arr[right] ]
}

const binarySearch = ( arr, targetNum, start = 0, end = arr.length ) => {
  const pivot = Math.floor( ( start + end ) / 2 )

  if ( targetNum > arr[arr.length - 1] ) {
    return null
  }

  if ( arr[end] === targetNum ) {
    return end
  } else if ( arr[start] === targetNum ) {
    return start
  } else if ( end - start === 1 ) {
    return null
  }

  if ( arr[pivot] > targetNum ) {
    return binarySearch( arr, targetNum, start, pivot )
  } else {
    return binarySearch( arr, targetNum, pivot, end )
  }
}

const binary2Sum = ( arr, targetSum ) => {
  arr = mergeSort( arr )
  for ( let i = 0; i < arr.length; i++ ) {
    const current = arr[i]
    const desired = targetSum - arr[i]
    const search = binarySearch( arr, desired )
    if ( search ) {
      return [current, desired]
    }
  }
}

export { binary2Sum }
