'use strict';

let daysInMonthFromDate = function(date) {
  return 32 - new Date(date).getDate();
};

let daysInMonth = function(month, year) {
  return daysInMonthFromDate(new Date(year, month, 32));
};

let getDayIndex = function(month, year, index){
  return (new Date(year, month, index)).getDay();
};

let generateDays = function(month, year, original = false) {
  let daysOfCurMonth = daysInMonth(month, year);
  let daysArray      = [];
  let index          = 0;

  while(index < daysOfCurMonth) {
    daysArray.push(index);
    index = index += 1;
  }

  return daysArray.map(function(day, i) {
    return {
      day: day + 1,
      dayIndex: getDayIndex(month, year, i),
      currentMonth: original,
      month: month,
      year: year
    };
  });
};

export {generateDays};