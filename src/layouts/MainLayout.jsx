import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LoadingContext } from "../context/LoadingContext";

export default function MainLayout() {
  const location = useLocation();
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  // ✅ Detect error page route
  const isErrorPage = location.pathname === "/404" || location.pathname === "/error";

  // ✅ Trigger loader on route change
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>

      {/* ✅ Only show footer on non-error pages */}
      {!isErrorPage  && <Footer />}
    </div>
  );
}