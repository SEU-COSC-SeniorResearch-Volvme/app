//Volvme Community App//

/*  Open Features: Access and Anonymously Like all Public Posts, Events, Profiles and Media
	Auth Features: Comment, Like, Subscribe, Download Everything. Explore and search for friends.
*/

//Import Middlewares and Dependencies//
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

//Import Routers//
const router = require('../routers/community')

//Instansiate comunity App//
const community = express()

//Mount Middlewares//
community.use(logger('dev'))
community.use(express.json())
community.use(express.urlencoded({ extended: false }))
community.use(cookieParser())
community.use(express.static(path.join(__dirname, 'public')))

//Mount Routers//
community.use(router)

module.exports = community