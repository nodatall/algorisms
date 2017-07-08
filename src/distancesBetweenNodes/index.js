export default tree => {
  const result = Array(tree.length).fill(0).map(_ => [])

  tree[0].forEach((_, index) => _getMaxDistance(tree, result, index, 0))
  _getDistancesThroughParents(tree, result)
  return result
}

function _getMaxDistance(tree, result, curIndex, prev) {
  const cur = tree[prev][curIndex]

  if (tree[cur].length === 1 && cur !== prev)
    result[prev][curIndex] = 1
  else {
    tree[cur].forEach((friend, index) => {
      if (prev !== friend) _getMaxDistance(tree, result, index, cur)
    })
    result[prev][curIndex] = Math.max(...result[cur].filter(distance => distance !== undefined)) + 1
  }
}

function _getDistancesThroughParents(tree, result) {
  const queue = [...tree[0]], visited = [1]
  let parent

  while (queue.length) {
    const cur = queue.shift()
    visited[cur] = 1
    tree[cur].forEach(node => {
      if (!visited[node]) queue.push(node)
      else parent = node
    })

    const parentIndex = tree[cur].indexOf(parent)
    const curIndexInParent = tree[parent].indexOf(cur)
    result[cur][parentIndex] = Math.max(...result[parent].filter((_, index) =>
      index !== curIndexInParent
    )) + 1
  }
}
