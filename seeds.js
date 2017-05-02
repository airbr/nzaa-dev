var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// var User = require('./models/user');
var Minutes = require('./models/minutes');

mongoose.connect('mongodb://localhost/nzaa');

// Script will not exit until disconnected from the db.
function quit() {
  mongoose.disconnect();
  console.log('\nQuitting!');
}
// a simple error handler
function handleError(err) {
  console.log('ERROR:', err);
  quit();
  return err;
}

quit();

