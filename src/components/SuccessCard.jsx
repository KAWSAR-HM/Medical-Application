import CountUp from "react-countup";

export default function SuccessCard({ icon, number, title }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center md:flex-row md:items-center md:justify-start gap-4 text-center md:text-left">
      {/* Icon */}
      <div className="text-4xl text-blue-800">{icon}</div>

      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          <CountUp end={number} duration={2} />+
        </h2>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
}
