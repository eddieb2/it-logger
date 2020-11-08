const express = require('express');
const app = express();

// SECTION Connect MongoDB database
const connectDB = require('./config/db');
connectDB();

// SECTION Middleware
app.use(express.json({ extended: false }));

// SECTION Server Start
const PORT = process.env.PORT || 5000;
app.use(PORT, () => {
	console.log(`
    ----------------------------
    Server started on port ${PORT}
    ----------------------------`);
});

// SECTION Routes
app.use('/api/logs', require('./routes/logsRoute'));
app.use('/api/tech', require('./routes/techsRoute'));
