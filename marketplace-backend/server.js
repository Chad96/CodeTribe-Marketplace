// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./db");
const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", userRoutes);
app.use("/api", itemRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
