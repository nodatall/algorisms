import test from '../../testSetup.js'
import editDistance from './'

test('editDistance()', t => {
  let str1 = 'love',
    str2 = 'movie'

  t.equal(
    editDistance(str1, str2, 4, 5),
    2,
    'returns the amount of edits ( insert, delete, replace ) to change one string to another'
  )

  t.end()
})
