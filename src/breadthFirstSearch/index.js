export default ( graph, startNode ) => {
  const queue = [],
    visited = [],
    distances = []

  visited[startNode] = 1
  distances[startNode] = 0

  queue.push( startNode )
  while ( queue.length ) {
    const currNode = queue.shift()

    for ( let i = 0; i < graph[currNode].length; i++ ) {
      const currGraphNode = graph[currNode][i] - 1
      if ( visited[currGraphNode] ) continue
      visited[currGraphNode] = 1
      distances[currGraphNode] = distances[currNode] + 1
      queue.push( currGraphNode )
    }
  }

  return distances
}
