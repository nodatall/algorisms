export default ( graph, startNodeIndex ) => {
  const queue = [],
    inQueue = [],
    distances = new Array( graph.length ).fill( Infinity )

  distances[startNodeIndex] = 0
  queue.push( { weight: 0, node: startNodeIndex + 1 } )

  while ( queue.length ) {
    const curr = queue.shift()
    inQueue[curr.node - 1] = 0

    for ( let i = 0; i < graph[curr.node - 1].length; i++ ) {
      const subCurr = graph[curr.node - 1][i]
      if ( ( distances[curr.node - 1] + subCurr.weight ) < distances[subCurr.node - 1] ) {
        if ( distances[curr.node - 1] + subCurr.weight < 0 ) continue
        distances[subCurr.node - 1] = distances[curr.node - 1] + subCurr.weight
        if ( !inQueue[subCurr.node - 1] ) {
          queue.push( subCurr )
          inQueue[subCurr.node - 1] = 1
        }
      }
    }
  }

  return distances
}
