var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var User = require('./models/user');
var Minutes = require('./models/minutes');

mongoose.connect('mongodb://localhost/espm');

// our script will not exit until we have disconnected from the db.
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

console.log('removing old minutes...');
Minutes.remove({})
// .then(function() {
//   var admin = new User( {} );
//   admin.local = {
//     email : 'admin@admin.com',
//     password : admin.encrypt('admin')
//   };
//   admin.role = 'boardMember';
//   return User.create(admin);
// });
quit();








// .then(function() {
//   console.log('old minutes removed');
//   console.log('removing old users...');
//   return User.remove({})
// })
// .then(function() {
//   var joe = new User( {} );
//   joe.local = {
//     email : 'joe@hacker.com',
//     password : joe.encrypt('test1234')
//   };
//   joe.role = 'boardMember';
//   return User.create(joe);
// })
// .then(function(joe) {
//   console.log('Created user:', joe);
//   console.log('creating some new minutes...');
  // ß
  // dateOf:         { type: Date,  required: true },
  // type:           { type: String, required: true },
  // approved:     { type: Boolean, required: true },
  // headline:     { type: String, required: true}


//   var minutes     = new Minutes({ dateOf: Date.now(),
//                                   type: 'Regular Meeting',
//                                   approved: true,
//                                   headline: 'Best Meeting Ever',
//                                   author: ' Author '
//                                 });
//   return Minutes.create(minutes);
// })
// .then(function(savedMinutes) {
//   console.log('Just saved', savedMinutes);
//   return Minutes.find({});
// })
// .then(function(allMinutes) {
//   console.log('Printing all minutes:');
//   allMinutes.forEach(function(minutes) {
//     console.log(minutes);
//   });
//   quit();
// });


// currentUser.objectID
 // var Meeting = {
 //    dateOf: 2016-08-22,
 //    type: 'Board Meeting',
 //    approved: false,
 //    headline: 'This is the headline of the minutes'
 //  };


// var mongoose = require('mongoose');
// var Todo = require('./models/todo');

// mongoose.connect('mongodb://localhost/todos');

// // our script will not exit until we have disconnected from the db.
// function quit() {
//   mongoose.disconnect();
//   console.log('\nQuitting!');
// }

// // a simple error handler
// function handleError(err) {
//   console.log('ERROR:', err);
//   quit();
//   return err;
// }

// console.log('removing old todos...');
// Todo.remove({})
// .then(function() {
//   console.log('old todos removed');
//   console.log('creating some new todos...');
//   var groceries  = new Todo({ title: 'groceries',    completed: false });
//   var feedTheCat = new Todo({ title: 'feed the cat', completed: true  });
//   return Todo.create([groceries, feedTheCat]);
// })
// .then(function(savedTodos) {
//   console.log('Just saved', savedTodos.length, 'todos.');
//   return Todo.find({});
// })
// .then(function(allTodos) {
//   console.log('Printing all todos:');
//   allTodos.forEach(function(todo) {
//     console.log(todo);
//   });
//   return Todo.findOne({title: 'groceries'});
// })
// .then(function(groceries) {
//   groceries.completed = true;
//   return groceries.save();
// })
// .then(function(groceries) {
//   console.log('updated groceries:', groceries);
//   return groceries.remove();
// })
// .then(function(deleted) {
//   return Todo.find({});
// })
// .then(function(allTodos) {
//   console.log('Printing all todos:');
//   allTodos.forEach(function(todo) {
//     console.log(todo);
//   });
//   quit();
// });
