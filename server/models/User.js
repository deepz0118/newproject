const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String, // admin | ngo | restaurant
});

module.exports = mongoose.model("User", userSchema);
