const express = require("express");
const router = express.Router();
const Food = require("../models/food");

// Add food
router.post("/", async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (error) {
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

module.exports = router;
