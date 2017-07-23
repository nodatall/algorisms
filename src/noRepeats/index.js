export default str => {
  const permutations = []

  _heap(str.split(''), permArr.length, permutations)

  return permutations.filter( str => !str.match(/(.)\1+/g) ).length
}

function _heap(arr, position, permutations) {
  if ( position === 1 ) {
    permutations.push(arr.join(''))
  } else {
    for ( let i = 0; i !== position; i++ ) {
      _heap(arr, position - 1, permutations)
      _swap(arr, position % 2 ? 0 : i, position - 1)
    }
  }
}

function _swap(arr, pos1, pos2) {
  const temp = arr[pos1]
  arr[pos1] = arr[pos2]
  arr[pos2] = temp
}
