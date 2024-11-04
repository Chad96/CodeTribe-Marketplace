// middleware/auth.js
const admin = require("../firebase");

async function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).json({ error: "No token provided" });

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken; // Attach decoded token to req object
        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }
}

module.exports = verifyToken;
