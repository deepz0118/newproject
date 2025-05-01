const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  hotelName: { type: String, required: true },
  location: { type: String, required: true },
  foodType: { type: String, required: true },
  quantity: { type: String, required: true },
  expiry: { type: Date, required: true },
  available: { type: Boolean, default: true },
  ownerLicense: { type: String, required: true },
  verified: { type: Boolean, default: false },
});

module.exports = mongoose.model("Food", foodSchema);
