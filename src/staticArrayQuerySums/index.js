const generatePrefixSums = arr => {
  const prefixSums = [arr[0]]
  for ( let i = 1; i < arr.length; i++ ) {
    prefixSums.push( prefixSums[prefixSums.length - 1] + arr[i] )
  }
  return prefixSums
}

const arr = [1,3,4,8,6,1,4,2]
const preSums = generatePrefixSums( arr )

const sumOfRange = ( a,b ) => preSums[b - 1] - preSums[a - 2]

const gen2D = matrix => {
  const cache = Array( matrix.length ).fill(0).map( array => Array() )
  helper(cache, matrix)
  return cache
}

const helper = ( cache, matrix, x = matrix[0].length - 1, y = matrix.length - 1 ) => {
  if ( cache[y][x] ) {
    return cache[y][x]
  }
  if ( x === 0 && y === 0 ) {
    cache[y][x] = matrix[y][x]
  } else if ( y === 0 ) {
    cache[y][x] = helper( cache, matrix, x - 1, y ) + matrix[y][x]
  } else if ( x === 0 ) {
    cache[y][x] = helper( cache, matrix, x, y - 1 ) + matrix[y][x]
  } else {
    cache[y][x] = matrix[y][x] +
      helper( cache, matrix, x - 1, y ) +
      helper( cache, matrix, x, y - 1 ) -
      helper( cache, matrix, x - 1, y - 1 )
  }

  return cache[y][x]
}

const gen2Dloop = matrix => {
  const result = new Array(matrix.length).fill(null).map(_ => new Array())

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (y === 0 && x === 0) result[y][x] = matrix[y][x]
      else if (y === 0) result[y][x] = matrix[y][x] + result[y][x - 1]
      else if (x === 0) result[y][x] = matrix[y][x] + result[y - 1][x]
      else result[y][x] = matrix[y][x]
        + result[y][x - 1]
        + result[y - 1][x]
        - result[y - 1][x - 1]
    }
  }

  return result
}

const genMinRanges = arr => {
  const results = new Array(arr.length).fill(null).map( _ => new Array() )
  for ( let range = 1; range <= arr.length; range *= 2 ) {
    for ( let z = 0; z + range - 1 < arr.length; z++ ) {
      if ( range === 1 ) results[z][z] = arr[z]
      else {
        results[z][z + range - 1] = Math.min(
          results[z][z + range / 2 - 1],
          results[z + range / 2][z + range - 1]
        )
      }
    }
  }
  return results
}

const getMinimumOfRange = ( start, end ) => {
  const subRange = 2 ** Math.floor( Math.log2( end - start + 1 ) )
  const cache = genMinRanges( arr )
  return Math.min(
    cache[start][start + subRange - 1],
    cache[end - subRange + 1][end]
  )
}

export { sumOfRange, gen2D, gen2Dloop, genMinRanges, getMinimumOfRange }
