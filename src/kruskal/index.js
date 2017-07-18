import { UnionFindStructure } from '../unionFindStructure'

export default tree => {
  const minSpannTree = Array(tree.length).fill(1).map( elem => [] )
  const visited = []
  let edgesWeights = []
  tree.forEach( (edges, index) => {
    edges.forEach( (edge) => {
      if ( !visited[edge.node] ) {
        edgesWeights.push({ start: index, end: edge.node, weight: edge.weight })
      }
    })
    visited[index] = 1
  })
  edgesWeights = edgesWeights.sort( ( a, b ) => a.weight > b.weight )

  const edgeComponents = new UnionFindStructure(
    Array( tree.length - 1 ).fill(1).map( ( value, index ) => index + 1 )
  )

  edgesWeights.forEach( ({ start, end, weight }) => {
    if ( !edgeComponents.same( start, end ) ) {
      edgeComponents.unite( start, end )
      minSpannTree[start].push({ node: end, weight })
      minSpannTree[end].push({ node: start, weight })
    }
  })

  return minSpannTree
}
