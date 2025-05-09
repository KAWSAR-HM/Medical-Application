import { FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition text-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-[280px] object-cover rounded-lg"
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
