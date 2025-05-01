// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaLeaf, FaHandHoldingHeart, FaChartPie, FaUtensils } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-emerald-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <div className="bg-emerald-800/20 backdrop-blur-sm rounded-full px-4 py-2 inline-flex items-center mb-6">
              <FaLeaf className="text-emerald-400 mr-2" />
              <span className="text-emerald-300 font-medium">Sustainable Food Network</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
              <span className="block text-emerald-400">From Restaurants</span>
              <span className="block">To Those In Need</span>
            </h1>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl">
              Bridging the gap between surplus food and hunger relief through our intelligent donation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center"
              >
                <FaUtensils className="mr-2" />
                Register Restaurant
              </Link>
              <Link
                to="/signup"
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-slate-500/20 flex items-center justify-center"
              >
                <FaHandHoldingHeart className="mr-2" />
                Join as NGO
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Food donation"
                className="rounded-2xl shadow-2xl border-4 border-emerald-500/20 transform rotate-1 hover:rotate-0 transition duration-500"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-emerald-400/10 rounded-full blur-xl"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 py-16 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-slate-700/30 hover:bg-emerald-800/30 transition duration-300">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1,250+</div>
              <div className="text-emerald-100">Restaurants</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-700/30 hover:bg-emerald-800/30 transition duration-300">
              <div className="text-4xl font-bold text-emerald-400 mb-2">980+</div>
              <div className="text-emerald-100">NGO Partners</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-700/30 hover:bg-emerald-800/30 transition duration-300">
              <div className="text-4xl font-bold text-emerald-400 mb-2">25K+</div>
              <div className="text-emerald-100">Meals Donated</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-700/30 hover:bg-emerald-800/30 transition duration-300">
              <div className="text-4xl font-bold text-emerald-400 mb-2">85+</div>
              <div className="text-emerald-100">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">Our Impact Ecosystem</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              A seamless process that benefits everyone while reducing food waste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-emerald-900/30 p-8 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition duration-500">
              <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <FaUtensils className="text-emerald-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Effortless Donations</h3>
              <p className="text-emerald-100 text-center">
                Restaurants can easily list surplus food with just a few clicks, specifying quantity and pickup times.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-emerald-900/30 p-8 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition duration-500">
              <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <MdDeliveryDining className="text-emerald-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Smart Matching</h3>
              <p className="text-emerald-100 text-center">
                Our algorithm matches donations with nearby NGOs based on food type, quantity, and transportation needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-emerald-900/30 p-8 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition duration-500">
              <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <FaChartPie className="text-emerald-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Impact Analytics</h3>
              <p className="text-emerald-100 text-center">
                Detailed reports show your environmental and social impact, helping you make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-emerald-800/80 to-slate-900/80 rounded-2xl p-12 text-center backdrop-blur-sm border border-emerald-500/20">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Surplus into Smiles?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Join our network of socially responsible businesses and organizations making a real difference.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl shadow-sm text-emerald-900 bg-emerald-400 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}