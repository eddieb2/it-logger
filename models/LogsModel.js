const mongoose = require('mongoose');

const LogsSchema = mongoose.Schema({
	message: {
		type: String,
		required: true,
	},
	attention: {
		type: Boolean,
		required: false,
		default: false,
	},
	tech: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('logs', LogsSchema);
