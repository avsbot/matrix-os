console.log('-= AdM app=-');
console.error('error test');

log = require('captains-log')();
_ = require('lodash');

var events = require('events');

// Core
Matrix = require('./lib/');
//Event Loop
Matrix.events = new events.EventEmitter();

// Example
/*
Matrix.events.on('poop', function(data){
  log('iPooped!',data);
});

Matrix.events.emit('poop', { stinky: true });
*/

log(Matrix);