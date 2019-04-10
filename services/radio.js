//Volvme Radio App//

/*  Open Features: Open, Close, Play, Stop, Volume Control, Like, Explore
	Auth Features: Favorite, Share, Archive Access + Open Features
*/

//Import Middlewares and Dependencies//
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const multer = require('multer')
const session = require('express-session')
const logger = require('morgan')

//Instansiate Radio App//
const radio = express()

//Mount Middlewares//
radio.use(logger('dev'))
radio.use(express.json())
radio.use(express.urlencoded({ extended: false }))
radio.use(cookieParser())
radio.use(express.static('../public'))

//Set Storage Engine
const storage = multer.diskStorage({
    destination: '../public/radio',
    filename: function(req, file, done) {
        done(null, file.fieldname + '-' + Date.now())
    }
})
const upload = multer({
    storage: storage
}).single('radioUpload')

radio.get('/', function(req, res) {
    res.status(200).json({
        welcome: 'Welcome to Volvme Radio'
    })
})

radio.post('/upload', function(req, res) {

    upload(req, res, function(err, done){
        if (err) return res.status(500).json(err)
        if (!req.file) return res.status(500).send('Please upload a file')
	return res.status(200).send('successful file upload')
    })	
})

module.exports = radio