import Header from "./Header";
import Summary from "./Summary";
import Forecast from "./Forecast";
import Prediction from "./Prediction";
import Highlights from "./Highlights";
import HourlyPredictions from "./HourlyPredictions";

const Homepage = () => {
  return (
    <div>
      <Header />
      <hr className="border-gray-600" />
      <div className="container flex justify-between items-start py-5">
        {/* Left Section */}
        <div className="mr-4 w-96">
          <Summary />
          <Forecast />
          <Prediction />
        </div>
        {/* Right Section */}
        <div className="w-4/6">
          <Highlights />
          <HourlyPredictions />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
