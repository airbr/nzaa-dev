var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// Below added VV
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
// Above added ^^
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');


// Routes
var homeRouter = require('./routes/index');
var minutesRouter = require('./routes/minutes');

var usersRouter = require('./routes/users');
var todosRouter = require('./routes/todos');


var app = express();

// Use Static Content
app.use('/static', express.static('public/images/'));


// Connect to database
mongoose.connect('mongodb://localhost/espm');
// mongoose.connect('mongodb://localhost/minutes');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

//Cust
app.use(session({ secret: 'WDI Rocks!',
                  resave: true,
                  saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Cust Config Passport w/ Custom data
require('./config/passport/passport')(passport);

//Cust  This middleware will allow us to use the currentUser in our views and routes.
app.use(function (req, res, next) {
  global.currentUser = req.user;
  next();
});

app.use('/', homeRouter);
app.use('/minutes', minutesRouter);
app.use('/users', usersRouter);
app.use('/todos', todosRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

console.log('Running in %s mode', app.get('env'));

module.exports = app;
