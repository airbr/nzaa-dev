var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Todo = require('./todo');

var UserSchema = new mongoose.Schema({
  local : {
    email    : String,
    password : String
  },
  role  : { type: String, default: 'basic' },    // 'boardMember', 'basic'
  todos : [Todo.schema]
});

UserSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

UserSchema.methods.isValidPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);

// Starter code
// Todos linked to embedeed document under Todo. Maybe needs change
