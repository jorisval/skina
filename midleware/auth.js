const jsonWebToken = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    try {
        // Get the token from the authorization header
        const token = req.headers.authorization.split(' ')[1];

        // Verify the token and extract the admin ID
        const decoded = jsonwebtoken.verify(token, process.env.JWT_KEY);
        req.adminId = decoded.adminId;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Auth failed!' });
    }
};
