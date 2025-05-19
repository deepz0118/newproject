// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import FoodForm from "./FoodForm";

// // const FoodList = () => {
// //   const [foods, setFoods] = useState([]);
// //   const [showForm, setShowForm] = useState(false);
// //   const [isLoading, setIsLoading] = useState(true);

// //   const fetchFoods = async () => {
// //     try {
// //       setIsLoading(true);
// //       const res = await axios.get("http://localhost:5000/api/food");
// //       setFoods(res.data);
// //     } catch (error) {
// //       console.error("Error fetching food data:", error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchFoods();
// //   }, []);

// //   // Show available foods first
// //   const availableFoods = foods.filter(food => food.available);

// //   return (
// //     <div className="min-h-screen bg-gray-900 p-4 md:p-8 relative">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-8">
// //         <h1 className="text-3xl font-bold text-emerald-400">
// //           Food Donations
// //         </h1>
// //         <button
// //           onClick={() => setShowForm(true)}
// //           className="hidden md:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow-lg hover:shadow-emerald-500/20"
// //         >
// //           <span>+</span>
// //           <span>Add Donation</span>
// //         </button>
// //       </div>

// //       {/* Food Form Modal */}
// //       {showForm && (
// //         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
// //           <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md relative border border-gray-700">
// //             <button
// //               onClick={() => setShowForm(false)}
// //               className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold transition duration-200"
// //             >
// //               ×
// //             </button>
            
// //             <FoodForm
// //               onSuccess={() => {
// //                 setShowForm(false);
// //                 fetchFoods();
// //               }}
// //             />
// //           </div>
// //         </div>
// //       )}

// //       {/* Loading State */}
// //       {isLoading && (
// //         <div className="flex justify-center items-center h-64">
// //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
// //         </div>
// //       )}

// //       {/* Empty State */}
// //       {!isLoading && availableFoods.length === 0 && (
// //         <div className="text-center py-12">
// //           <div className="text-gray-400 text-5xl mb-4">🍽️</div>
// //           <h3 className="text-xl text-gray-300 font-medium mb-2">No available donations</h3>
// //           <p className="text-gray-500">Be the first to add a food donation!</p>
// //           <button
// //             onClick={() => setShowForm(true)}
// //             className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition duration-300"
// //           >
// //             Add Donation
// //           </button>
// //         </div>
// //       )}

// //       {/* Food Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {availableFoods.map((food) => (
// //           <div 
// //             key={food._id} 
// //             className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-emerald-500 transition duration-300 hover:shadow-emerald-500/10"
// //           >
// //             <div className="p-6">
// //               <div className="flex justify-between items-start">
// //                 <h2 className="text-xl font-bold text-white mb-1">{food.hotelName}</h2>
// //                 {food.verified && (
// //                   <span className="bg-emerald-900 text-emerald-400 text-xs px-2 py-1 rounded-full flex items-center">
// //                     <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
// //                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //                     </svg>
// //                     Verified
// //                   </span>
// //                 )}
// //               </div>
              
// //               <p className="text-gray-400 text-sm mb-4">{food.location}</p>
              
// //               <div className="grid grid-cols-2 gap-4 mb-4">
// //                 <div>
// //                   <p className="text-gray-500 text-xs uppercase tracking-wider">Type</p>
// //                   <p className="text-white font-medium">{food.foodType}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-gray-500 text-xs uppercase tracking-wider">Quantity</p>
// //                   <p className="text-white font-medium">{food.quantity} servings</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-gray-500 text-xs uppercase tracking-wider">Expires</p>
// //                   <p className="text-white font-medium">
// //                     {new Date(food.expiry).toLocaleDateString('en-US', { 
// //                       month: 'short', 
// //                       day: 'numeric',
// //                       year: 'numeric'
// //                     })}
// //                   </p>
// //                 </div>
// //                 <div>
// //                   <p className="text-gray-500 text-xs uppercase tracking-wider">Status</p>
// //                   <p className="text-emerald-400 font-medium flex items-center">
// //                     <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
// //                     Available
// //                   </p>
// //                 </div>
// //               </div>
              
// //               <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition duration-200 text-sm font-medium">
// //                 Request Donation
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Floating Add Button (Mobile) */}
// //       <button
// //         onClick={() => setShowForm(true)}
// //         //className="md:hidden fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition duration-300 z-40"
// //        // title="Add Food"
// //       >
// //         +
// //       </button>
// //     </div>
// //   );
// // };

// // export default FoodList;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FoodForm from "./FoodForm";

// const FoodList = () => {
//   const [foods, setFoods] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchFoods = async () => {
//     try {
//       setIsLoading(true);
//       const res = await axios.get("http://localhost:5000/api/food");
//       setFoods(res.data);
//     } catch (error) {
//       console.error("Error fetching food data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRequestFood = async (foodId) => {
//     try {
//       await axios.post(`http://localhost:5000/api/food/request/${foodId}`);
//       alert("Request submitted successfully!");
//       fetchFoods();
//     } catch (error) {
//       console.error("Error requesting food:", error);
//       alert("Failed to request donation.");
//     }
//   };

//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   const availableFoods = foods.filter(food => food.available);

//   return (
//     <div className="min-h-screen bg-gray-900 p-4 md:p-8 relative">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-emerald-400">
//           Food Donations
//         </h1>
//         <button
//           onClick={() => setShowForm(true)}
//           className="hidden md:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow-lg hover:shadow-emerald-500/20"
//         >
//           <span>+</span>
//           <span>Add Donation</span>
//         </button>
//       </div>

//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
//           <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md relative border border-gray-700">
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold transition duration-200"
//             >
//               ×
//             </button>
//             <FoodForm
//               onSuccess={() => {
//                 setShowForm(false);
//                 fetchFoods();
//               }}
//             />
//           </div>
//         </div>
//       )}

//       {isLoading && (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
//         </div>
//       )}

//       {!isLoading && availableFoods.length === 0 && (
//         <div className="text-center py-12">
//           <div className="text-gray-400 text-5xl mb-4">🍽️</div>
//           <h3 className="text-xl text-gray-300 font-medium mb-2">No available donations</h3>
//           <p className="text-gray-500">Be the first to add a food donation!</p>
//           <button
//             onClick={() => setShowForm(true)}
//             className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition duration-300"
//           >
//             Add Donation
//           </button>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {availableFoods.map((food) => (
//           <div 
//             key={food._id} 
//             className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-emerald-500 transition duration-300 hover:shadow-emerald-500/10"
//           >
//             <div className="p-6">
//               <div className="flex justify-between items-start">
//                 <h2 className="text-xl font-bold text-white mb-1">{food.hotelName}</h2>
//                 {food.verified && (
//                   <span className="bg-emerald-900 text-emerald-400 text-xs px-2 py-1 rounded-full flex items-center">
//                     <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     Verified
//                   </span>
//                 )}
//               </div>
//               <p className="text-gray-400 text-sm mb-4">{food.location}</p>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <p className="text-gray-500 text-xs uppercase tracking-wider">Type</p>
//                   <p className="text-white font-medium">{food.foodType}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-xs uppercase tracking-wider">Quantity</p>
//                   <p className="text-white font-medium">{food.quantity} servings</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-xs uppercase tracking-wider">Expires</p>
//                   <p className="text-white font-medium">
//                     {new Date(food.expiry).toLocaleDateString('en-US', {
//                       month: 'short',
//                       day: 'numeric',
//                       year: 'numeric'
//                     })}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-xs uppercase tracking-wider">Status</p>
//                   <p className="text-emerald-400 font-medium flex items-center">
//                     <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
//                     Available
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => handleRequestFood(food._id)}
//                 className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition duration-200 text-sm font-medium"
//               >
//                 Request Donation
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Floating Add Button (Mobile) */}
//       <button
//         onClick={() => setShowForm(true)}
//         className="md:hidden fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition duration-300 z-40"
//         title="Add Food"
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default FoodList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodForm from "./FoodForm";
import { NavLink } from "react-router-dom";

// This component is to handle the user request functionality
const UserRequestForm = ({ onSubmit, onCancel }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userDetails);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md relative border border-gray-700">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold transition duration-200"
        >
          ×
        </button>
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Request Food Donation</h2>

          <div className="mb-4">
            <label className="block text-gray-400">Your Name</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400">Your Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400">Message</label>
            <textarea
              name="message"
              value={userDetails.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFoods = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:5000/api/food");
      setFoods(res.data);
    } catch (error) {
      console.error("Error fetching food data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestFood = async (foodId) => {
    try {
      await axios.post(`http://localhost:5000/api/food/request/${foodId}`);
      alert("Request submitted successfully!");
      fetchFoods();
    } catch (error) {
      console.error("Error requesting food:", error);
      alert("Failed to request donation.");
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const availableFoods = foods.filter(food => food.available);

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-emerald-400">
          Food Donations
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="hidden md:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow-lg hover:shadow-emerald-500/20"
        >
          <span>+</span>
          <span>Add Donation</span>
        </button>
      </div>

      {/* Food Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md relative border border-gray-700">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold transition duration-200"
            >
              ×
            </button>
            <FoodForm
              onSuccess={() => {
                setShowForm(false);
                fetchFoods();
              }}
            />
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && availableFoods.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-5xl mb-4">🍽️</div>
          <h3 className="text-xl text-gray-300 font-medium mb-2">No available donations</h3>
          <p className="text-gray-500">Be the first to add a food donation!</p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Add Donation
          </button>
        </div>
      )}

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableFoods.map((food) => (
          <div
            key={food._id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-emerald-500 transition duration-300 hover:shadow-emerald-500/10"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-white mb-1">{food.hotelName}</h2>
                {food.verified && (
                  <span className="bg-emerald-900 text-emerald-400 text-xs px-2 py-1 rounded-full flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-4">{food.location}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Type</p>
                  <p className="text-white font-medium">{food.foodType}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Quantity</p>
                  <p className="text-white font-medium">{food.quantity} servings</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Expires</p>
                  <p className="text-white font-medium">
                    {new Date(food.expiry).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Status</p>
                  <p className="text-emerald-400 font-medium flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Available
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRequestFood(food._id)}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition duration-200 text-sm font-medium"
              >
                Request Donation
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Button for Mobile */}
      <button
        onClick={() => setShowForm(true)}
        className="md:hidden fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition duration-300 z-40"
        title="Add Food"
      >
        +
      </button>
    </div>
  );
};

export default FoodList;