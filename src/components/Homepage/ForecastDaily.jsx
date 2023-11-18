<<<<<<< HEAD
=======
import { FaMoon } from "react-icons/fa";

>>>>>>> 16bf548d9f3b511aeca86c3d325f6f418911f82f
const ForecastDaily = ({ logo, temperature, date, day }) => {
  return (
    <div className="flex justify-between items-center gap-3">
      <div className="w-1/3 flex justify-around items-center">
<<<<<<< HEAD
        <img className="h-10 text-3xl text-white" src={`/${logo}.png`} />
        <div className="flex justify-start items-start">
          <span>{temperature}</span>
          <span className="text-sm -mt-1 pl-1">o</span>
          <span className="text-sm mt-1">C</span>
        </div>
      </div>
      <div className="w-2/3 flex justify-between items-center">
        <p className="text-gray-400">{date}</p>
        <p className="text-gray-400">{day}</p>
=======
        <text>{logo === "cloudy" ? <FaMoon /> : ""}</text>
        <div className="flex justify-start items-start">
          <span>{temperature}</span>
          <span className="text-sm -mt-1">o</span>
        </div>
      </div>
      <div className="w-2/3 flex justify-between items-center">
        <text className="text-gray-400">{date}</text>
        <text className="text-gray-400">{day}</text>
>>>>>>> 16bf548d9f3b511aeca86c3d325f6f418911f82f
      </div>
    </div>
  );
};

export default ForecastDaily;
