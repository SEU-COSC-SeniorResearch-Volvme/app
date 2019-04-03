const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost/Volvme', {useNewUrlParser: true, autoIndex: false})

//Import Models//
const User = require('../models/user')
const Group = require('../models/group')
const Project = require('../models/project')
const Post = require('../models/post')

exports.index = function(req, res) {

	//res.status(200).json({msg: "Welcome to the Volvme Community Index"})
	const communityUsers = []
	const communityPosts = []

	User.find({}, {profile: true}, function(err, users) {
		if (err) return err
		if (!users) communityUsers = []
		//if (users) 

			Post.find({}, function(err, posts) {
				if (err) return err
				if (!posts) communityPosts = []

				return res.status(200).json({
					welcome: "Welcome to the Volvme Community",
					users: users,
					posts: posts
				})
			})
	})
}

exports.getAllPublicUsers = function(req, res) {

	//console.log('not yet implemented')
	User.find({}, function(err, users) {
		if (err) return res.status(500).json("Error finding all Users")
		res.status(200).json(users)
	})
}

exports.getAllPublicPosts = function(req, res) {

	//console.log('not yet implemented')
	Post.find({}, function(err, posts) {
		if (err) return res.status(500).json("Error finding all Users")
			res.status(200).json(posts)
	})
}

exports.createPublicPost = function(req, res) {

	console.log('not yet implemented')

}

exports.editPublicPost = function(req, res) {

	console.log('not yet implemented')

}

exports.deletePublicPost = function(req, res) {

	console.log('not yet implemented')

}

exports.likePost = function(req, res) {

	console.log('not yet implemented')
}

exports.getAllPublicEvents = function(req, res) {

	console.log('not yet implemented')
}

exports.createPublicEvent = function(req, res) {

	console.log('not yet implemented')
}

exports.editPublicEvent = function(req, res) {

	console.log('not yet implemented')
}

exports.deletePublicEvent = function(req, res) {

	console.log('not yet implemented')
}

exports.likeEvent = function(req, res) {

	console.log('not yet implemented')
}

