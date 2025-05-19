import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const RequestedFoodList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/food/requests");
      setRequests(res.data);
    } catch (error) {
      console.error("Error fetching food requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
         <div className="mb-4">
      <Link
        to="/"
        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded transition duration-300"
      >
        ← Back to Home
      </Link>
    </div>
      <h1 className="text-3xl font-bold text-emerald-400 mb-6">Requested Food Donations</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      ) : requests.length === 0 ? (
        <div className="text-center text-gray-400">No food requests yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requests.map((request) => (
            <div
              key={request._id}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <div className="mb-2">
                <h2 className="text-xl font-bold text-white">
                  {request.foodName}
                </h2>
                <p className="text-sm text-gray-400">Requested From: {request.foodLocation}</p>
              </div>

              <div className="mt-4 text-sm text-gray-300 space-y-2">
                <p>
                  <strong className="text-gray-400">Name:</strong> {request.userName}
                </p>
                <p>
                  <strong className="text-gray-400">Email:</strong> {request.userEmail}
                </p>
                <p>
                  <strong className="text-gray-400">Location:</strong> {request.foodLocation}
                </p>
                <p>
                  <strong className="text-gray-400">Message:</strong> {request.userMessage || "N/A"}
                </p>
              </div>

              {/* Optional: add approve/reject buttons */}
              {/* <div className="mt-4 flex space-x-2">
                <button className="px-4 py-1 bg-green-600 text-white rounded">Approve</button>
                <button className="px-4 py-1 bg-red-600 text-white rounded">Decline</button>
              </div> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestedFoodList;
