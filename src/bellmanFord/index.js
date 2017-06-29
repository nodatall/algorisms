export default ( graph, startNode ) => {
  const distances = new Array( graph.length ).fill( Infinity )
  distances[startNode] = 0

  for ( let from = 0; from < graph.length - 1; from++ ) {
      for ( let z = 0; z < graph[from].length; z++ ) {
        const to = graph[from][z]
        if ( (distances[from] + to.weight) < 0 ) continue
        distances[to.node - 1] = Math.min( distances[to.node - 1], distances[from] + to.weight )
      }
  }

  return distances
}
