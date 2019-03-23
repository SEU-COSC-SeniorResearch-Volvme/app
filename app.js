const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

// import app configurations
const db = require('./config/db')
const secret = require('./config/secret')

//Mount Routers
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')

//Instansiate App
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/users', usersRouter)

// Error Handlers

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401)
    res.json({"message" : err.name + ": " + err.message})
  }
})

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500)
        res.json({message: err.message})
    })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({message: err.message})
})

module.exports = app
