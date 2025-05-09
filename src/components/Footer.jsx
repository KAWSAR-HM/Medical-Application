import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-white border-t py-10 text-center">
      {/* Logo + Name */}
      <div className="flex justify-center items-center gap-2 mb-4">
      <img src={logo} alt="Phudu" className="h-8 w-auto" />

        <span className="text-xl font-bold text-gray-800">Phudu</span>
      </div>

      {/* ✅ Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 mb-6 text-gray-600 text-sm">
  <Link to="/" className="hover:text-blue-600">Home</Link>
  <Link to="/bookings" className="hover:text-blue-600">My-Bookings</Link>
  <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
  <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
</nav>


      {/* Divider */}
      <hr className="w-3/4 mx-auto mb-6 border-gray-200" />

      {/* Social Icons */}
      <div className="flex justify-center gap-4 text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF className="text-blue-600 hover:scale-110 transition" />
        </a>
        <a href="https://x.com" target="_blank" rel="noreferrer">
          <FaXTwitter className="text-black hover:scale-110 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="text-blue-700 hover:scale-110 transition" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube className="text-red-600 hover:scale-110 transition" />
        </a>
      </div>
    </footer>
  );
}
