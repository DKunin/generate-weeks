'use strict';

const daysIndex = require('./constants');

let daysInMonthFromDate = function(date) {
  return 32 - new Date(date).getDate();
};

let daysInMonth = function(month, year) {
  return daysInMonthFromDate(new Date(year, month, 32));
};

let generateDays = function(month, year, original = false) {
  let daysOfCurMonth = daysInMonth(month, year),
  daysArray = [], i;

  for (i = 0; i < daysOfCurMonth; i += 1) {
    daysArray[i] = i;
  }

  return daysArray.map(function(day, i) {
    let dayName = daysIndex[(new Date(year, month, i + 1)).toString().split(' ')[0]];
    return {
      day: i + 1,
      dayIndex: dayName[1],
      currentMonth: original,
      month: month,
      year: year
    };
  });
};

export {generateDays};