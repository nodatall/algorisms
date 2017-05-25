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
