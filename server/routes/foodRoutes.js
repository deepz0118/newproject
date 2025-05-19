const express = require("express");
const router = express.Router();
const Food = require("../models/Food");
const RequestFood = require("../models/RequestFood");
// Add food
router.post("/add", async (req, res) => {
  try {
    //console.log("Received food data:", req.body); // ✅ See what's sent
    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    console.error("Error adding food:", error); // ✅ Log specific validation issue
    res.status(400).json({ error: error.message });
  }
});


// Get all food
router.get("/", async (req, res) => {
  try {
    const foodList = await Food.find();
    res.json(foodList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/requests", async (req, res) => {
  try {
    const requests = await RequestFood.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch requests" });
  }
});
router.post("/request/:id", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).send("Food not found");

    // Step 1: Mark food as unavailable
    food.available = false;
    await food.save();

    // Step 2: Create request record
    const newRequest = new RequestFood({
      foodId: food._id,
      foodName: food.hotelName,
      foodLocation: food.location,
      userName: name,
      userEmail: email,
      userMessage: message || "",
    });

    await newRequest.save();

    res.status(200).send("Request submitted successfully");
  } catch (err) {
    console.error("Error processing request:", err);
    res.status(500).send("Error processing request");
  }
});


module.exports = router;
