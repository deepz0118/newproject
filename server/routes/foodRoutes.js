const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

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

router.post("/request/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).send("Food not found");

    food.available = false; // Mark as requested/unavailable
    await food.save();

    res.status(200).send("Request successful");
  } catch (err) {
    res.status(500).send("Error processing request");
  }
});

module.exports = router;
