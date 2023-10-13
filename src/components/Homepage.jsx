import Header from "../components/Header";
import Summary from "../components/Summary";
import Forecast from "../components/Forecast";
import Prediction from "../components/Prediction";
import Highlights from "../components/Highlights";
import HourlyTemperature from "../components/HourlyTemperature";


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
     
        </div>
      </div>
    </div>
  );
};

export default Homepage;
