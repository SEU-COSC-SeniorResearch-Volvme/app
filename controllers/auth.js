const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/Volvme', {useNewUrlParser: true, autoIndex: false});

//Import Models//
const User = require('../models/user');


//Export Model Controls//
exports.getSignup = function(req, res) {

	res.status(200).json({message: "Send signup page"})
}//End Get Signup//
exports.postSignup = function(req, res) {

	const new_user = new User({

     	_id: mongoose.Types.ObjectId(),
     	email: req.body.email,
    	profile: { 
    		name: req.body.name 
    	}
    })
    new_user.setPassword(req.body.password)
  	new_user.save(function(err, new_user) {

      	if (err) return res.status(500).json(err)
      	//let token = new_user.generateJWT()
      	//req.session.userID = new_user._id;
      	req.session.userID = new_user._id
      	return res.redirect(201, '/dashboard') //json(new_user.toAuthProfile()) //.redirect('profile')
   	}) 
}//End Post Signup//
exports.postLogin = function(req, res) {

	if (req.body.email && req.body.password) {
		const user = User.findOne(
			{	email: req.body.email	},
			function(err, user) {
				if (err) return res.status(500).send("Error Finding User")
				if (!user) return res.status(204).json({"message": "The email provided is not registered with us!"})
	  			if (!user.validPassword(req.body.password)) return res.status(401).json({"message": "Invalid Password"})
	  			req.session.userID = user._id
	  			return res.status(200).redirect('/dashboard')
			})
	}

	db.User.findOne(
		 //query params//
		{email: req.body.email},
		// { //return values//
		// 	profile: true
		// },
		//callback function//
		function(err, user) {

			if (err) return res.status(500).json(err) //next(err)
	  		let token = user.generateJWT()
	  		if (!user) return res.status(204).json({"message": "The email provided is not registered with us!"})
	  		if (!user.validPassword(req.body.password)) return res.status(401).json({"message": "Invalid Password"})
	  		//Success//
	  		 res.session.user = user
			return res.status(200).json(user.toAuthProfile()) //(user.toAuthProfile())
		}
	)
}//End Login//
exports.logout = function (req, res, next) {

	if (req.session) 
	{
		req.session.destroy(function(err) {
			if (err)
				return next(err)
			else
				return res.redirect('/')
		})
	}
}//End Logout//


//Scaps//
// new_user.save(function(err, new_user) {
//     if (err) return next (err);
//     let token = new_user.generateJWT();
//     req.session.userID = new_user._id;
//     return res.status(201).json(new_user.toAuthProfile()); //.redirect('profile')
//   })