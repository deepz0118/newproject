const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const foodRoutes = require("./routes/foodRoutes");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/food-donation-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
