import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import doctors from "../data/doctors.json";
import { Link } from "react-router-dom";

export default function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const found = doctors.find((doc) => doc.id === parseInt(id));
    setDoctor(found);
  }, [id]);

  const today = new Date().toLocaleString("en-us", { weekday: "long" });
  const isAvailableToday = doctor?.availability?.includes(today);

//   const handleBooking = () => {
//     const existing = JSON.parse(localStorage.getItem("appointments")) || [];
//     const alreadyBooked = existing.some((item) => item.id === doctor.id);
    
//     if (alreadyBooked) {
//       toast.error(`You already booked an appointment with ${doctor.name}`);
//       return;
//     }

//     const updated = [...existing, doctor];
//     localStorage.setItem("appointments", JSON.stringify(updated));
//     toast.success(`Appointment booked with ${doctor.name}`);
//     navigate("/bookings");
//   };

const handleBooking = () => {
    if (!isAvailableToday) {
      toast.error("Doctor is unavailable today");
      return;
    }
  
    const existing = JSON.parse(localStorage.getItem("appointments")) || [];
    const alreadyBooked = existing.some((item) => item.id === doctor.id);
  
    if (alreadyBooked) {
      toast.error(`You already booked an appointment with ${doctor.name}`);
      return;
    }
  
    const updated = [...existing, doctor];
    localStorage.setItem("appointments", JSON.stringify(updated));
    toast.success(`Appointment booked with ${doctor.name}`);
    navigate("/bookings");
  };
  

  if (!doctor) {
    return (
     
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Doctor Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the doctor you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Go Back to Home
        </Link>
      </div>

      
    );
  };

  
  return (
    <div className="bg-gray-100 py-10 px-4">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Doctor’s Profile Details</h2>
        <p className="text-gray-500 mt-2">
          Book an appointment with {doctor.name}, an experienced {doctor.specialty.toLowerCase()} with {doctor.experience} .
         
        </p>
      </div>

      {/* Doctor Info Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 mb-8">
        <img src={doctor.image} alt={doctor.name} className="w-64 h-auto rounded-lg" />
        <div className="flex-1">
          <h3 className="text-xl font-bold">{doctor.name}</h3>
          <p className="text-gray-600">{doctor.education}</p>
          <p className="mt-2 text-sm text-gray-700">
            <span className="font-medium">Working at</span><br />
            TMSS Medical College & Rafatullah Community Hospital, Bogura
          </p>
          <p className="text-sm text-gray-600 mt-2 border-t border-b border-gray-300 border-dotted py-1">
            <span className="font-medium">Reg No:</span> {doctor.regNo}
          </p>

          {/* Availability Badges */}
          <div className="mt-3">
            <p className="font-medium mb-1">Availability:</p>
            <div className="flex flex-wrap gap-2">
              {doctor.availability.map((day, i) => (
                <span key={i} className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Fee */}
          <p className="mt-4 text-sm">
            <span className="font-medium">Consultation Fee:</span>{" "}
            <span className="text-blue-700 font-semibold">Taka {doctor.fee}</span>{" "}
            <span className="text-gray-500 text-xs">(Incl. Vat)</span>
          </p>
        </div>
      </div>

      {/* Book Appointment Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Book an Appointment</h2>
        <div className="flex justify-between items-center mb-4 border-b border-t border-gray-300 border-dotted pb-2 pt-2">
          <h4 className="font-semibold">Availability :</h4>
          {isAvailableToday ? (
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              Doctor Available Today
            </span>
            
          ) : (
            <span className="bg-gray-100 text-red-500 text-sm px-3 py-1 rounded-full">
              Not Available Today
            </span>
          )}
        </div>

        <p className="bg-yellow-50 text-yellow-800 text-sm px-4 py-3 rounded border border-yellow-200 mb-4">
          ⚠️ Due to high patient volume, we are currently accepting appointments for today only.
        </p>

        {/* <button
          onClick={handleBooking}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
        >
          Book Appointment Now
        </button> */}

<button
  onClick={handleBooking}
  disabled={!isAvailableToday}
  className={`px-6 py-3 rounded-lg w-full transition font-semibold
    ${isAvailableToday
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"}
  `}
>
  {isAvailableToday ? "Book Appointment Now" : "Doctor Unavailable Today"}
</button>

      </div>
    </div>
  );
}
