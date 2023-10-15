import Header from "./Header";
import Summary from "./Summary";
import Forecast from "./Forecast";
import Prediction from "./Prediction";
import Highlights from "./Highlights";
import HourlyTemperature from "./HourlyTemperature";

const Homepage = () => {
  return (
    <div className="container">
      <Header />
      <div className="flex justify-between items-start">
        {/* Left Section */}
        <div className="mr-4 w-1/4">
          <Summary />
          <Forecast />
          <Prediction />
        </div>
        {/* Right Section */}
        <div className="right-section w-3/4">
          <Highlights />
          <HourlyTemperature />
        </div>
      </div>
    </div>
  );
};

export default Homepage;