const express = require("express");
const cors = require("cors");
require("./config/db"); // Connect MongoDB (optional for now)

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");

// Route registration
app.use("/api/users", userRoutes);

module.exports = app;
