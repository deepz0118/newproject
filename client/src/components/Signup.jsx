import React, { useState } from "react";
import { Roles } from "../utils/roles";
import api from "../api"; // Ensure this is configured correctly

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: Roles.RESTAURANT,
  });
  const [error, setError] = useState(""); // To handle error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // For handling loading state

  // Handle input change for form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setIsSubmitting(true);

    try {
      // Make POST request to API
      const response = await api.post("/auth/signup", form);
      if (response.status === 201) {
        alert("User registered successfully");
        // Optionally, redirect to login or homepage
      }
    } catch (err) {
      console.error(err);
      setError("Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value={Roles.RESTAURANT}>Restaurant</option>
            <option value={Roles.NGO}>NGO</option>
            <option value={Roles.ADMIN}>Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
