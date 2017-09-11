'use strict';

//Входящий файл для полноценного использования es2015 фуникций, по факту просто прокся.
require('babel/register');

var generateWeeks = require('./main');

module.exports = generateWeeks;
