var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/', function (req, res, next) {
  res.send('PUT request to homepage');
});

// // Promotion!
// router.put('/promotion', function (req, res, next) {
//   console.log('Making a user an Admin...');
//   currentUser.findOneAndUpdate({ role: 'boardMember' }, updates, options, function(err, updated) {
//     if (err) return handleError(err);
//     console.log('Promotion!');
//     updated.print();
//     quit();
//   });
// });

module.exports = router;
