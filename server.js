const express = require('express');
const app = express();
const PORT = 3000;
const route = require("./router/route")

// Middleware
app.use(express.json());

app.use('/api/v1', route);

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'API is running!', version: '1.0.0' });
});

// Start server (for local development)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

// Export for Vercel
module.exports = app;
