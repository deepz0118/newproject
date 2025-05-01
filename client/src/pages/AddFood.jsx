// src/pages/AddFood.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFood() {
  const [form, setForm] = useState({ name: "", description: "", quantity: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingFoods = JSON.parse(localStorage.getItem("foods")) || [];
    const updatedFoods = [...existingFoods, form];
    localStorage.setItem("foods", JSON.stringify(updatedFoods));
    alert("Food added!");
    navigate("/food");
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl mb-6 text-teal-400">Add Food</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="name"
          placeholder="Food Name"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
          Submit
        </button>
      </form>
    </div>
  );
}
