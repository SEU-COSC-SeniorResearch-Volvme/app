//Volvme Radio App//

/*  Open Features: Open, Close, Play, Stop, Volume Control, Like, Explore
	Auth Features: Favorite, Share, Archive Access + Open Features
*/

//Import Middlewares and Dependencies//
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Import Routers//
const router = require('../routes/radio');

//Instansiate Radio App//
const radio = express();

//Mount Middlewares//
radio.use(logger('dev'));
radio.use(express.json());
radio.use(express.urlencoded({ extended: false }));
radio.use(cookieParser());
radio.use(express.static(path.join(__dirname, 'public')));

//Mount Routers//
radio.use(router);

module.exports = radio;