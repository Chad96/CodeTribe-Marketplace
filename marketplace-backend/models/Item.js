// models/Item.js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    price: Number,
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "UserProfile" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Item", itemSchema);
