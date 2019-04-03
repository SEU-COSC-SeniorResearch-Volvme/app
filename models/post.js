'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({

	_id: Schema.Types.ObjectId,
	author: {
		type: Schema.Types.ObjectId, ref: "User",
		required: true
	},
	body: {
		type: String,
		required: true
	},
	comments: [{
		_id: Schema.Types.ObjectId,
		author: {
			type: Schema.Types.ObjectId, ref: "User",
			required: true
		},
		body: {
			type: String,
			required: true
		},
		likes: [{
			type: Schema.Types.ObjectId, ref: "User",
			required: true
		}]
	}],
	likes: [{
		type: Schema.Types.ObjectId, ref: "User",
		required: true
	}]

}, {timestamps: true})

module.exports = mongoose.model('Post', Post)