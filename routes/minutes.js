var express = require('express');
var router = express.Router();

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

//uses ISO 8601
let minutes = [
  {
    dateOf: "2016-08-22",
    type: 'Board Meeting',
    approved: false,
    headline: 'This is the headline of the minutes'
  },
 {
    dateOf: "2016-08-12",
    type: 'Board Meeting',
    approved: true,
    headline: 'This is headline of the older minutes'
  },
];

// INDEX
router.get('/', function(req, res, next) {
  console.log('\n\nINDEX route for minutes has currentUser = ', currentUser);
  console.log('\n\nINDEX route for minutes has req.user = ', req.user);
  res.render('minutes/index', { minutes: minutes });
});

module.exports = router;
