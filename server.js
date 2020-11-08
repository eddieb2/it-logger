const express = require('express');
const app = express();

// SECTION Connect MongoDB database
const connectDB = require('./config/db');
connectDB();

// SECTION Middleware
app.use(express.json({ extended: false }));

// SECTION Server Start
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`
    ----------------------------
    Server started on port ${PORT}
    ----------------------------`);
});

app.get('/', (req, res) => {
	res.send(`
        Welcome to the It Logger API!
    `);
});

// SECTION Routes
app.use('/api/logs', require('./routes/logsRoute'));
app.use('/api/techs', require('./routes/techsRoute'));
