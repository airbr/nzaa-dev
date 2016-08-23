var express = require('express');
var Minutes = require('../models/minutes');
var router = express.Router();

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

function authenticate(req, res, next) {
  if(!req.isAuthenticated()) {
    req.flash('error', 'Please signup or login.');
    res.redirect('/');
  }
  else {
    next();
  }
}

// INDEX
// router.get('/', function(req, res, next) {
//   console.log('\n\nINDEX route for minutes has currentUser = ', currentUser);
//   console.log('\n\nINDEX route for minutes has req.user = ', req.user);
//   res.render('minutes/index', { minutes: minutes });
// });

// INDEX
router.get('/', function(req, res, next) {
  let minutes = [];

  console.log('minutes', minutes);
  Minutes.find(minutes)
  .then(function(minutes) {
    res.render('minutes/index' , { minutes: minutes });
  });
});

// Constitution SHOW
router.get('/constitution', function(req, res, next) {
    res.render('minutes/constitution');
});







// NEW
router.get('/new', authenticate, function(req, res, next) {
  var minutes = {
    dateOf: '',
    type:    '',
    approved:  true,
    headline: ''
  };
  res.render('minutes/new', { minutes: minutes, message: req.flash() });
});


// // CREATE
// router.post('/', function(req, res, next) {
//   var minutes = new Minutes ({
//     dateOf:       req.body.dateOf,
//     type:         req.body.type,
//     approved:     req.body.approved ? true : false,
//     headline:     req.body.headline
//   });
//   console.log(minutes);
//   currentUser.minutes.push(minutes);
//   minutes.save()
//   .then(function() {
//     res.redirect('/minutes');
//   }, function(err) {
//     return next(err);
//   });
// });

// CREATE
router.post('/', authenticate, function(req, res, next) {
console.log(req.body);
 var minutes = new Minutes ({
    dateOf:       req.body.dateOf,
    type:         req.body.type,
    approved:     req.body.approved ? true : false,
    headline:     req.body.headline
  });
  // Since a user's todos are an embedded document, we just need to push a new
  // TODO to the user's list of todos and save the user.
  currentUser.minutes.push();
  currentUser.save()
  .then(function() {
    res.redirect('/minutes');
  }, function(err) {
    return next(err);
  });
});



module.exports = router;



// // uses ISO 8601
// let minutes = [
//   {
//     dateOf: "2016-06-11",
//     type: 'Board Meeting',
//     approved: approved,
//     headline: 'July 11th Meeting'
//   }
// ];

// "_id" : ObjectId("57bc4fa9cf43a00b5e5376a5"),
//   "updatedAt" : ISODate("2016-08-23T13:29:13.134Z"),
//   "createdAt" : ISODate("2016-08-23T13:29:13.134Z"),
//   "headline" : "Best Meeting Ever",
//   "approved" : true,
//   "type" : "Regular Meeting",
//   "dateOf" : ISODate("2016-08-23T13:29:13.131Z"),
//   "__v" : 0



// // CREATE
// router.post('/', function(req, res, next) {
//   console.log('req.body:', req.body);
//   var minutes = req.body;
//   var req.body = minutes.create(new minutes(dateOf, type, approved, headline));
//   return Minutes.create(minutes);
//   res.redirect('/minutes');
// })


// // Create
// router.post('/', function(req, res, next) {
//   var todo = new Minutes({ dateOf: Date.now(),
//                            type: 'Extraordinary Meeting',
//                            approved: false,
//                           headline: 'Created Meeeting' });
//   Minutes.save()
//   .then(function(saved) {
//     res.redirect('/minutes');
//   }, function(err) {
//     return next(err);
//   });
// });


