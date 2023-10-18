import ForecastDaily from "./ForecastDaily";

const Forecast = () => {
  return (
    <div className="my-2 text-white">
      <h1 className="mb-1">5 Days Forecast</h1>
      <div className="text-white p-3 bg-slate-900 rounded-lg">
        <ForecastDaily
          logo="cloudy"
          temperature="7"
          date="2 Mar"
          day="Thursday"
        />
        <ForecastDaily
          logo="cloudy"
          temperature="7"
          date="3 Mar"
          day="Friday"
        />
        <ForecastDaily
          logo="cloudy"
          temperature="7"
          date="4 Mar"
          day="Saturday"
        />
        <ForecastDaily
          logo="cloudy"
          temperature="7"
          date="5 Mar"
          day="Sunday"
        />
        <ForecastDaily
          logo="cloudy"
          temperature="7"
          date="6 Mar"
          day="Monday"
        />
      </div>
    </div>
  );
};

export default Forecast;
