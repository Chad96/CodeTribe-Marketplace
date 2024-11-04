// routes/userRoutes.js
const express = require("express");
const UserProfile = require("../models/UserProfile");
const verifyToken = require("../middleware/auth");
const router = express.Router();

// Get user profile
router.get("/profile", verifyToken, async (req, res) => {
    try {
        const profile = await UserProfile.findOne({ firebaseUid: req.user.uid });
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: "Error fetching profile" });
    }
});

// Update user profile
router.put("/profile", verifyToken, async (req, res) => {
    try {
        const updatedProfile = await UserProfile.findOneAndUpdate(
            { firebaseUid: req.user.uid },
            req.body,
            { new: true, upsert: true }
        );
        res.json(updatedProfile);
    } catch (error) {
        res.status(500).json({ error: "Error updating profile" });
    }
});

module.exports = router;
