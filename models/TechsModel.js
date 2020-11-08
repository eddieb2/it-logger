const mongoose = require('mongoose');

const TechsModel = mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('techs', TechsModel);
