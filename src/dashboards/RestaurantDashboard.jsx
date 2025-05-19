// src/pages/RestaurantDashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { FaUtensils, FaPlus, FaTrash, FaMapMarkerAlt, FaPhone, FaInfoCircle } from "react-icons/fa";
import { MdDeliveryDining, MdFoodBank } from "react-icons/md";

const RestaurantDashboard = () => {
  const [user, setUser] = useState(null);
  const [foodList, setFoodList] = useState([]);
  const [newFood, setNewFood] = useState("");
  const [foodType, setFoodType] = useState("vegetarian");
  const [quantity, setQuantity] = useState(1);
  const [expiryTime, setExpiryTime] = useState("");
  const [location, setLocation] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [restaurantDetails, setRestaurantDetails] = useState({
    name: "",
    address: "",
    phone: "",
    licenseNumber: ""
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "restaurant") {
      return;
    }
    setUser(storedUser);
    // Load restaurant details from localStorage or API
    const storedDetails = JSON.parse(localStorage.getItem("restaurantDetails")) || {
      name: storedUser.name || "",
      address: "",
      phone: "",
      licenseNumber: ""
    };
    setRestaurantDetails(storedDetails);
  }, []);

  const handleAddFood = () => {
    if (newFood.trim() && expiryTime) {
      const foodItem = {
        id: Date.now(),
        name: newFood,
        type: foodType,
        quantity,
        expiryTime,
        location: location || "Location not set",
        status: "available"
      };
      setFoodList([...foodList, foodItem]);
      setNewFood("");
      setQuantity(1);
      setExpiryTime("");
    }
  };

  const handleRemoveFood = (id) => {
    setFoodList(foodList.filter(item => item.id !== id));
  };

  const getLocation = () => {
    setLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoadingLocation(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  };

  const handleSaveDetails = () => {
    localStorage.setItem("restaurantDetails", JSON.stringify(restaurantDetails));
    alert("Restaurant details saved successfully!");
  };

  if (!user || user.role !== "restaurant") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-emerald-900">
        <div className="text-center p-8 bg-slate-800/80 rounded-xl backdrop-blur-sm border border-red-500/30">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Access Denied</h2>
          <p className="text-slate-300">You must be logged in as a restaurant to access this page.</p>
          <Link 
            to="/login" 
            className="inline-block mt-4 px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white transition duration-300"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-emerald-900 p-6">
         <Navbar />
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-emerald-400 flex items-center">
              <FaUtensils className="mr-3" />
              Restaurant Dashboard
            </h1>
            <p className="text-emerald-200">Welcome, {user.name}</p>
          </div>
          <div className="mt-4 md:mt-0 bg-slate-800/50 p-4 rounded-xl backdrop-blur-sm border border-emerald-500/20">
            <p className="text-sm text-emerald-300 flex items-center">
              <FaInfoCircle className="mr-2" />
              Restaurant ID: {user._id || "N/A"}
            </p>
          </div>
        </div>

        {/* Restaurant Details Form */}
        <div className="bg-slate-800/50 rounded-xl p-6 mb-8 backdrop-blur-sm border border-emerald-500/20">
          <h2 className="text-xl font-semibold text-emerald-300 mb-4 flex items-center">
            <MdFoodBank className="mr-2" />
            Restaurant Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-emerald-200 mb-2">Restaurant Name</label>
              <input
                type="text"
                value={restaurantDetails.name}
                onChange={(e) => setRestaurantDetails({...restaurantDetails, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-emerald-200 mb-2">License Number</label>
              <input
                type="text"
                value={restaurantDetails.licenseNumber}
                onChange={(e) => setRestaurantDetails({...restaurantDetails, licenseNumber: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-emerald-200 mb-2">Address</label>
              <input
                type="text"
                value={restaurantDetails.address}
                onChange={(e) => setRestaurantDetails({...restaurantDetails, address: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-emerald-200 mb-2">Phone Number</label>
              <input
                type="tel"
                value={restaurantDetails.phone}
                onChange={(e) => setRestaurantDetails({...restaurantDetails, phone: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
          <button
            onClick={handleSaveDetails}
            className="mt-6 px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white transition duration-300 flex items-center"
          >
            Save Details
          </button>
        </div>

        {/* Add Food Form */}
        <div className="bg-slate-800/50 rounded-xl p-6 mb-8 backdrop-blur-sm border border-emerald-500/20">
          <h2 className="text-xl font-semibold text-emerald-300 mb-4 flex items-center">
            <FaPlus className="mr-2" />
            Add Food Donation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-emerald-200 mb-2">Food Item</label>
              <input
                type="text"
                placeholder="e.g., Pasta, Salad"
                value={newFood}
                onChange={(e) => setNewFood(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-emerald-200 mb-2">Food Type</label>
              <select
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
              >
                <option value="vegetarian">Vegetarian</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten Free</option>
              </select>
            </div>
            <div>
              <label className="block text-emerald-200 mb-2">Quantity (servings)</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-emerald-200 mb-2">Expiry/Pickup Time</label>
              <input
                type="datetime-local"
                value={expiryTime}
                onChange={(e) => setExpiryTime(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={getLocation}
              disabled={loadingLocation}
              className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition duration-300 flex items-center justify-center"
            >
              {loadingLocation ? (
                "Fetching Location..."
              ) : (
                <>
                  <FaMapMarkerAlt className="mr-2" />
                  {location ? "Update Location" : "Set Current Location"}
                </>
              )}
            </button>
            <button
              onClick={handleAddFood}
              disabled={!newFood || !expiryTime}
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MdDeliveryDining className="mr-2" />
              Add Donation
            </button>
          </div>
          {location && (
            <p className="mt-3 text-emerald-300 text-sm flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Location set: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
            </p>
          )}
        </div>

        {/* Food List */}
        <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-emerald-500/20">
          <h2 className="text-xl font-semibold text-emerald-300 mb-4 flex items-center">
            <FaUtensils className="mr-2" />
            Current Donations
          </h2>
          {foodList.length === 0 ? (
            <div className="text-center py-8 text-slate-400">
              No food donations listed yet. Add your first donation above.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700 text-emerald-300">
                    <th className="py-3 px-4 text-left">Food Item</th>
                    <th className="py-3 px-4 text-left">Type</th>
                    <th className="py-3 px-4 text-left">Quantity</th>
                    <th className="py-3 px-4 text-left">Expiry</th>
                    <th className="py-3 px-4 text-left">Location</th>
                    <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {foodList.map((food) => (
                    <tr key={food.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                      <td className="py-3 px-4 text-white">{food.name}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          food.type === "vegetarian" ? "bg-green-500/20 text-green-400" :
                          food.type === "non-vegetarian" ? "bg-red-500/20 text-red-400" :
                          food.type === "vegan" ? "bg-purple-500/20 text-purple-400" :
                          "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {food.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white">{food.quantity} servings</td>
                      <td className="py-3 px-4 text-white">
                        {new Date(food.expiryTime).toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-white">
                        {typeof food.location === "string" ? food.location : `${food.location.lat.toFixed(2)}, ${food.location.lng.toFixed(2)}`}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleRemoveFood(food.id)}
                          className="text-red-400 hover:text-red-300 p-1 rounded-full hover:bg-red-500/20 transition duration-200"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;