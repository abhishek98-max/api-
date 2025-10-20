const app = require('../server');

// Export handler for Vercel serverless
module.exports = (req, res) => {
    return app(req, res);
};

