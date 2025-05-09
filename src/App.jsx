import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Bookings from "./pages/Bookings";
import DoctorDetails from "./pages/DoctorDetails";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="doctors/:id" element={<DoctorDetails />} />
        <Route path="*" element={<ErrorPage />} />
     
  
      </Route>


    </Routes>

    
  );
}

export default App;
