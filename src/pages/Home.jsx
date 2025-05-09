import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import doctorData from "../data/doctors.json";
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor4.jpg";
import { FaRegAddressCard } from "react-icons/fa";
import { FaUserMd, FaRegStar, FaUsers, FaUserFriends } from "react-icons/fa";
import SuccessCard from "../components/SuccessCard";
import { LoadingContext } from "../context/LoadingContext";


// ✅ Doctor Card Component (internal)
function DoctorCard({ doctor }) {
    const { isLoading } = useContext(LoadingContext);
    
    if (isLoading) {
        return <div className="text-center py-20 text-blue-600">Loading doctor profile...</div>;
    }
    
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition text-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-56 object-cover rounded-lg"
      />
      <div className="mt-3 flex justify-center gap-2 text-sm">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
          {doctor.available ? "Available" : "Unavailable"}
        </span>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {doctor.experience}
        </span>
      </div>
      <h3 className="font-bold mt-2">{doctor.name}</h3>
      <p className="text-sm text-gray-600">{doctor.education}</p>
      <div className="flex justify-center items-center gap-1 text-sm mt-2 text-gray-500">
        <FaRegAddressCard />
        Reg No: {doctor.regNo}
      </div>
      <Link
        to={`/doctors/${doctor.id}`}
        className="block border border-blue-600 text-blue-600 rounded-full mt-4 py-2 font-medium hover:bg-blue-600 hover:text-white transition"
      >
        View Details
      </Link>
    </div>
  );
}

// ✅ Home Page
export default function Home() {
   
  const [showAll, setShowAll] = useState(false);
  const [doctors, setDoctors] = useState([]);

 

  useEffect(() => {
    setDoctors(doctorData);
  }, []);

  const visibleDoctors = showAll ? doctors : doctors.slice(0, 6);

  return (
    <div>

      {/* ✅ Banner Section */}
      <section className="bg-gray-100 py-1 px-4">
        <div className="max-w-6xl mx-auto  rounded-3xl shadow-md p-10 text-center relative overflow-hidden bg-gradient-to-b from-gray-200 to-white">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dependable Care, Backed by Trusted Professionals.
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it’s a routine
            checkup or urgent consultation, book appointments in minutes and receive
            quality care you can trust.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            <input
              type="text"
              placeholder="Search any doctor..."
              className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Search Now
            </button>
          </div>

          {/* Doctor Images */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <img src={doctor1} alt="Doctor 1" className="w-64 min-h-[170px] rounded-xl shadow" />
            <img src={doctor2} alt="Doctor 2" className="w-64 min-h-[170px] rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* ✅ Our Best Doctors Section */}
      <section className="bg-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Best Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition"
            >
              View All Doctors
            </button>
          </div>
        )}
      </section>
  {/* ✅ Success Section */}
  <section className="bg-gray-100 py-16 px-4">
  <div className="max-w-6xl mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-800 mb-2">We Provide Best Medical Services</h2>
    <p className="text-gray-600 max-w-xl mx-auto">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    <SuccessCard icon={<FaUserMd />} number={199} title="Total Doctors" />
    <SuccessCard icon={<FaRegStar />} number={467} title="Total Reviews" />
    <SuccessCard icon={<FaUsers />} number={1900} title="Patients" />
    <SuccessCard icon={<FaUserFriends />} number={300} title="Total Staffs" />
  </div>
</section>

    </div>
  );
}
