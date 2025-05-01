import React, { useState } from "react";
import axios from "axios";

const FoodForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    hotelName: "",
    location: "",
    foodType: "",
    quantity: "",
    expiry: "",
    available: true,
    ownerLicense: "",
    verified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/food", formData);
      alert("Food added");
      onSuccess();
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      {["hotelName", "location", "foodType", "quantity", "ownerLicense"].map((field) => (
        <input key={field} name={field} value={formData[field]} onChange={handleChange}
          placeholder={field} className="block p-2 m-2 border rounded w-full" required />
      ))}
      <input type="date" name="expiry" value={formData.expiry} onChange={handleChange}
        className="block p-2 m-2 border rounded w-full" required />
      <label className="m-2">
        Available:
        <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
      </label>
      <label className="m-2">
        Verified:
        <input type="checkbox" name="verified" checked={formData.verified} onChange={handleChange} />
      </label>
      <button type="submit" className="bg-green-500 text-white p-2 rounded m-2">Submit</button>
    </form>
  );
};

export default FoodForm;
