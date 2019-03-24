const express = require('express');
const router = express.Router();

//Import All Routers
const authRouter = require('./auth')
const communityRouter = require('./community')
const userRouter = require('./user')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
