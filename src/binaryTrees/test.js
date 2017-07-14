import test from '../../testSetup.js'
import { preOrder, inOrder, postOrder, reconstructFromPreAndIn, reconstructFromPostAndIn } from './'

function Node(value, left, right) {
  this.right = right
  this.left = left
  this.value = value
}

const six = new Node(6)
const five = new Node(5, six, undefined)
const four = new Node(4)
const two = new Node(2, four, five)
const seven = new Node(7)
const three = new Node(3, undefined, seven)
const one = new Node(1, two, three)

test('preOrder()', t => {

  t.deepEqual(
    preOrder(one),
    [1,2,4,5,6,3,7],
    'traverses the binary tree in pre-order'
  )

  t.end()
})

test('inOrder()', t => {

  t.deepEqual(
    inOrder(one),
    [4,2,6,5,1,3,7],
    'traverses the binary tree in in-order'
  )

  t.end()
})

test('postOrder()', t => {

  t.deepEqual(
    postOrder(one),
    [4,6,5,2,7,3,1],
    'traverses the binary tree in post-order'
  )

  t.end()
})

test('reconstructFromPreAndIn()', t => {

  const pre = [1,2,4,5,6,3,7]
  const inn = [4,2,6,5,1,3,7]

  t.deepEqual(
    preOrder(reconstructFromPreAndIn(pre, inn)),
    pre,
    'constructs a tree from pre and in orders'
  )

  t.end()
})

test('reconstructFromPostAndIn()', t => {

  const poste = [4,6,5,2,7,3,1]
  const inn = [4,2,6,5,1,3,7]

  t.deepEqual(
    postOrder(reconstructFromPostAndIn(poste, inn)),
    poste,
    'constructs a tree from post and in orders'
  )

  t.end()
})

export { Node }
