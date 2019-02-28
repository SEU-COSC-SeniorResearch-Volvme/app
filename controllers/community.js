const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/Volvme', {useNewUrlParser: true, autoIndex: false});

//Import Models//
const User = require('../models/user');

exports.index = function(req, res) {

	res.status(200).json({msg: "Welcome to the Volvme Community Index"})
}

exports.getAllPublicUsers = function(req, res) {

	console.log('not yet implemented');
}

exports.getAllPublicPosts = function(req, res) {

	console.log('not yet implemented');
}

exports.createPublicPost = function(req, res) {

	console.log('not yet implemented');

}

exports.editPublicPost = function(req, res) {

	console.log('not yet implemented');

}

exports.deletePublicPost = function(req, res) {

	console.log('not yet implemented');

}

exports.likePost = function(req, res) {

	console.log('not yet implemented');
}

exports.getAllPublicEvents = function(req, res) {

	console.log('not yet implemented');
}

exports.createPublicEvent = function(req, res) {

	console.log('not yet implemented');
}

exports.editPublicEvent = function(req, res) {

	console.log('not yet implemented');
}

exports.deletePublicEvent = function(req, res) {

	console.log('not yet implemented');
}

exports.likeEvent = function(req, res) {

	console.log('not yet implemented');
}

