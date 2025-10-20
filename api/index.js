const express = require('express');
const app = express();
const route = require("../router/route");

// Middleware
app.use(express.json());

app.use('/api/v1', route);

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'API is running!', version: '1.0.0' });
});

// Export for Vercel serverless
module.exports = app;

