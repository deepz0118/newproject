import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminDashboard from "./dashboards/AdminDashboard";
import NGODashboard from "./dashboards/NGODashboard";
import RestaurantDashboard from "./dashboards/RestaurantDashboard";
import PrivateRoute from "./components/PrivateRoute";
import { Roles } from "./utils/roles";
import Home from "./pages/Home"; 
import './index.css';
import AddFood from "./pages/AddFood";
import FoodPage from "./pages/FoodPage";
import HotelForm from "./pages/HotelForm";
import FoodForm from "./components/FoodForm";
import FoodList from "./components/FoodList";
import RequestedFoodList from "./pages/RequestedFoodList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Add this */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/food" element={<FoodPage/>}/>
        <Route path="/add-food" element={<FoodForm/>}/>
        <Route path="/add-hotel" element={<FoodList />} />
        <Route path="/restaurant" element={<RestaurantDashboard />} />
        <Route path="/requested-food" element={<RequestedFoodList/>}/>
        <Route path='/donation' element={<HotelForm/>}/>
        {/* <Route path="/admin" element={
          <PrivateRoute role={Roles.ADMIN}><AdminDashboard /></PrivateRoute>
        } /> */}
        <Route path="/admin" element={<AdminDashboard />
        } />
        <Route path="/ngo" element={
          <PrivateRoute role={Roles.NGO}><NGODashboard /></PrivateRoute>
        } />
        <Route path="/restaurant" element={
          <PrivateRoute role={Roles.RESTAURANT}><RestaurantDashboard /></PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
