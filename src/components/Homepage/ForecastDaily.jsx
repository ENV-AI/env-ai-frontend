// import { FaMoon } from "react-icons/fa";

const ForecastDaily = ({ logo, temperature, date, day }) => {
  return (
    <div className="flex justify-between items-center gap-3">
      <div className="w-1/3 flex justify-around items-center">
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
      </div>
    </div>
  );
};

export default ForecastDaily;
