import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../MyContext";
import { Toaster, toast } from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();
  const { info, change_info } = useAppContext();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const notifye = (message) => toast.error(message);
  const notifys = (message) => toast.success(message);

  // Handle profile navigation
  const profile_handle = () => {
    if (info && info.userId) {
      navigate(`/profile/${info.userId}`);
    } else {
      console.error("User ID not found in context");
      navigate("/"); // Redirect to home if no user
    }
  };

  // Handle logout
  const handleLogout = () => {
    change_info({});  // Clear user info from context
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    navigate("/"); // Redirect to home page after logout
  };

  // Handle search navigation
  const handle_search = () => {
    navigate('/home/items', { state: {search: search,category: category } });
  };

  return (
    <nav className="py-2 flex justify-center gap-x-10 items-center">
      {/* Profile button */}
      <button
        onClick={profile_handle}
        className="rounded-2xl text-sm px-4 h-10 hover:border content-center"
      >
        Profile
      </button>

      {/* Home Link */}
      <Link
        to="/home"
        className="rounded-2xl text-sm px-4 h-10 hover:border content-center"
      >
        Home
      </Link>

      {/* Cart Link */}
      <Link
        to="/cart"
        className="rounded-2xl text-sm px-4 h-10 hover:border content-center"
      >
        Cart
      </Link>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search items..."
          className="bg-gray-300 h-10 px-2 rounded"
        />
      </div>

      {/* Category Selection */}
      <div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-300 h-10 rounded"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Cloths">Cloths</option>
          <option value="Stationary">Stationary</option>
          <option value="Food">Food</option>
          <option value="Fitness">Fitness</option>
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handle_search}
        className="bg-gray-300 rounded text-sm px-4 h-10 hover:border"
      >
        Search
      </button>

      {/* Orders Link */}
      <Link
        to="/orders"
        className="rounded-2xl text-sm px-4 h-10 hover:border content-center"
      >
        Orders
      </Link>

      {/* History Link */}
      <Link
        to="/history"
        className="rounded-2xl text-sm px-4 h-10 hover:border content-center"
      >
        History
      </Link>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="hover:bg-red-500 rounded-2xl text-sm h-8 px-4 hover:drop-shadow-md content-center"
      >
        Logout
      </button>
      <Toaster />
    </nav>
  );
}

export default Navbar;
