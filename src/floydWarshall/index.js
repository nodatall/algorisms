export default pathMatrix => {
  const distanceMatrix = initializeMatrix( pathMatrix )

  for ( let k = 0; k < distanceMatrix.length; k++ ) {
    for ( let i = 0; i < distanceMatrix.length; i++ ) {
      for ( let j = 0; j < distanceMatrix.length; j++ ) {
        distanceMatrix[i][j] = Math.min(
          distanceMatrix[i][j],
          distanceMatrix[i][k] + distanceMatrix[k][j]
        )
      }
    }
  }
  return distanceMatrix
}

function initializeMatrix( pathMatrix ) {
  const result = new Array( pathMatrix.length ).fill( 0 ).map( item => [] )
  for ( let i = 0; i < pathMatrix.length; i++ ) {
    for ( let j = 0; j < pathMatrix.length; j++ ) {
      if ( i == j) result[i][j] = 0
      else if ( pathMatrix[i][j] ) result[i][j] = pathMatrix[i][j]
      else result[i][j] = Infinity
    }
  }
  return result
}
