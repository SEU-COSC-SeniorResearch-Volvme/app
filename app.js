const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const multer = require('multer')
const session = require('express-session')
const logger = require('morgan')
//Import app configurations
const db = require('./config/db')
const secret = require('./config/secret')
const maxAge = require('./config/session').maxAge
//Mount Routers
const indexRouter = require('./routes/index')
//const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
//Instantiate Middleware Services
const upload = multer()
//Instansiate App
const app = express()

const users = []

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(upload.array())
app.use(cookieParser())
app.use(session({
    key: 'user_sid',
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: maxAge,
        sameSite: true,
        secure: true
    }   
}))

app.use(function(req, res, next) {
    if(req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid')
    }
    next()
})

const checkSession = function(req, res, next) {
    if (res.session.user && req.cookies.user_sid) {
        res.redirect('user/dashboard')
    } else {
        next()
    }
}
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter)
//app.use('/auth', authRouter)
app.use('/user', userRouter)

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
