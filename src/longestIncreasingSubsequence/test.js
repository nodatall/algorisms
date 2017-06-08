import test from '../../testSetup.js'
import { lengthOfLongestIncreasingSubsequence, loopVersion } from './'

test('lengthOfLongestIncreasingSubsequence()', t => {
  let arr = [6,2,5,1,7,4,8,3]

  t.equal(
    lengthOfLongestIncreasingSubsequence(arr, 6),
    4,
    'returns the length of the longest increasing subsequence'
  )

  t.equal(
    lengthOfLongestIncreasingSubsequence(arr, 7),
    2,
    'returns the length of the longest increasing subsequence'
  )

  t.equal(
    lengthOfLongestIncreasingSubsequence(arr, 1),
    1,
    'returns the length of the longest increasing subsequence'
  )

  t.equal(
    lengthOfLongestIncreasingSubsequence(arr, 2),
    2,
    'returns the length of the longest increasing subsequence'
  )

  t.equal(
    lengthOfLongestIncreasingSubsequence(arr, 3),
    1,
    'returns the length of the longest increasing subsequence'
  )

  t.deepEqual(
    loopVersion(arr, 6),
    [ 1, 1, 2, 1, 3, 2, 4 ],
    'returns the length of the longest increasing subsequence'
  )

  t.deepEqual(
    loopVersion(arr, 7),
    [ 1, 1, 2, 1, 3, 2, 4, 2 ],
    'returns the length of the longest increasing subsequence'
  )

  t.end()
})
