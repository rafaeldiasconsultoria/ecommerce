var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Site
var indexRouter = require('./routes/index');
var carrinhoRouter = require('./routes/carrinho');
var checkoutRouter = require('./routes/checkout');
var checkoutSucessoRouter = require('./routes/checkout-sucesso');

// API V1
var apiCheckoutRouter = require('./routes/api/v1/checkout');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Site
app.use('/', indexRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/checkout', checkoutRouter);
app.use('/checkout-sucesso', checkoutSucessoRouter);

// Api V1
app.use('/api/v1/checkout', apiCheckoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
