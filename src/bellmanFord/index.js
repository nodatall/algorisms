export default ( graph, startNode ) => {
  const distances = new Array( graph.length ).fill( Infinity )
  distances[startNode] = 0

  for ( let i = 0; i < graph.length - 1; i++ ) {
    for ( let a = 0; a < graph.length; a++ ) {
      for ( let z = 0; z < graph[a].length; z++ ) {
        const curr = graph[a][z]
        if ( (distances[a] + curr.weight) < 0 ) continue
        distances[curr.node - 1] = Math.min( distances[curr.node - 1], distances[a] + curr.weight )
      }
    }
  }

  return distances
}
