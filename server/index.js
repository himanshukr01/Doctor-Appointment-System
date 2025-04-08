const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const colors = require("colors"); // for console styling
const connectDB = require("./Config/Db"); // assuming this is the main DB config

// Initialize express app
const app = express();

// Configure environment variables
dotenv.config();

// Connect to the database
connectDB();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Set the view engine if needed
app.set('view engine', 'ejs');

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", success: false });
});

// Main Routes
app.use("/api/donor", require("./Routes/Donor"));
app.use("/api/donee", require("./Routes/Donne"));
app.use("/api/bloodmanager", require("./Routes/BloodManager"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/doctor", require("./routes/doctorRoutes"));

// Server Port
const PORT = process.env.PORT || 8001;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
