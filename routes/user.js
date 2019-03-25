const express = require('express')
//Initialize Routers
const router = express.Router()
//Import Controllers
const controller = require('../controllers/user')

//Route-Specific Middlewares
const redirectLogin = function(req, res, next) {

    if (!req.session.userID) {
        res.redirect('/login')
    } else {
        next()
    }
}

const redirectDashboard = function(req, res, next) {

    if (!req.session.userID) {
        res.redirect('/dashboard')
    } else {
        next()
    }
}

//Mount Routes//
router.post('/signup', controller.signup)
router.post('/login' , controller.login)
//router.get('/dashboard', controller.dashboard)
router.post('/logout', controller.logout)
router.get('/all', controller.getAllUsers)
router.post('/addFriend/id:', controller.addFriend)
router.post('/removeFriend/id:', controller.removeFriend)
router.post('/createProject/title:/id:', controller.createProject)
router.post('/deleteProject/id:', controller.deleteProject)

//Export Router//
module.exports = router;
