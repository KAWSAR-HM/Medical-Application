
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MinimalLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      {/* ❌ No Footer here */}
    </div>
  );
}
