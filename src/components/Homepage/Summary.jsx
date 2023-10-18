import { FaCloud, FaCalendar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Summary = () => {
  return (
    <div className="my-5 text-white p-3 bg-slate-900 rounded-lg">
      <div>
        Now
        <br />
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-start">
            <span className="text-5xl mr-1">5</span>
            <span className="text-md">o</span>
            <span className="text-lg mt-1">C</span>
          </div>
          <div>
            <FaCloud className="mr-4 text-5xl" />
          </div>
        </div>
        <p className="mt-2 mb-6 text-sm text-gray-400">Broken Clouds</p>
        <hr className="mb-1 bg-stone-400" />
        <div className="p-1 flex justify-start items-center text-sm text-gray-400">
          <FaCalendar className="mr-3" />
          <p>Sunday 1, October</p>
        </div>
        <div className="p-1 flex justify-start items-center text-sm text-gray-400">
          <IoLocationSharp className="mr-3" />
          <p>Dhaka, BD</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
