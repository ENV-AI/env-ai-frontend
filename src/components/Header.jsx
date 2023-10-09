import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Header = () => {
  return (
    <div className="h-16 px-5 bg-slate-800 flex justify-between items-center">
      <div className="font-bold text-xl text-white">Env AI</div>

      <div className="h-[40px] w-[30%] px-3 flex justify-start items-center bg-slate-700 border border-slate-400 rounded-full text-white text-sm">
        <BiSearch className="mr-2" />
        <input
          className="h-full w-full rounded-full outline-none bg-slate-700"
          type="text"
          id="searchCity"
          placeholder="Search City..."
        />
      </div>
      {/* <button type="button">Click Me!</button> */}

      <div className="flex justify-center items-center text-white rounded-full w-[150px] py-1 bg-indigo-300 text-sm cursor-pointer">
        <BiCurrentLocation className="mr-2" />
        Current Location
      </div>
    </div>
  );
};

export default Header;
