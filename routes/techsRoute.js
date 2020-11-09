const express = require('express');
const router = express.Router();
const {
	check,
	validationResult,
} = require('express-validator');

const TechDB = require('../models/TechsModel');

// SECTION: CREATE
/**
 * @route   POST api/techs
 * @desc    Create a tech
 * @access  Private
 */

router.post(
	'/',
	[
		check(
			'firstName',
			'Please enter a first name.'
		).notEmpty(),
		check(
			'lastName',
			'Please enter a last name.'
		).notEmpty(),
	],
	async (req, res) => {
		////////////////////////////////////
		// SECTION: Validation
		const validationErrors = validationResult(req);

		if (!validationErrors.isEmpty()) {
			return res.status(400).json({
				errors: validationErrors.array(),
			});
		}
		////////////////////////////////////

		const { firstName, lastName } = req.body;

		try {
			// Query to see if tech exists already.
			let tech = await TechDB.findOne({
				firstName,
				lastName,
			});

			if (tech) {
				res.status(400).json({
					message: 'User already exists.',
				});
			}

			tech = new TechDB({
				firstName,
				lastName,
			});

			const addedTech = await tech.save();

			res.status(201).json({
				message: 'User created.',
				tech: addedTech,
			});
		} catch (error) {
			console.log(error.message);
			res.status(500).json({
				errors: 'Server error.',
			});
		}
	}
);

// SECTION: READ
/**
 * @route   GET api/techs
 * @desc    Get all techs
 * @access  Private
 */

router.get('/', async (req, res) => {
	try {
		const techs = await TechDB.find({});
		res.status(200).json({ techs });
	} catch (error) {
		console.log(error.message);
		res.status(400).json({ errors: 'Server error.' });
	}
});

// SECTION: UPDATE
/**
 * @route   PUT api/techs/:id
 * @desc    Update a tech
 * @access  Private
 */

router.put(
	'/:id',
	[
		check(
			'firstName',
			'Please enter a first name.'
		).notEmpty(),
		check(
			'lastName',
			'Please enter a last name.'
		).notEmpty(),
	],
	async (req, res) => {
		////////////////////////////////////
		// SECTION: Validation
		const validationErrors = validationResult(req);

		if (!validationErrors.isEmpty()) {
			return res.status(400).json({
				errors: validationErrors.array(),
			});
		}
		////////////////////////////////////

		const { id } = req.params;
		const { firstName, lastName } = req.body;

		const techFields = {};

		if (firstName) techFields.firstName = firstName;
		if (lastName) techFields.lastName = lastName;

		try {
			// Query to see if tech exists already.
			let tech = await TechDB.findById(id);

			if (!tech) {
				return res
					.status(400)
					.json({ message: 'Tech not found!' });
			}

			tech = await TechDB.findByIdAndUpdate(
				id,
				{ $set: techFields },
				{ new: true }
			);

			res.status(202).json({
				message: 'Contact updated',
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({
				errors: 'Server Error.',
			});
		}
	}
);

// SECTION: DELETE
router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		let tech = await TechDB.findById(id);

		if (!tech) {
			return res.status(400).json({
				message: 'Tech not found!',
			});
		}

		tech = await TechDB.findByIdAndRemove(id);

		res.status(202).json({ message: 'Tech deleted!' });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: 'Server Error.' });
	}
});

module.exports = router;
