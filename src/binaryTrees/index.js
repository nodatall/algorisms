import { Node } from './test'

export function preOrder(node, path=[]) {
  path.push(node.value)
  if (node.left) preOrder(node.left, path)
  if (node.right) preOrder(node.right, path)

  return path
}

export function inOrder(node, path=[]) {
  if (node.left) inOrder(node.left, path)
  path.push(node.value)
  if (node.right) inOrder(node.right, path)

  return path
}

export function postOrder(node, path=[]) {
  if (node.left) postOrder(node.left, path)
  if (node.right) postOrder(node.right, path)
  path.push(node.value)

  return path
}

export function reconstructFromPreAndIn(preOrder, inOrder) {
  if (preOrder.length === 0) return undefined
  if (preOrder.length === 1) return new Node(preOrder[0])

  const rute = preOrder[0],
    ruteIndex = inOrder.indexOf(rute),
    leftIn = inOrder.slice(0, ruteIndex),
    rightIn = inOrder.slice(ruteIndex + 1),
    leftPre = preOrder.filter(value => leftIn.includes(value)),
    rightPre = preOrder.filter(value => rightIn.includes(value))

  return new Node(
    rute,
    reconstructFromPreAndIn(leftPre, leftIn),
    reconstructFromPreAndIn(rightPre, rightIn)
  )
}

export function reconstructFromPostAndIn(postOrder, inOrder) {
  return reconstructFromPreAndIn([...postOrder].reverse(), inOrder)
}
