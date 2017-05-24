# Find angle between hour and minute hand

### Given time in hh:mm format, calculate the smaller angle between the hour and minute hands in an analog clock

For example:

```js
time = '5:30'

findAngleBetweenHourAndMinuteHand(time)
```

returns

```js
15
```

```js
time = '9:00'

findAngleBetweenHourAndMinuteHand(time)
```

returns

```js
90
```

##### Solution in English

The minute hand moves 6 degrees every minute. The hour hand moves 0.5 degrees every minute.
Calculate the position of the minute hand (degrees) using `minutes * 6`.
Calculate the position of the hour hand (degrees) using `hour * 30 + minutes * 0.5`.
Find the angle between them by subtracting and getting the absolute value.
Then modulo 180 find the smaller angle.

---
Based on [this](http://www.techiedelight.com/angle-between-hour-minute-hand/)
