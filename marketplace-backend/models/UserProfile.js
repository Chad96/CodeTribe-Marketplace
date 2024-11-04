// models/UserProfile.js
const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    firebaseUid: { type: String, required: true, unique: true },
    name: String,
    email: String,
    address: String,
    phone: String,
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
