const express = require('express');
//const jwt = require('express-jwt');
//const secret = require('../config/secret');

//Import Controllers//
const authController = require('../controllers/auth');

//Initialize Router//
const authRouter = express.Router();

//Mount Routes//
authRouter.post('/signup', authController.postSignup)
authRouter.get('/signup', authController.getSignup)

authRouter.post('/login' , authController.postLogin)

authRouter.post('/logout', authController.logout)

//Export Router//
module.exports = authRouter;







// GET route after registering
// router.get('/profile', function (req, res, next) {
//   User.findById(req.session.userID)
//     .exec(function (error, user) {
//       if (error) {
//         return next(error);
//       } else {
//         if (user === null) {
//           const err = new Error('Not authorized! Go back!');
//           err.status = 400;
//           return next(err);
//         } else {
//           return res.status(200).send(user.toAuthJSON())
//         }
//       }
//     });
// });


// function getTokenFromHeader(req){
//   if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') {
//     return req.headers.authorization.split(' ')[1];
//   }

//   return null;
// }

// const auth = {
//   required: jwt({
//     secret: secret,
//     userProperty: 'payload',
//     getToken: getTokenFromHeader
//   }),
//   optional: jwt({
//     secret: secret,
//     userProperty: 'payload',
//     credentialsRequired: false,
//     getToken: getTokenFromHeader
//   })
// };

// module.exports = auth;