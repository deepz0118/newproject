import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodForm from "./FoodForm";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchFoods = async () => {
    const res = await axios.get("http://localhost:5000/api/food");
    setFoods(res.data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="p-4">
      <button onClick={() => setShowForm(!showForm)} className="bg-blue-500 text-white px-4 py-2 rounded">
        {showForm ? "Close Form" : "Add Food +"}
      </button>
      {showForm && <FoodForm onSuccess={fetchFoods} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {foods.map((food) => (
          <div key={food._id} className="p-4 border rounded shadow">
            <h2 className="font-bold text-lg">{food.hotelName}</h2>
            <p>Location: {food.location}</p>
            <p>Type: {food.foodType}</p>
            <p>Quantity: {food.quantity}</p>
            <p>Expiry: {new Date(food.expiry).toLocaleDateString()}</p>
            <p>Available: {food.available ? "Yes" : "No"}</p>
            <p>Verified: {food.verified ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
