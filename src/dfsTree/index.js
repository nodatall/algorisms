export default tree => {
  const path = []

  const dfs = (base, prev) => {
    path.push(base)
    tree[base].forEach(node => {
      if (node !== prev) {
        dfs(node, base)
      }
    })
  }

  dfs(0)

  return path
}
