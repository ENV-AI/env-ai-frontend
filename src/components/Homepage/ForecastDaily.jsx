import { FaMoon } from "react-icons/fa";

const ForecastDaily = ({ logo, temperature, date, day }) => {
  return (
    <div className="flex justify-between items-center gap-3">
      <div className="w-1/3 flex justify-around items-center">
        <text>{logo === "cloudy" ? <FaMoon /> : ""}</text>
        <div className="flex justify-start items-start">
          <span>{temperature}</span>
          <span className="text-sm -mt-1">o</span>
        </div>
      </div>
      <div className="w-2/3 flex justify-between items-center">
        <text className="text-gray-400">{date}</text>
        <text className="text-gray-400">{day}</text>
      </div>
    </div>
  );
};

export default ForecastDaily;
