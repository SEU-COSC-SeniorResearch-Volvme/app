const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const multer = require('multer')
const session = require('express-session')
const logger = require('morgan')
//Initialize Routers
const router = express.Router()


//Instantiate Middleware Services
const storage = multer.diskStorage({
    destination: function(req, file, done) {
        done(null, '../public/radio/')
    },
    filename: function(req, file, done) {
        done(null, file.fieldname + '-' + file.originalname + '-' + Date.now() + path)
    }
})
const upload = multer({storage: storage}).single('radio')

router.get('/', function(req,res) {

	return res.send('Welcome to Volvme Radio!')
})

router.post('/upload', function(req, res) {

    upload(req, res, function(err){
        if (err) return res.status(500).json(err)
    })
	
	const file = req.file
	if (!file) return res.status(500).send('Please upload a file')
	return res.status(200).send('successful file upload')
})

module.exports = router