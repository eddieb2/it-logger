const express = require('express');
const router = express.Router();
const {
	check,
	validationResult,
} = require('express-validator');

const LogDB = require('../models/LogsModel');

// SECTION: CREATE
/**
 * @route   POST  api/logs
 * @desc    Add a log
 * @access  Private
 */

router.post(
	'/',
	[
		check('message', 'Please enter a message.')
			.not()
			.isEmpty(),
		check(
			'attention',
			'Please enter the attention status.'
		)
			.not()
			.isEmpty(),
		check('tech', 'Please enter a tech.')
			.not()
			.isEmpty(),
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

		const { message, attention, tech } = req.body;

		try {
			const newLog = new LogDB({
				message,
				attention,
				tech,
			});

			const addedLog = await newLog.save();
			// const allLogs = await LogDB.find({});

			res.status(201).json({
				message: 'Log added.',
				log: addedLog,
			});
		} catch (error) {
			console.log(error.message);
			res.status(500).json({
				errors: 'Server Error.',
			});
		}
	}
);

// SECTION: READ
/**
 * @route   GET  api/logs
 * @desc    Get all logs
 * @access  Private
 */

router.get('/', async (req, res) => {
	try {
		const logs = await LogDB.find({});

		res.status(200).json({ logs });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ errors: error.message });
	}
});

// SECTION: READ
/**
 * @route   GET  api/logs/:techid
 * @desc    Get all logs for a tech  by techid
 * @access  Private
 */

// SECTION: UPDATE
/**
 * @route   PUT  api/logs/:logid
 * @desc    Update a log by logid
 * @access  Private
 */

// NOTE this may need validation
router.put('/:logid', async (req, res) => {
	const { logid } = req.params;
	const { message, tech, attention, date } = req.body;

	const logFields = {};

	if (message) logFields.message = message;
	if (tech) logFields.tech = tech;
	if (attention !== '') logFields.attention = attention;
	if (date) logFields.date = date;

	try {
		let log = await LogDB.findById(logid);

		if (!log) {
			return res
				.status(400)
				.json({ message: 'Log not found!' });
		}

		log = await LogDB.findByIdAndUpdate(
			logid,
			{ $set: logFields },
			{ new: true }
		);

		res.status(202).json({
			message: 'Log updated.',
			log,
		});
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ errors: error.message });
	}
});

// SECTION: DELETE
/**
 * @route   DELETE  api/logs/:logid
 * @desc    Delete a log by logid
 * @access  Private
 */

router.delete('/:logid', async (req, res) => {
	const { logid } = req.params;

	try {
		let log = await LogDB.findById(logid);

		if (!log) {
			return res.status(400).json({
				message: 'Log not found!',
			});
		}

		await LogDB.findByIdAndRemove(logid);

		res.status(202).json({ message: 'Log deleted!' });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ errors: error.message });
	}
});

module.exports = router;
