// // src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-black text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="text-3xl font-bold text-teal-400 hover:text-teal-600">
//             Food Donation Portal
//           </Link>
//           <div className="space-x-4">
//             <Link
//               to="/"
//               className="text-lg text-white hover:text-teal-400 transition duration-200"
//             >
//               Home
//             </Link>
//             <Link
//               to="/login"
//               className="text-lg text-white hover:text-teal-400 transition duration-200"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="text-lg text-white hover:text-teal-400 transition duration-200"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// // 
// src/components/Navbar.jsx
// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-teal-400 hover:text-teal-600">
            Food Donation Portal
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-lg hover:text-teal-400">Home</Link>

            {user?.role === "restaurant" && (
              <>
                <Link to="/add-food" className="hover:text-teal-400">Add Food</Link>
              </>
            )}

            {!user ? (
              <>
                <Link to="/login" className="text-lg hover:text-teal-400">Login</Link>
                <Link to="/signup" className="text-lg hover:text-teal-400">Sign Up</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="text-lg hover:text-teal-400">Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
