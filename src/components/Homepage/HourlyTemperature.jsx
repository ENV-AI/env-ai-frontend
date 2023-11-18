// import { FaCloud, FaMoon } from "react-icons/fa";
// import { MdSunny } from "react-icons/md";

const HourlyTemperature = ({ time, weather, temperature }) => {
  return (
    <div className="w-24 flex flex-col justify-center items-center gap-3 text-gray-400 p-3 bg-slate-900 rounded-lg">
      <p>{time}</p>

      <img className="h-10 text-3xl text-white" src={`/${weather}.png`} />
      <div className="flex justify-start items-start">
        <span>{temperature}</span>
        <span className="text-sm -mt-1">o</span>
        <span className="text-lg"> C</span>

        {/* <div className="w-24 flex flex-col justify-center items-center gap-3 text-gray-400 p-3 bg-slate-900 rounded-lg">
          <text>{time}</text>
          {weather === "cloudy" ? (
            <FaCloud className="h-10 text-3xl text-white" />
          ) : weather === "sunny" ? (
            <MdSunny className="h-10 text-3xl text-amber-300" />
          ) : (
            <FaMoon className="h-10 text-2xl text-white" />
          )}
          <div className="flex justify-start items-start">
            <span>{temperature}</span>
            <span className="text-sm -mt-1">o</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HourlyTemperature;
