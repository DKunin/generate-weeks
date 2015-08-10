'use strict';

var test          = require('ava');
var generateWeeks = require('./');
var deepEqual     = require('deep-equal');
var testData      = require('./testdata');
var allKeys       = [ 'day', 'dayIndex', 'currentMonth', 'month', 'year' ];

test('test generation of weeks',function (t) { 
  var temp = generateWeeks(3,2011); 
  t.assert(deepEqual(temp[0],testData[0]));
  t.assert(deepEqual(temp,testData));
  t.end();
});

test('all keys exists',function (t) { 
  var temp = generateWeeks(6,2015);
  t.assert(deepEqual(Object.keys(temp[0]),allKeys));   
  t.end();
});

test('first day is monday',function (t) { 
  var temp = generateWeeks(9,2015);
  t.assert(temp[0].dayIndex===0);   
  t.end();
});

test('should throw on invalid data',function (t) { 
  var temp = null;
  try {
    temp = generateWeeks(14,2015);
  } catch(err) {

  }
  var temp2 = generateWeeks(1,2015);
  console.log(temp2);
  
  t.assert(temp === null);   
  t.end();
});
