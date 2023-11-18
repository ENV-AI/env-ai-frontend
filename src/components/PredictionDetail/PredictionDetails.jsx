import Header from "../Homepage/Header";
import { useEffect, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DataTable from "react-data-table-component";
import GContext from "../Contexts/GContext";
const domain = "http://182.163.112.207:8052";

const PredictionDetails = () => {
  const [data, setData] = useState([]);
  const [forecastType, setForecastType] = useState("1");
  const [daysCount, setDaysCounts] = useState("1");
  const [loading, setLoading] = useState(false);
  const { startDate } = useContext(GContext);

  const columns = [
    {
      name: "Day",
      selector: (row) => new Date(row.date).toLocaleString(),
      sortable: true,
    },
    {
      name: "Temperature (°C)",
      selector: (row) => row.future_predictions_T2M.toFixed(2),
      sortable: true,
    },
    {
      name: "Humidity (%)",
      selector: (row) => row.future_predictions_RH2M.toFixed(2),
      sortable: true,
    },
    {
      name: "Pressure (KPa)",
      selector: (row) => row.future_predictions_PS.toFixed(2),
      sortable: true,
    },
    {
      name: "Wind (m/s)",
      selector: (row) => row.future_predictions_WS10M.toFixed(2),
      sortable: true,
    },
    {
      name: "Precipitation (mm/hr)",
      selector: (row) => row.future_predictions_PRECTOTCORR.toFixed(2),
      sortable: true,
    },
  ];

  useEffect(() => {
    fetchWeatherData("initial", forecastType, daysCount); // Fetch initial data
  }, []);

  const fetchWeatherData = (type, forecastType, daysCount) => {
    let url;
    if (type === "initial") {
      setLoading(true);
      url = `${domain}/predictions`;
    }
    if (type === "update") {
      setLoading(true);
      url = `${domain}/predictions?counts=${daysCount}&forecastType=${forecastType}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setData(data.pred_temp);
        } else {
          alert("Geolocation request failed.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
      });
  };

  const handleForecastTypeChange = (e) => {
    setForecastType(e.target.value);
    fetchWeatherData("update", e.target.value, daysCount);
  };

  const handleDayscounts = (e) => {
    setDaysCounts(e.target.value);
    fetchWeatherData("update", forecastType, e.target.value);
  };

  return (
    <div className="container">
      <Header />

      <div className="flex justify-between items-start">
        {/* Left Section */}
        <div className="mr-4 w-1/4"></div>
        {/* Right Section */}
        <div className="right-section">
          <div className="mr-20 flex">
            <p className="text-white mr-3">Show Weather On:</p>
            <select value={forecastType} onChange={handleForecastTypeChange}>
              <option value="1">Hourly Forecast</option>
              <option value="2">3-Hourly Forecast</option>
              <option value="3">Daily Forecast</option>
            </select>
          </div>
          <div className="flex mr-3 mt-4">
            <p className="text-white">Select Time Extent:</p>
            <div className="flex ml-2">
              <p className="text-white mr-2">From:</p>
              <DatePicker
                className="w-24 pl-1"
                popperPlacement="left"
                selected={startDate}
                readOnly={true}
              />
              <p className="text-white mr-2 ml-3">
                to next{" "}
                <select
                  className="text-black"
                  value={daysCount}
                  onChange={handleDayscounts}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>{" "}
                days
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[67px]">
        {loading ? (
          <div className="w-full flex justify-center align-middle">
            <img src="./loader.gif" />
          </div>
        ) : (
          <DataTable
            className="text-white"
            columns={columns}
            data={data}
            fixedHeader
            pagination
          ></DataTable>
        )}
      </div>
    </div>
  );
};

export default PredictionDetails;
