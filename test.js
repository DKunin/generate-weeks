'use strict';

const test = require('ava');
const generateWeeks = require('./');
const deepEqual = require('deep-equal');
const testData = require('./testdata');
const allKeys = ['day', 'dayIndex', 'currentMonth', 'month', 'year'];

function testFebruary({ month, currentMonth }) {
    return (month === 2 && !currentMonth) || (month !== 2 && currentMonth);
}

test('test generation of weeks', function(t) {
    const temp = generateWeeks(3, 2011);
    t.assert(deepEqual(temp[0], testData[0]));
    t.assert(deepEqual(temp, testData));
    t.end();
});

test('all keys exists', function(t) {
    const temp = generateWeeks(6, 2015);
    t.assert(deepEqual(Object.keys(temp[0]), allKeys));
    t.end();
});

test('first day is monday', function(t) {
    const temp = generateWeeks(9, 2015);
    t.assert(temp[0].dayIndex === 0);
    t.end();
});

test('should throw on invalid data', function(t) {
    let temp = null;
    try {
        temp = generateWeeks(14, 2015);
    } catch (err) {}
    const temp2 = generateWeeks(1, 2015);
    t.assert(temp === null);
    t.end();
});

test('check februaries', function(t) {
    let temp = null;
    let errorsInFebruary2017 = generateWeeks(2, 2017).filter(testFebruary);
    let errorsInFebruary2004 = generateWeeks(2, 2004).filter(testFebruary);

    t.assert(errorsInFebruary2017.length === 0);
    t.assert(errorsInFebruary2004.length === 0);
});
