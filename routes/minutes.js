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
  var minutes = [];

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
  /*
  { dateOf: 't4', Type: 't4', Approved: 't4', Headline: 't4' }
  */

  console.log('req.body:', req.body);
  var minutes = new Minutes ({
    dateOf:       new Date(),         // TODO: use a date from the form?
    type:         req.body.type,
    approved:     req.body.approved ? true : false,
    headline:     req.body.headline,
    author:       currentUser._id
  });
  // Since a user's todos are an embedded document, we just need to push a new
  // TODO to the user's list of todos and save the user.
  // { approved: false, _id: 57bca85a495ddcccf07ca9ce }
  /*
  dateOf:         { type: Date,  required: true },
  type:           { type: String, required: true },
  approved:     { type: Boolean, required: true },
  headline:     { type: String, required: true}
  */

  console.log('trying to save minutes:', minutes);

  Minutes.create(minutes)
  .then(function() {
    res.redirect('/minutes');
  }, function(err) {
    return next(err);
  });
});



module.exports = router;

