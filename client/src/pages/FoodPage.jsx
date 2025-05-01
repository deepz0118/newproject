// src/pages/FoodPage.jsx
import React, { useEffect, useState } from "react";

export default function FoodPage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // In real project, fetch from server API
    const savedFoods = JSON.parse(localStorage.getItem("foods")) || [];
    setFoods(savedFoods);
  }, []);

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl mb-4 text-teal-400">Available Food</h1>
      {foods.length === 0 ? (
        <p>No food available.</p>
      ) : (
        <ul className="space-y-4">
          {foods.map((food, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{food.name}</h2>
              <p>{food.description}</p>
              <p className="text-sm text-gray-400">Quantity: {food.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
