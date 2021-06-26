const jwt = require('jsonwebtoken');

// auth moddleware
const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access denied. Not authenticated!');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).send('Invalid token. Unauthorised!');
    }
};

module.exports = authenticate;
