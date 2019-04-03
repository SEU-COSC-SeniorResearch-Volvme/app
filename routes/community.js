//Volvme Community Router//

//Import Middlewares//
const express = require('express')

//Initialize Router//
const router = express.Router()

//Import Controller//
const controller = require('../controllers/community')

//Define Routes

router.get('/', controller.index)


router.route('/post')
		.post(controller.createPublicPost)
		.put(controller.editPublicPost)
		.delete(controller.deletePublicPost)
		.patch(controller.likePost)

router.route('/posts')
		.get(controller.getAllPublicPosts)

router.route('/event')
		.post(controller.createPublicEvent)
		.put(controller.editPublicEvent)
		.delete(controller.deletePublicEvent)
		.patch(controller.likeEvent)

router.route('/events')
		.get(controller.getAllPublicEvents)

module.exports = router
