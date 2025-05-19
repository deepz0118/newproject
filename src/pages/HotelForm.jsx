import React, { useState } from "react";
import axios from "axios";

const HotelForm = () => {
  const [formData, setFormData] = useState({
    hotelName: "",
    location: "",
    foodAvailable: "",
    verified: "",
    address: "",
    phone: "",
    email: "",
    ownerName: "",
    foodType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/hotels", formData);
      alert("Hotel added successfully");
      // Optionally, clear the form
      setFormData({
        hotelName: "",
        location: "",
        foodAvailable: "",
        verified: "",
        address: "",
        phone: "",
        email: "",
        ownerName: "",
        foodType: "",
      });
    } catch (error) {
      console.error("Error adding hotel:", error);
      alert("Failed to add hotel");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Hotel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Hotel Name", name: "hotelName" },
          { label: "Location", name: "location" },
          { label: "Food Available", name: "foodAvailable" },
          { label: "Verified (true/false)", name: "verified" },
          { label: "Address", name: "address" },
          { label: "Phone", name: "phone", type: "tel" },
          { label: "Email", name: "email", type: "email" },
          { label: "Owner Name", name: "ownerName" },
          { label: "Food Type", name: "foodType" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
