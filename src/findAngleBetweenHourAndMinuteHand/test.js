import test from '../../testSetup.js'
import findAngleBetweenHourAndMinuteHand from './'

test('findAngleBetweenHourAndMinuteHand()', t => {
  let time = '5:30'

  t.equal(
    findAngleBetweenHourAndMinuteHand(time),
    15,
    'returns the correct result'
  )

  time = '9:00'

  t.equal(
    findAngleBetweenHourAndMinuteHand(time),
    90,
    'returns the correct result'
  )

  time = '12:00'

  t.equal(
    findAngleBetweenHourAndMinuteHand(time),
    0,
    'returns the correct result'
  )

  time = '12:01'

  t.equal(
    findAngleBetweenHourAndMinuteHand(time),
    5.5,
    'returns the correct result'
  )

  time = '11:59'

  t.equal(
    findAngleBetweenHourAndMinuteHand(time),
    5.5,
    'returns the correct result'
  )

  t.end()
})
