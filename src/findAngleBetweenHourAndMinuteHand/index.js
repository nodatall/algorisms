export default time => {
  const hour = Number(time.split(':')[0])
  const minute = Number(time.split(':')[1])

  const minuteAngle = minute * 6
  const hourAngle = hour * 30 + minute * 0.5

  const difference = Math.abs(hourAngle - minuteAngle)

  return difference <= 180 ? difference : 360 - difference
}
