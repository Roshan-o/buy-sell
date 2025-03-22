import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { Menu, X } from "lucide-react";

function getUserIdFromToken() {
  const token = localStorage.getItem("userToken");
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.user;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}

function Navbar() {
  const navigate = useNavigate();
  const info = getUserIdFromToken();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const profile_handle = () => {
    if (info) {
      navigate(`/profile/${info.userId}`);
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    navigate("/");
  };

  const handle_search = () => {
    navigate("/home/items", { state: { search: search, category: category } });
  };

  return (
    <nav className="bg-white shadow-md py-3 px-5 flex items-center justify-between">

      <div className="flex items-center space-x-4">
        <button onClick={profile_handle} className="text-gray-700 font-semibold">
          {info?.userDetails?.lastname || "Profile"}
        </button>
        <Link to="/home" className="hidden md:inline text-gray-700 font-semibold">Home</Link>
        <Link to="/cart" className="hidden md:inline text-gray-700 font-semibold">Cart</Link>
      </div>


      <div className="hidden md:flex flex-grow items-center justify-center space-x-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search items..."
          className="bg-gray-200 h-10 px-2 rounded w-full max-w-sm"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-200 h-10 rounded px-2"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Cloths">Cloths</option>
          <option value="Stationary">Stationary</option>
          <option value="Food">Food</option>
          <option value="Fitness">Fitness</option>
        </select>
        <button onClick={handle_search} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>


      <div className="hidden md:flex items-center space-x-4">
        <Link to="/orders" className="text-gray-700 font-semibold">Orders</Link>
        <Link to="/delivary" className="text-gray-700 font-semibold">Delivery</Link>
        <Link to="/history" className="text-gray-700 font-semibold">History</Link>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>


      <div className={`absolute top-14 left-0 w-full bg-white shadow-md transition-all duration-300 ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"}`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/home" className="text-gray-700 font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/cart" className="text-gray-700 font-semibold" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link to="/orders" className="text-gray-700 font-semibold" onClick={() => setIsOpen(false)}>Orders</Link>
          <Link to="/delivary" className="text-gray-700 font-semibold" onClick={() => setIsOpen(false)}>Delivery</Link>
          <Link to="/history" className="text-gray-700 font-semibold" onClick={() => setIsOpen(false)}>History</Link>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
      <Toaster />
    </nav>
  );
}

export default Navbar;
