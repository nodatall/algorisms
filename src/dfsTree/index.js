export default tree => {
  const path = []

  const dfs = (base, prev) => {
    path.push(base)
    tree[base].forEach(child => {
      if (child !== prev) {
        dfs(child, base)
      }
    })
  }

  dfs(0)

  return path
}

const numNodesInSubTrees = tree => {
  const nodesCount = []

  const dfs = (base, prev) => {
    nodesCount[base] = 1
    tree[base].forEach(child => {
      if (child !== prev) {
        dfs(child, base)
        nodesCount[base] += nodesCount[child]
      }
    })
  }

  dfs(0)

  return nodesCount
}

export { numNodesInSubTrees }
