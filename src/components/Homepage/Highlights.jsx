import { BiLogoTailwindCss, BiMoon } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiWindBold } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";

const Highlights = () => {
  return (
    <div className="my-5 text-white p-3 bg-slate-900 rounded-lg">
      <h1 className="mb-5 text-xl">Todays Highlights</h1>
      {/* Information Card Blocks */}
      <div className="flex flex-wrap justify-start items-center gap-3">
        {/* Humidity */}
        <div className="p-3 bg-slate-950 text-gray-400 rounded-lg">
          <h6 className="text-md">Humidity</h6>
          <div className="py-2 flex justify-between items-center gap-5">
            <WiHumidity className="text-3xl" />
            <text className="text-3xl">
              82<span className="text-xs"> %</span>
            </text>
          </div>
        </div>
        {/* wind */}
        <div className="p-3 bg-slate-950 text-gray-400 rounded-lg">
          <h6 className="text-md">Wind</h6>
          <div className="py-2 flex justify-between items-center gap-5">
            <PiWindBold className="text-2xl" />
            <text className="text-3xl">
              4.57<span className="text-xs"> m/s</span>
            </text>
          </div>
        </div>
        {/* Pressure */}
        <div className="p-3 bg-slate-950 text-gray-400 rounded-lg">
          <h6 className="text-md">Pressure</h6>
          <div className="py-2 flex justify-between items-center gap-5">
            <BiLogoTailwindCss className="text-3xl" />
            <text className="text-3xl">
              1025<span className="text-xs"> hPa</span>
            </text>
          </div>
        </div>
        {/* Visibility */}
        <div className="p-3 bg-slate-950 text-gray-400 rounded-lg">
          <h6 className="text-md">Visibility</h6>
          <div className="py-2 flex justify-between items-center gap-5">
            <FaEye className="text-2xl" />
            <text className="text-3xl">
              10<span className="text-xs"> km</span>
            </text>
          </div>
        </div>
        {/* Feels Like */}
        <div className="p-3 bg-slate-950 text-gray-400 rounded-lg">
          <h6 className="text-md">Feels Like</h6>
          <div className="py-2 flex justify-between items-center gap-5">
            <FaTemperatureEmpty className="text-2xl" />
            <div className="flex justify-start items-start">
              <span className="text-3xl">25</span>
              <span className="text-sm -mt-1">o</span>
            </div>
          </div>
        </div>
      </div>
      {/* Sunrise & Sunset */}
      <div className="mt-5 flex flex-start">
        <div className="p-4 bg-slate-950 text-gray-400 rounded-lg">
          <h6 className="mb-2 text-md">Sunrise & Sunset</h6>
          <div className="flex justify-start items-center gap-10">
            <div className="flex justify-center items-center gap-3">
              <MdOutlineWbSunny className="text-3xl" />
              <div className="text-center">
                <p className="mb-1 text-sm text-gray-500">Sunrise</p>
                <p className="text-xl">5:52 AM</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <BiMoon className="text-3xl" />
              <div className="text-center">
                <p className="mb-1 text-sm text-gray-500">Sunset</p>
                <p className="text-xl">5:23 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
