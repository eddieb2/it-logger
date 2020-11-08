const mongooose = require('mongoose');

const TechsModel = mongooose.Schema({
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
