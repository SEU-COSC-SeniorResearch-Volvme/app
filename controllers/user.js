//Volvme User 'Dashboard' Controller//

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/Volvme', {useNewUrlParser: true, autoIndex: false});

//Import Model//
const User = require('../models/user');

exports.index = function(req, res) {
	res.json({
		info: "This is the Volvme api user index point. Refer to the Volvme api index point (../api) for complete api documentation. Thanks for visiting Volvme :)",
		suggestion: "Visit /signup to create a new user with us! :)"
	})
}

exports.getAllUsers = function(req, res, next) {

	res.send("Lists all Users")
}

exports.addFriend = function(req, res, next) {

	res.send("Add a Friend to a Users Friend list")
}

exports.removeFriend = function(req, res, next) {

	res.send("Remove a Friend from a Users Friend list")
}


exports.getFriends = function(req, res, next) {

	//res.send("List all friends of a User")
	User.find({ _id: req._id }, 'friends', function(err, friends) {
		if (err) return next(err)
		res.status(200).json(friends)
	}
)}

exports.createProject = function(req, res, next) {

	res.send("Add a Project to a Users Project list")
}

exports.updateProject = function(req, res, next) {

	res.send("Edit a User Project")
}

exports.removeProject = function(req, res, next) {

	res.send("Remove a User Project")
}
