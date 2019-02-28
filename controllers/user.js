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



