export default tree => {
  let maxPath = []

  tree.forEach((friends, current) => {
    if (friends.length > 1) {
      const paths = []

      friends.forEach(friend => {
        paths.push(_dfsLongestPath(friend, current, tree))
      })

      const tempMaxPath = _extractLongestPath(paths, current)

      if (tempMaxPath.length > maxPath.length) maxPath = tempMaxPath
    }
  })

  return maxPath.length - 1
}

function _extractLongestPath (paths, node) {
  paths.sort((path1, path2) => path2.length - path1.length)

  return paths[0].concat(node).concat(paths[1].reverse())
}

function _dfsLongestPath (node, prev, tree) {
  if (tree[node].length === 1) return [node]

  let longestPath = []
  tree[node].forEach(friend => {
    if (friend !== prev) {
      const tempPath = _dfsLongestPath(friend, node, tree)
      if (tempPath.length > longestPath.length)
        longestPath = tempPath
    }
  })

  return longestPath.concat(node)
}
