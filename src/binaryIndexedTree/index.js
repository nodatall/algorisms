Object.defineProperty( Array.prototype, 'last', {
  get: function() { return this[this.length - 1] }
})

const genPrefixSumArray = arr => arr.reduce( ( acc, number ) => {
  if ( !acc.length ) {
    acc.push( number )
  } else {
    acc.push( number + acc.last )
  }
  return acc
}, [])

const findSumInRange = ( prefixArr, start, end ) => {
  if ( start === 0 ) {
    return prefixArr[end]
  }
  return prefixArr[end] - prefixArr[start - 1]
}

export default arr => {
  const prefixSumArray = genPrefixSumArray( arr )
  return arr.map( ( number, index ) => {
    let largestPowerOf2ThatDividesNumber
    if ( Math.log2( index + 1 ) % 1 === 0 ) {
      largestPowerOf2ThatDividesNumber = index + 1
    } else {
      let counter = 2
      while ( ( index + 1 ) % counter === 0 ) counter *= 2
      largestPowerOf2ThatDividesNumber = counter / 2
    }
    return findSumInRange( prefixSumArray, index - largestPowerOf2ThatDividesNumber + 1, index )
  })
}
