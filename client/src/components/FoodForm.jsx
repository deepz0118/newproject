import React, { useState } from "react";
import axios from "axios";

const FoodForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    hotelName: "",
    location: "",
    foodType: "",
    quantity: "",
    expiry: "",
    available: false,
    verified: false,
    ownerLicense: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:5000/api/food", formData);
      setMessage("✅ Food donation added successfully.");
      if (onSuccess) onSuccess();

      // Reset form
      setFormData({
        hotelName: "",
        location: "",
        foodType: "",
        quantity: "",
        expiry: "",
        available: false,
        verified: false,
        ownerLicense: "",
      });
    } catch (error) {
      console.error("Error adding food:", error);
      setMessage("❌ Failed to submit. Please check all fields.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-700">Add Food Donation</h2>

      <input
        type="text"
        name="hotelName"
        placeholder="Hotel Name"
        value={formData.hotelName}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="text"
        name="foodType"
        placeholder="Food Type"
        value={formData.foodType}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="text"
        name="quantity"
        placeholder="Quantity (e.g., 10 plates)"
        value={formData.quantity}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="date"
        name="expiry"
        value={formData.expiry}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="text"
        name="ownerLicense"
        placeholder="Owner License"
        value={formData.ownerLicense}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          <span>Available</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="verified"
            checked={formData.verified}
            onChange={handleChange}
          />
          <span>Verified</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {message && <p className="text-sm text-center text-red-500">{message}</p>}
    </form>
  );
};

export default FoodForm;
