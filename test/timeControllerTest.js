'use stricts';

var path = process.cwd();
var Controller = require(path + '/app/controller/timeController.js');
var timeController = new Controller();
var assert = require('assert')

// passing unix time and expect Jan 1 2016
assert.deepEqual(
{"unix":1451606400,"natural":"January 1, 2016"},timeController.process('1451606400'));

// passing normal date time
assert.deepEqual(
{"unix":1451606400,"natural":"January 1, 2016"},timeController.process('January 1, 2016'));

// error if not a date
assert.deepEqual(
{ unix: 'null', natural: 'null' },timeController.process('NOT_A_DATE'));
