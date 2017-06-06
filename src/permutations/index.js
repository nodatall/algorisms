const permutations = arr => {
  const results = []
  const permutation = []
  const included = []

  const generator = () => {
    if ( permutation.length === arr.length ) {
      results.push( Array.from( permutation ) )
    } else {
      for ( let i = 1; i <= arr.length; i++ ) {
        if ( included[i] ) continue
        included[i] = 1
        permutation.push( i )
        generator()
        included[i] = 0
        permutation.pop()
      }
    }
  }

  generator()
  return results

}

export default permutations
