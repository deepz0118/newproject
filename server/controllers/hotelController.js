const Hotel = require('../models/food');

exports.addHotel = async (req, res) => {
  try {
    const {
      hotelName, location, foodAvailable, verified,
      address, phone, email, ownerName, foodType
    } = req.body;

    if (!hotelName || !location || !foodAvailable || !address ||
        !phone || !email || !ownerName || !foodType) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const hotel = new Hotel({
      hotelName,
      location,
      foodAvailable,
      verified,
      address,
      phone,
      email,
      ownerName,
      foodType
    });

    await hotel.save();
    res.status(201).json({ message: "Hotel added successfully", hotel });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
