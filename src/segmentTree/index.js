const genSegTree = (arr, callback) => {
  const levels = new Array(Math.log2(arr.length) + 1).fill(0).map(_ => [])
  levels[0] = arr

  for (let level = 0; level < Math.log2(arr.length); level++) {
    for (let i = 0; i < levels[level].length; i += 2) {
      levels[level + 1].push(callback(levels[level][i], levels[level][i + 1]))
    }
  }

  return levels.reduceRight((acc, cur) => acc.concat(cur), [])
}

const genSumSegTree = arr => genSegTree(arr, (a, b) => a + b)
const genMaxSegTree = arr => genSegTree(arr, Math.max)
const genMinSegTree = arr => genSegTree(arr, Math.min)

const updateSegTree = (segTree, index, increaser) => {
  index += (segTree.length + 1) / 2
  segTree[index - 1] += increaser
  for (index = Math.floor(index / 2); index >= 1; index = Math.floor(index / 2)) {
    segTree[index - 1] += increaser
  }

  return segTree
}

const sumRangeSegTree = (segTree, start, end) => {
  const origLength = (segTree.length + 1) / 2

  start += origLength - 1
  end += origLength - 1

  let sum = 0

  while (start <= end) {
    if (start % 2 === 1) sum += segTree[start++ - 1]
    if (end % 2 === 0) sum += segTree[end-- - 1]
    start = Math.floor(start / 2)
    end = Math.floor(end / 2)
  }

  return sum
}

export { genSumSegTree, genMaxSegTree, genMinSegTree, updateSegTree, sumRangeSegTree }
