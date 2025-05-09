import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import toast from "react-hot-toast";

// ✅ Custom Triangle Shape for Bar
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// ✅ Color palette for bars
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4F81", "#A28BFF"];

export default function Bookings() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  const handleCancel = (id) => {
    const updated = appointments.filter((d) => d.id !== id);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    toast.success("Appointment cancelled");
  };

  const chartData = appointments.map((doc) => ({
    name: doc.name,
    fee: doc.fee,
  }));

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* ✅ Chart */}
        {appointments.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow mb-8">
            <h2 className="text-xl font-bold mb-4">Appointment Fees Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}Tk`} />
                <Tooltip />
                <Bar
                  dataKey="fee"
                  shape={<TriangleBar />}
                  label={{ position: "top", formatter: (value) => `${value}Tk` }}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

         {/* Section Title */}
         <h2 className="text-2xl font-bold text-center mb-2">My Today Appointments</h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Our platform connects you with verified, experienced doctors...
        </p>

        {/* Appointment Cards */}
        {appointments.length > 0 ? (
          <div className="space-y-6">
            {appointments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow p-5 block md:flex-row justify-between items-start md:items-center"
              >
                <div className="mb-4 md:flex md:flex-row justify-between items-center border-b border-dotted pb-4">
                  <div className=" block md:flex-row md:items-center p-2">
                    <h3 className="font-bold md:mr-4">{doc.name}</h3>
                    <p className="text-sm text-gray-600 md:mt-0 mt-2">{doc.education}</p>
                  </div>
                  <div className="block md:flex md:flex-row md:items-center">
                    <p className="text-sm text-gray-500 mt-1 md:mt-0">
                      Appointment Fee: <span className="font-semibold text-red-600">{doc.fee} Taka + Vat</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCancel(doc.id)}
                  className="mt-4 md:mt-0 border border-red-500 text-white-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition w-full "
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-20 text-gray-500 text-xl">
            No Appointments Found
          </div>
        )}
      </div>
    </div>
  );
}
