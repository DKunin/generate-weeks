# Weeks array generator [![Build Status](https://travis-ci.org/DKunin/generate-weeks.svg?branch=master)](https://travis-ci.org/DKunin/generate-weeks)

> Generate weeks, passing month and year. Returns array of days


## Install

```
  npm install generate-weeks -S

```


## Usage

```js
var generateWeeks = require('generate-weeks');

var weeksArray = generateWeeks(1, 2015);

[ { day: 26, dayIndex: 0, currentMonth: false, month: 0, year: 2015 },
  { day: 27, dayIndex: 1, currentMonth: false, month: 0, year: 2015 },
  { day: 28, dayIndex: 2, currentMonth: false, month: 0, year: 2015 },
  { day: 29, dayIndex: 3, currentMonth: false, month: 0, year: 2015 },
  { day: 30, dayIndex: 4, currentMonth: false, month: 0, year: 2015 },
  { day: 31, dayIndex: 5, currentMonth: false, month: 0, year: 2015 },
  { day: 1, dayIndex: 6, currentMonth: true, month: 1, year: 2015 },
  { day: 2, dayIndex: 0, currentMonth: true, month: 1, year: 2015 },
  ... etc you get the idea.

```

## License

MIT © [Dmitri Kunin](http://dkun.in)

