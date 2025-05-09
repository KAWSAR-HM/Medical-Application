import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md px-4">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Phudu" className="h-8 w-auto" />
          <span className="text-xl font-semibold text-gray-800">Phudu</span>
        </Link>

        {/* ✅ Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* ✅ Desktop Nav + Emergency */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/bookings" className="hover:text-blue-600">My-Bookings</Link>
          <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>

         
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
             {/* ✅ Emergency Button */}
          <Link
            to="/emergency"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Emergency
          </Link>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-700">
          <Link to="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/bookings" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>My-Bookings</Link>
          <Link to="/blogs" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact Us</Link>

          {/* ✅ Emergency Button for Mobile */}
          <Link
            to="/emergency"
            className="block bg-blue-600 text-white text-center mt-2 px-5 py-2 rounded-full hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Emergency
          </Link>
        </div>
      )}
    </nav>
  );
}
