import ForecastDaily from "./ForecastDaily";
import { useContext } from "react";
import GContext from "../Contexts/GContext";
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = () => {
  const { highlightedData } = useContext(GContext);

const Forecast = () => {
  return (
    <div className="my-5 text-white">
      <h1 className="mb-1">5 Days Forecast</h1>
      <div className="text-white p-3 bg-slate-900 rounded-lg">
        {highlightedData &&
          highlightedData.map((highlightedData, index) => {
            return (
              <ForecastDaily
                key={index}
                logo={highlightedData.weather[0].icon}
                temperature={highlightedData.main.temp}
                date={
                  highlightedData.dateTime.getDate() +
                  " " +
                  month[highlightedData.dateTime.getMonth()]
                }
                day={days[highlightedData.dateTime.getDay()]}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Forecast;
