const dfs = (node, value) => {
  if ( node.value === value ) {
    return node
  }

  if ( !node.children ) {
    return null
  }

  for ( let i = 0; i < node.children.length; i++ ) {
    const child = node.children[i]
    const result = dfs( child, value )
      if ( result ) {
        return result
      }
  }

  return null
}

export default dfs

const recursiveDFS = ( edgeList, targetNode ) => {
  const visited = []
  const nodeArea = []

  const helper = node => {
    if ( visited[node - 1] ) return
    visited[node - 1] = 1

    nodeArea.push( node - 1 )
    for ( let i = 0; i < edgeList[node - 1].length; i++ ) {
      helper( edgeList[node - 1][i] )
    }
  }

  helper( targetNode )
  return nodeArea
}

export { recursiveDFS }
