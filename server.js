const express = require('express');
const app = express();
const path = require('path');

// SECTION Connect MongoDB database
const connectDB = require('./config/db');
connectDB();

// SECTION Middleware
app.use(express.json({ extended: false }));

// SECTION Server Start
const PORT = process.env || 5000;
app.listen(PORT, () => {
	console.log(`
    ----------------------------
    Server started on port ${PORT}
    ----------------------------`);
});

// app.get('/', (req, res) => {
// 	res.send(`
//         Welcome to the It Logger API!
//     `);
// });

// SECTION Routes
app.use('/api/logs', require('./routes/logsRoute'));
app.use('/api/techs', require('./routes/techsRoute'));

// Serve static assests in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) =>
		res.sendFile(
			path.resolve(
				__dirname,
				'client',
				'build',
				'index.html'
			)
		)
	);
}
