// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const methodOverride = require("method-override");
// const colors = require("colors");

// // Environment Config
// dotenv.config();

// // DB Connection
// const connectDB = require("./Config/Db");
// connectDB();

// // Initialize Express App
// const app = express();

// // Middleware Setup
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(bodyParser.json());
// app.use(methodOverride('_method'));

// // View Engine Setup
// app.set('view engine', 'ejs');

// // Routes Import
// const Donor = require("./Routes/Donor");
// const Donne = require("./Routes/Donne");
// const BloodManager = require("./Routes/BloodManager");
// const UserRoutes = require("./routes/userRoutes");
// const AdminRoutes = require("./routes/adminRoutes");
// const DoctorRoutes = require("./routes/doctorRoutes");

// // Routes Setup
// app.use("/api/donor", Donor);
// app.use("/api/donee", Donne);
// app.use("/api/bloodmanager", BloodManager);
// app.use("/api/user", UserRoutes);
// app.use("/api/admin", AdminRoutes);
// app.use("/api/doctor", DoctorRoutes);

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Something went wrong", success: false });
// });

// // Server Port
// const PORT = process.env.PORT || 8001;

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is successfully running at port no : ${PORT}`.bgCyan.white);
// });
