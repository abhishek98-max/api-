const express = require('express');
const route = require("../router/route");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', route);

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'API is running!', version: '1.0.0' });
});

// For Vercel serverless - ensure app is listening
app.listen = () => {};

// Export for Vercel
module.exports = app;

