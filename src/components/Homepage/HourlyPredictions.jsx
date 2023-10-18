import HourlyTemperature from "./HourlyTemperature";

const HourlyPredictions = () => {
  return (
    <div className="my-5 text-white">
      <h1 className="mb-1">Today at</h1>
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div>
          <HourlyTemperature time="9 PM" weather="night" temperature="21" />
          <div className="w-24 mt-4 text-gray-400 p-3 text-center bg-slate-900 rounded-lg">
            9 PM
          </div>
        </div>
        <div>
          <HourlyTemperature time="12 AM" weather="cloudy" temperature="17" />
          <div className="w-24 mt-4 text-gray-400 p-3 text-center bg-slate-900 rounded-lg">
            12 PM
          </div>
        </div>
        <div>
          <HourlyTemperature time="3 AM" weather="night" temperature="15" />
          <div className="w-24 mt-4 text-gray-400 p-3 text-center bg-slate-900 rounded-lg">
            3 AM
          </div>
        </div>
        <div>
          <HourlyTemperature time="6 AM" weather="cloudy" temperature="14" />
          <div className="w-24 mt-4 text-gray-400 p-3 text-center bg-slate-900 rounded-lg">
            6 AM
          </div>
        </div>
        <div>
          <HourlyTemperature time="9 AM" weather="sunny" temperature="19" />
          <div className="w-24 mt-4 text-gray-400 p-3 text-center bg-slate-900 rounded-lg">
            9 AM
          </div>
        </div>
        <div>
          <HourlyTemperature time="12 PM" weather="sunny" temperature="25" />
          <div className="w-24 mt-4 text-gray-400 p-3 text-center bg-slate-900 rounded-lg">
            12 PM
          </div>
        </div>
        <div>
          <HourlyTemperature time="3 PM" weather="sunny" temperature="24" />
          <div className="w-24 mt-4 text-gray-400 p-3 text-center bg-slate-900 rounded-lg">
            3 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyPredictions;
